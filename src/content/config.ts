import { defineCollection, z } from "astro:content";

const openSourceCollection = defineCollection({
  schema: z.object({
    description: z.string().optional(),
    href: z.string().url().nonempty(),
    name: z.string().nonempty(),
  }),
  type: "data",
});

const workHistoryCollection = defineCollection({
  schema: z.object({
    client: z.string().nonempty(),
    endDate: z.string().transform((str) => new Date(str)),
    responsibilities: z.string().array(),
    role: z.string().nonempty(),
    startDate: z.string().transform((str) => new Date(str)),
  }),
  type: "data",
});

const resumeCollection = defineCollection({
  schema: z.object({
    education: z.object({
      description: z.string().nonempty(),
      endDate: z.string().transform((str) => new Date(str)),
      program: z.string().nonempty(),
      school: z.string().nonempty(),
      startDate: z.string().transform((str) => new Date(str)),
    }),
    email: z.string().nonempty(),
    icons: z.record(z.string().nonempty()),
    name: z.string().nonempty(),
    phone: z.string().nonempty(),
    socials: z.record(
      z.object({
        name: z.string().nonempty(),
        url: z.string().nonempty(),
      }),
    ),
  }),
  type: "data",
});

export const collections = {
  "open-source": openSourceCollection,
  "resume-data": resumeCollection,
  "work-history": workHistoryCollection,
};
