import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
      "main": fileURLToPath(new URL("./index.html", import.meta.url))
      },
    },
  },
});
