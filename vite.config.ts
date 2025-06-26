import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
// import * as fs from "node:fs";
// import sharp from "sharp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
})
