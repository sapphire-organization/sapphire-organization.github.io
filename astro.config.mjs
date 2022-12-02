import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://sapphire-organization.github.io',
  integrations: [tailwind()],
});