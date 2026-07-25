import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
  }),

  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),

    description: z.string(),
    metaDescription: z.string().optional(),

    category: z.string().optional(),
    tag: z.string().optional(),

    image: z.string().optional(),
    imageAlt: z.string().optional(),

    pubDate: z.coerce.date(),
    dateModified: z.coerce.date().optional(),

    featured: z.boolean().default(false),
    draft: z.boolean().default(true),

    lead: z.string(),
    relatedSlugs: z.array(z.string()).default([]),

    emoji: z.string().optional(),
    readTime: z.string().optional(),
  }),
});

export const collections = { blog };
