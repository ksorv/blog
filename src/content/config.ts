import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
			title: z.string(),
      description: z.string(),
      // Transform string to Date object
      date: z.date(),
      updatedDate: z.date().optional(),
      heroImage: z.string().optional(),
      tags: z.array(z.string()),
      featured: z.boolean().optional()
    }),
});

export const collections = { blog };
