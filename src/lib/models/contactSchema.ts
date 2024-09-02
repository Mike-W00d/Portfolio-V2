import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Max 30 characters")
    .regex(/^[a-zA-Z\s]*$/, "Name must only contain letters"),
  email: z.string().email("Invalid email address").min(4, "Email is required"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z
    .string()
    .min(8, "Message must be at least 8 characters")
    .max(500, "Message must be less than 500 characters"),
});
