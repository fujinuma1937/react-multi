/* eslint-disable */
// @ts-nocheck
import fs from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path, { resolve } from "path";
import { fileURLToPath } from "url";
import handlebars from "vite-plugin-handlebars";
import imageminPlugin from "@macropygia/vite-plugin-imagemin-cache";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const metaData = JSON.parse(
  fs.readFileSync(resolve(__dirname, "./src/HTMLComponents/metaData.json"))
);

export default defineConfig({
  root: resolve(__dirname, "src/pages"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/pages/index.html"),
        sub: resolve(__dirname, "src/pages/sub/index.html"),
        subDetail: resolve(__dirname, "src/pages/sub/detail.html"),
      },
    },
  },
  server: {
    host: true,
  },
  publicDir: resolve(__dirname, "public"),
  plugins: [
    react(),
    handlebars({
      partialDirectory: resolve(__dirname, "./src/HTMLComponents/"),
      context(pagePath) {
        return metaData[pagePath];
      },
    }),
    imageminPlugin({
      cacheDir: ".cache",
      concurrency: 4,
      plugins: {
        pngquant: { quality: [0.65, 1] },
        mozjpeg: { quality: 85 },
      },
    }),
  ],
});
