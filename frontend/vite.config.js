import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-router-dom": require.resolve("react-router-dom"),
    },
  },
  server: { port: 5173 },
});
