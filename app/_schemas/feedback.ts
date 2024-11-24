import { z } from "zod";

export const feedbackSchema = z.object({
  title: z
    .string({ message: "Title is required" })
    .min(5, "Title should have at least 5 characters"),
  category: z.string({ message: "Select a Category" }),
  description: z
    .string({ message: "Details is required" })
    .min(5, "Description should have at least 5 characters"),
});

export type FeedbackSchema = z.infer<typeof feedbackSchema>;
