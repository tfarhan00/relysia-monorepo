/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    tanstackRouter({
      routesDirectory: "./app/routes",
      generatedRouteTree: "./app/route-tree.gen.ts",
    }),
    react(),
    tailwindcss(),
    viteCompression(),
  ],
  publicDir: "./public",
  build: {
    outDir: "./dist",
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
});
