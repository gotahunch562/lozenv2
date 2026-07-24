import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.string(),
    emoji: z.string(),
    image: z.string().optional(),
    pubDate: z.coerce.date(),
    readTime: z.string(),
    featured: z.boolean().default(false),
    lead: z.string(),
    relatedSlugs: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
