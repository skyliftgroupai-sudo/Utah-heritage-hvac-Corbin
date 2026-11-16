// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const EXCLUDE = ['/thank-you/', '/404/', '/_styleguide/'];

export default defineConfig({
  site: 'https://utahheritagehvac.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  prefetch: false,
  integrations: [
    sitemap({
      filter: (page) => !EXCLUDE.some((p) => page.endsWith(p)),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
