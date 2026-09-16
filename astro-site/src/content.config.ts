import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  // Blog posts live outside the docs tree so they render through a bespoke
  // layout (added in a later phase) instead of the docs chrome.
  blog: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      author: z.string().default('Gabe Stechschulte'),
      // Optional GitHub handle (no leading @); renders the byline as a link.
      authorGithub: z.string().optional(),
      description: z.string().optional(),
      // Free-form tags/categories, e.g. ["case-study", "product"]. Each becomes
      // a filterable archive at /blog/tags/<tag>/.
      tags: z.array(z.string()).default([]),
    }),
  }),
};
