import { z } from "zod";

export const postFormSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(6, { message: "Title must be atleast 6 characters" }),
  price: z.string().min(1, { message: "Price is required" }),
});

export type PostFormSchema = z.infer<typeof postFormSchema>;
