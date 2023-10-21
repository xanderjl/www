import { kebabCase } from "change-case";
import fs from "fs/promises";
import path from "path";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const zodOpenSourceSchema = z.object({
  description: z.string().optional(),
  href: z.string().url().min(1),
  name: z.string().min(1),
});

const zodWorkHistorySchema = z.object({
  client: z.string().min(1),
  endDate: z.string().transform((str) => new Date(str)),
  responsibilities: z.string().array(),
  role: z.string().min(1),
  startDate: z.string().transform((str) => new Date(str)),
});

const zodResumeSchema = z.object({
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
});

const openSourceSchema = zodToJsonSchema(
  zodOpenSourceSchema,
  "openSourceSchema",
);
const workHistorySchema = zodToJsonSchema(
  zodWorkHistorySchema,
  "workHistorySchema",
);
const resumeSchema = zodToJsonSchema(zodResumeSchema, "resumeSchema");

const zodSchemas = {
  openSourceSchema,
  resumeSchema,
  workHistorySchema,
};

Promise.all(
  Object.entries(zodSchemas).map(([key, val]) => {
    fs.writeFile(
      path.join(process.cwd(), "schemas", `${kebabCase(key)}.json`),
      JSON.stringify(val, null, 2),
    );
  }),
);
