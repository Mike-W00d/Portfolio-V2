import { z } from "zod";

export const PostSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title is Required" })
    .max(100, { message: "Title should be less than 100 characters" }),

  coverImage: z.string().url({ message: "Cover Image is Required" }),

  excerpt: z
    .string()
    .min(15, { message: "Excerpt should be more than 15 characters" }),

  content: z
    .string()
    .min(10, { message: "Content should be more than 10 characters" }),
});
