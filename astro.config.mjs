// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Update this to your production domain before deploying.
  site: 'https://exporta-global.example.com',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/blog-find-overseas-buyers': '/blog/find-overseas-buyers',
    '/blog-incoterms-explained': '/blog/incoterms-explained',
    '/blog-get-paid-letters-of-credit': '/blog/get-paid-letters-of-credit',
  },
});
