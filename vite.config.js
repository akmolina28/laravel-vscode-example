import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  server: {
    hmr: {
      host: "localhost",
    },
  },
  plugins: [
    laravel({
      input: "resources/js/app.js",
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    eslint(),
  ],
});
