import { defineCollection, z } from "astro:content";
// Don't forget to update any changes in the schema.ts file in the root directory

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
    skills: z.string().min(1).array(),
    socials: z.record(
      z.object({
        name: z.string().min(1),
        url: z.string().min(1),
      }),
    ),
  }),
  type: "data",
});

const cofeeCalenderCollection = defineCollection({
  schema: z.object({
    bean: z.string().min(1),
    brewMethod: z.string().min(1),
    classification: z.enum([
      "Daily coffee",
      "Special occasion",
      "Retry",
      "Not for me",
    ]),
    coffee: z.string().min(1),
    date: z.string().transform((str) => new Date(str)),
    processingMethod: z.string().min(1),
    rating: z.number().min(1).max(5),
    roaster: z.string().min(1),
    soundtrack: z.optional(z.string().or(z.string().url())),
    time: z.string().min(1),
    weather: z.string().min(1),
  }),
  type: "content",
});

export const collections = {
  "coffee-calendar": cofeeCalenderCollection,
  "open-source": openSourceCollection,
  "resume-data": resumeCollection,
  "work-history": workHistoryCollection,
};
