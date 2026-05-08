import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "./src/app",
  ssr: true,
  prerender: ["/", "/about", "/services", "/portfolio", "/contact"],
} satisfies Config;
