import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
	schema: z.object({
		title: z.string(),
		heading: z.string(),
	}),
});

const posts = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		summary: z.string().optional(),
		image: z.string().optional(),
	}),
});

const classes = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/classes' }),
	schema: z.object({
		title: z.string(),
		level: z.enum(['puppy', 'adolescent', 'adult', 'behaviour']),
		day: z.string(),
		time: z.string(),
		price: z.number(),
		weeks: z.number(),
		spots: z.number(),
		image: z.union([z.number(), z.string()]),
		summary: z.string(),
		featured: z.boolean().default(false),
		bookingUrl: z.string().optional(),
	}),
});

export const collections = { pages, posts, classes };
