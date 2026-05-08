import { projects } from "@/data/projects";
import { site } from "@/data/site";

const buildUrl = (path) => {
  const baseUrl = (site.url || "https://example.com").replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${normalized}`;
};

export async function GET() {
  const staticRoutes = ["/", "/about", "/services", "/portfolio", "/contact"];
  const projectRoutes = projects.map((project) => `/portfolio/${project.id}`);
  const urls = [...staticRoutes, ...projectRoutes];
  const lastMod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${buildUrl(url)}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${url === "/" ? "1.0" : "0.7"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
