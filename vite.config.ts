import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { visualizer } from "rollup-plugin-visualizer"
// import * as fs from "node:fs";
// import sharp from "sharp";

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
    // {
    //     name: 'image-metadata',
    //     enforce: 'pre',
    //     async load(id) {
    //         if (/\.(png|jpe?g|gif)$/.test(id)) {
    //             const buffer = fs.readFileSync(id)
    //             const { width, height } = await sharp(buffer).metadata()
    //             const url = `/@fs${id}`
    //
    //             return `export default ${JSON.stringify({ src: url, width, height })}`
    //         }
    //     },
    // },
  ],
  // build: {
  //   minify: "terser", // or 'terser', or false
  //   terserOptions: {
  //     compress: {
  //       passes: 3, // multiple optimization passes
  //       pure_getters: true, // safe optimizations for property access
  //       unsafe: true, // apply "unsafe" transformations (assumes code is well-behaved)
  //       unsafe_arrows: true, // convert to arrow functions where possible
  //       unsafe_comps: true, // optimize comparisons
  //       unsafe_Function: true, // optimize Function constructor
  //       unsafe_math: true, // optimize math operations
  //       unsafe_symbols: true, // optimize symbol operations
  //       unsafe_methods: true, // optimize method calls
  //       toplevel: true, // drop unused top-level variables/functions
  //       drop_console: true, // remove console.* calls
  //       drop_debugger: true, // remove `debugger` statements
  //     },
  //     mangle: {
  //       toplevel: true, // mangle top-level names
  //     },
  //     output: {
  //       comments: false, // remove all comments
  //       beautify: false, // minify output
  //     },
  //     ecma: 2020, // use modern JS features if target supports
  //     module: true, // if input is an ES module
  //     toplevel: true, // compress & mangle top-level
  //   },
  //   rollupOptions: {
  //     output: {
  //       manualChunks: undefined, // optional: reduce chunking
  //     },
  //   },
  // },
})
