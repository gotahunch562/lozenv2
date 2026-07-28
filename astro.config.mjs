// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.lozenadvisory.com',

  integrations: [
    mdx(),
    sitemap({
      lastmod: new Date('2026-07-28T00:00:00.000Z'),
    }),
  ],

  adapter: vercel(),
});
