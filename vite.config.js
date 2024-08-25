import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/react-tours-project": {
        target: "https://www.course-api.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/react-tours-project/, ""), // Удаляет /react-tours-project из пути запроса
      },
    },
  },
});
