import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env["VERCEL_ENV"] === 'production' ?
  'https://kwoc.kossiitkgp.org' :
  (process.env["VERCEL_URL"]
    ? `https://${process.env["VERCEL_URL"]}`
    : undefined),
});
