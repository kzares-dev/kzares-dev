import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			slug: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			collection: z.string(), 
			heroImage: image().optional(),
		}),
});

const category = defineCollection({
	loader: glob({ base: './src/content/category', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			slug: z.string(),
			image: image().optional(),
		}),
});

export const collections = { blog, category };
