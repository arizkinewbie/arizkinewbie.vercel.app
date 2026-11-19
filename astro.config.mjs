// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Override per environment: SITE_URL=https://arizkinewbie.nbies.id npm run build
  site: process.env.SITE_URL || "https://arizkinewbie.com",
  integrations: [
    sitemap({
      // Halaman / hanya meta-refresh 301 ke /id/ — jangan masuk sitemap (duplikat di mata Google).
      filter: (page) => new URL(page).pathname !== "/",
      i18n: {
        defaultLocale: "id",
        locales: { id: "id", en: "en" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "id",
    locales: ["id", "en"],
    routing: { prefixDefaultLocale: true },
  },
  build: { inlineStylesheets: "auto" },
});
