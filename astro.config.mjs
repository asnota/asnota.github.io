// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import embeds from "astro-embed/integration";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://asnota.github.io",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [embeds(), mdx(), icon(), sitemap()],
});
