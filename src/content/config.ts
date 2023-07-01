import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  schema: z.object({
    draft: z.boolean().default(false),
    title: z.string().nonempty(),
    date: z.date().transform(str => new Date(str)),
    description: z.string().optional(),
  }),
});

export const collections = {
  writing,
};
