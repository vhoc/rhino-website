import { z } from "zod";

const nameRegex = /^[a-zá-źñ' ]+$/i;

export const ContactFormSchema = z.object({
  subject: z.enum(["Partnerships", "Technical Issue", "Finance", "Feedback", "Careers"]),
  firstName: z.string()
    .min(2, "First name is required")
    .max(50, "First name is too long")
    .regex(nameRegex, "Only letters, accents, and apostrophes are allowed"),
  lastName: z.string()
    .min(2, "Last name is required")
    .max(50, "Last name is too long")
    .regex(nameRegex, "Only letters, accents, and apostrophes are allowed"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required").max(5000, "Message is too long"),
});