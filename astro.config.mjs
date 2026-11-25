import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sitepraja.github.io',
  base: '/demo-otica-lopes',
  integrations: [tailwind()],
});