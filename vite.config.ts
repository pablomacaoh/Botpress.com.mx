import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  const env = loadEnv(mode, process.cwd(), '');

  // Determine the base URL - Custom domain serves from root
  const isGitHubPages = env.VITE_GITHUB_PAGES === 'true' || mode === 'production';
  const base = '/';

  console.log('🚀 Building with:', {
    mode,
    base,
    isGitHubPages,
    env: env.VITE_GITHUB_PAGES
  });

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    base,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    optimizeDeps: {
      include: ["@tanstack/react-query"]
    },
    build: {
      outDir: "dist",
      sourcemap: true, // Enable sourcemaps for debugging
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: undefined,
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      },
      assetsInlineLimit: 0,
      cssCodeSplit: true,
      minify: true,
      emptyOutDir: true,
      copyPublicDir: true,
      commonjsOptions: {
        include: [/node_modules/]
      }
    },
    define: {
      'import.meta.env.VITE_HOMEPAGE': JSON.stringify(base),
      'import.meta.env.VITE_GITHUB_PAGES': JSON.stringify(isGitHubPages),
    },
  };
});