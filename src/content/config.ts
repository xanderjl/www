import { defineCollection, z } from "astro:content";

const openSourceCollection = defineCollection({
  schema: z.object({
    description: z.string().optional(),
    href: z.string().url().min(1),
    name: z.string().min(1),
  }),
  type: "data",
});

const workHistoryCollection = defineCollection({
  schema: z.object({
    client: z.string().min(1),
    endDate: z.string().transform((str) => new Date(str)),
    responsibilities: z.string().array(),
    role: z.string().min(1),
    startDate: z.string().transform((str) => new Date(str)),
  }),
  type: "data",
});

const resumeCollection = defineCollection({
  schema: z.object({
    education: z.object({
      description: z.string().min(1),
      endDate: z.string().transform((str) => new Date(str)),
      program: z.string().min(1),
      school: z.string().min(1),
      startDate: z.string().transform((str) => new Date(str)),
    }),
    email: z.string().min(1),
    name: z.string().min(1),
    phone: z.string().min(1),
    socials: z.record(
      z.object({
        name: z.string().min(1),
        url: z.string().min(1),
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
