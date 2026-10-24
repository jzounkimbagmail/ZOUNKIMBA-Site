import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://zounkimba-site.netlify.app',
  integrations: [tailwind()],
});
