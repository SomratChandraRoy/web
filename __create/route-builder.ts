import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { Hono } from "hono";
import type { Handler } from "hono/types";
import updatedFetch from "../src/__create/fetch";

const API_BASENAME = "/api";
const api = new Hono();

// Build-time Vite glob — included into the bundle so imports are resolved by Vite.
// @ts-ignore
const BUILD_ROUTE_MODULES: Record<string, any> = import.meta.glob(
  "../src/app/api/**/route.js",
  { eager: true },
) as any;

// Get current directory
const __dirname = join(
  fileURLToPath(new URL(".", import.meta.url)),
  "../src/app/api",
);
if (globalThis.fetch) {
  globalThis.fetch = updatedFetch;
}

// Recursively find all route.js files
async function findRouteFiles(dir: string): Promise<string[]> {
  const files = await readdir(dir);
  let routes: string[] = [];

  for (const file of files) {
    try {
      const filePath = join(dir, file);
      const statResult = await stat(filePath);

      if (statResult.isDirectory()) {
        routes = routes.concat(await findRouteFiles(filePath));
      } else if (file === "route.js") {
        // Handle root route.js specially
        if (filePath === join(__dirname, "route.js")) {
          routes.unshift(filePath); // Add to beginning of array
        } else {
          routes.push(filePath);
        }
      }
    } catch (error) {
      console.error(`Error reading file ${file}:`, error);
    }
  }

  return routes;
}

// Helper function to transform file path to Hono route path
function getHonoPath(routeFile: string): { name: string; pattern: string }[] {
  // routeFile may be a Vite glob key like '../src/app/api/foo/route.js'
  // or an absolute filesystem path. Normalize to the portion under src/app/api.
  let relativePath = routeFile;
  const marker = "src/app/api";
  if (routeFile.includes(marker)) {
    relativePath = routeFile.substring(
      routeFile.indexOf(marker) + marker.length,
    );
  } else if (routeFile.startsWith(__dirname)) {
    relativePath = routeFile.replace(__dirname, "");
  }
  relativePath = relativePath.replaceAll("\\", "/");
  const parts = relativePath.split("/").filter(Boolean);
  const routeParts = parts.slice(0, -1); // Remove 'route.js'
  if (routeParts.length === 0) {
    return [{ name: "root", pattern: "" }];
  }
  const transformedParts = routeParts.map((segment) => {
    const match = segment.match(/^\[(\.{3})?([^\]]+)\]$/);
    if (match) {
      const [_, dots, param] = match;
      return dots === "..."
        ? { name: param, pattern: `:${param}{.+}` }
        : { name: param, pattern: `:${param}` };
    }
    return { name: segment, pattern: segment };
  });
  return transformedParts;
}

const toRouteImportUrl = (routeFile: string, cacheBust: string) => {
  const url = pathToFileURL(routeFile);
  url.searchParams.set("update", cacheBust);
  return url.href;
};

// Import and register all routes
async function registerRoutes() {
  // Prefer build-time included modules when available
  let routeFiles: string[] = [];
  if (BUILD_ROUTE_MODULES && Object.keys(BUILD_ROUTE_MODULES).length) {
    routeFiles = Object.keys(BUILD_ROUTE_MODULES).slice();
  } else {
    routeFiles = (
      await findRouteFiles(__dirname).catch(async (error) => {
        console.error("Error finding route files in build path:", error);
        // Try scanning the source directory relative to the project root
        const altDir = join(process.cwd(), "src/app/api");
        try {
          const altFiles = await findRouteFiles(altDir);
          return altFiles;
        } catch (err) {
          console.error("Error finding route files in source path:", err);
          return [];
        }
      })
    ).slice();
  }

  routeFiles.sort((a, b) => b.length - a.length);

  // Clear existing routes
  api.routes = [];

  for (const routeFile of routeFiles) {
    try {
      let route: any;
      if (BUILD_ROUTE_MODULES && BUILD_ROUTE_MODULES[routeFile]) {
        route = BUILD_ROUTE_MODULES[routeFile];
      } else {
        route = await import(
          /* @vite-ignore */ toRouteImportUrl(routeFile, String(Date.now()))
        );
      }

      const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
      for (const method of methods) {
        try {
          if (route[method]) {
            const parts = getHonoPath(routeFile);
            const honoPath = `/${parts.map(({ pattern }) => pattern).join("/")}`;
            const handler: Handler = async (c) => {
              const params = c.req.param();
              if (import.meta.env.DEV) {
                const updatedRoute = await import(
                  /* @vite-ignore */ toRouteImportUrl(
                    routeFile,
                    String(Date.now()),
                  )
                );
                return await updatedRoute[method](c.req.raw, { params });
              }
              return await route[method](c.req.raw, { params });
            };
            const methodLowercase = method.toLowerCase();
            switch (methodLowercase) {
              case "get":
                api.get(honoPath, handler);
                break;
              case "post":
                api.post(honoPath, handler);
                break;
              case "put":
                api.put(honoPath, handler);
                break;
              case "delete":
                api.delete(honoPath, handler);
                break;
              case "patch":
                api.patch(honoPath, handler);
                break;
              default:
                console.warn(`Unsupported method: ${method}`);
                break;
            }
          }
        } catch (error) {
          console.error(
            `Error registering route ${routeFile} for method ${method}:`,
            error,
          );
        }
      }
    } catch (error) {
      console.error(`Error importing route file ${routeFile}:`, error);
    }
  }
}

// Initial route registration
await registerRoutes();

// Hot reload routes in development
if (import.meta.env.DEV) {
  import.meta.glob("../src/app/api/**/route.js", {
    eager: true,
  });
  if (import.meta.hot) {
    import.meta.hot.accept((newSelf) => {
      registerRoutes().catch((err) => {
        console.error("Error reloading routes:", err);
      });
    });
  }
}

export { api, API_BASENAME };
