import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const schemaAboutEntity = z.object({
  type: z
    .enum(['DefinedTerm', 'Organization', 'Person', 'Thing'])
    .default('DefinedTerm'),
  name: z.string(),
  url: z.string(),
  description: z.string().optional(),
  alternateName: z.string().optional(),
});

const schemaMentionEntity = z.object({
  type: z
    .enum(['DefinedTerm', 'Organization', 'Person', 'Thing'])
    .default('Organization'),
  name: z.string(),
  url: z.string().optional(),
  description: z.string().optional(),
  alternateName: z.string().optional(),
});

const articleJsonLd = z.object({
  type: z.enum(['Article', 'TechArticle']).default('Article'),
  keywords: z.array(z.string()).default([]),
  definedTerm: z
    .object({
      name: z.string(),
      description: z.string(),
      alternateName: z.string().optional(),
      url: z.string().optional(),
    })
    .optional(),
  about: z.array(schemaAboutEntity).default([]),
  mentions: z.array(schemaMentionEntity).default([]),
});

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

    jsonLd: articleJsonLd.optional(),
  }),
});

const news = defineCollection({
  loader: glob({
    base: './src/content/news',
    pattern: '**/*.{md,mdx}',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    metaDescription: z.string().optional(),

    pubDate: z.coerce.date(),
    dateModified: z.coerce.date().optional(),

    category: z.string().default('Press Release'),
    releaseLabel: z.string().default('For Immediate Release'),

    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCaption: z.string().optional(),

    draft: z.boolean().default(true),
  }),
});

export const collections = {
  blog,
  news,
};
