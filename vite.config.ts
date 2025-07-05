import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { visualizer } from "rollup-plugin-visualizer"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Automatically opens the visualizer in your browser after build
      gzipSize: true, // Show gzipped size
      brotliSize: true, // Show brotli compressed size
      filename: "bundle-analysis.html", // Output file name
    }),
    ViteImageOptimizer({}),
  ],
})
