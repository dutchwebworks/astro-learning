import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  site: "https://astro-learning.dutchwebworks.nl",
  integrations: [tailwind(), sitemap()],
});
