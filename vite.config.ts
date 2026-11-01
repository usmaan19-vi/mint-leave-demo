import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/mint-leave-demo/",
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      routes: [
        "/",
        "/about",
        "/gallery",
        "/menu",
        "/reservations",
      ],
    },
  },
});
