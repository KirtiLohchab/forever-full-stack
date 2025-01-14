import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-router-dom": import.meta.resolve("react-router-dom"),
    },
  },
  server: { port: 5173 },
});
