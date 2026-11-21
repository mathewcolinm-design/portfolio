import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Version 2 reads the same words and images as the first site, from ../site/content.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5174, fs: { allow: [".", "../site/content"] } },
  preview: { port: 4174 },
});
