import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "./src/app",
  ssr: false,
  prerender: ["/", "/about", "/services", "/portfolio", "/contact"],
} satisfies Config;
