import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().max(60),
    description: z.string().min(120).max(160),
    pubDate: z.string(),
    updatedDate: z.string(),
    category: z.enum(['ac', 'heating', 'maintenance', 'commercial']),
    tldr: z.string(),
    photo: z.string().default('acCondenser'),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
