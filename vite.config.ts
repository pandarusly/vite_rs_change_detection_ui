import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import mars3dCesium from "vite-plugin-mars3d"
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    }
  },
  plugins: [
    vue(),
    mars3dCesium(),
  ],
});

// module.exports = {
//   proxy: {
//     '/change': {
//       target: 'http://127.0.0.1:2323',
//       changeOrigin: true,
//       rewrite: (path) => path.replace(/^\/api/, ''),
//     },
//   },
// };
