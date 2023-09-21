import { defineCollection, z } from 'astro:content'

const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean().default(false),
    title: z.string().nonempty(),
    date: z.date().transform(str => new Date(str)),
    description: z.string().optional()
  })
})

const workHistoryCollection = defineCollection({
  type: 'data',
  schema: z.object({
    role: z.string().nonempty(),
    client: z.string().nonempty(),
    startDate: z.string().transform(str => new Date(str)),
    endDate: z.string().transform(str => new Date(str)),
    responsibilities: z.string().array()
  })
})

const resumeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string().nonempty(),
    email: z.string().nonempty(),
    phone: z.string().nonempty(),
    icons: z.record(z.string().nonempty()),
    socials: z.record(
      z.object({
        name: z.string().nonempty(),
        url: z.string().nonempty()
      })
    ),
    education: z.object({
      school: z.string().nonempty(),
      program: z.string().nonempty(),
      description: z.string().nonempty(),
      startDate: z.string().transform(str => new Date(str)),
      endDate: z.string().transform(str => new Date(str))
    })
  })
})

export const collections = {
  writing: writingCollection,
  'work-history': workHistoryCollection,
  'resume-data': resumeCollection
}
