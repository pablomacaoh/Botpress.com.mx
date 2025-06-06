// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// No lovable-tagger in this version as it was removed from package.json earlier
// If you want it, add it back to devDependencies with `npm install lovable-tagger --save-dev`

export default defineConfig(({ mode }) => {
  // For a custom domain on GitHub Pages, the base path is always the root.
  const base = '/';

  console.log(`🚀 Building for custom domain with base path: ${base}`);

  return {
    base: base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});