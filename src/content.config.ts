import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const compositions = defineCollection({
  loader: file("src/data/compositions/compositions.json"),
  schema: z.object({
    principalTitle: z.string(),
    // Short category name for the homepage.
    shortTitle: z.string().optional(),
    secondary: z.array(
      z.object({
        secondaryTitle: z.string().optional(),
        compositions: z.array(
          z.object({
            path: z.string().optional(),
            compositionTitle: z.string(),
            // Short name and flag for the homepage highlights.
            shortTitle: z.string().optional(),
            highlight: z.boolean().optional(),
            compositionSubTitle: z.string().optional(),
            duration: z.string().optional(),
            compositionDescription: z.array(z.string()).optional(),
            seoDescription: z.string().optional(),
          }),
        ),
      }),
    ),
  }),
});

const achievements = defineCollection({
  loader: file("src/data/achievements/achievements.json"),
  schema: z.object({
    category: z.string(),
    details: z.array(
      z.object({
        description: z.string(),
        imgPath: z.string(),
        imgAlt: z.string().optional(),
      }),
    ),
  }),
});

export const collections = { compositions, achievements };
