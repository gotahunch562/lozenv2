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
      serialize(item) {
        if (item.url === 'https://www.lozenadvisory.com/about/') {
          item.lastmod = new Date('2026-07-20').toISOString();
        }

        return item;
      },
    }),
  ],

  adapter: vercel(),
});
