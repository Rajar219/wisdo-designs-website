import { z } from "zod";

export const contactSchema = z.object({
  botcheck: z.string().max(100).optional(), // Honeypot
  name: z.string().min(2, "Name is required (at least 2 characters)").max(100, "Name must be less than 100 characters"),
  businessName: z.string().max(150, "Business name must be less than 150 characters").optional(),
  phone: z.string().min(10, "Valid phone number is required").max(20, "Phone number is too long"),
  email: z.string().email("Valid email is required").max(100, "Email must be less than 100 characters"),
  serviceRequired: z.enum([
    "Software Development",
    "Website Development",
    "Designing",
    "Digital Marketing",
    "Other"
  ], { message: "Service is required" }),
  budgetRange: z.string().max(100, "Budget range is too long").optional(),
  preferredContact: z.enum(["Email", "Phone", "WhatsApp"], { message: "Preferred contact method is required" }),
  message: z.string().min(10, "Please provide more details about your project (at least 10 characters)").max(3000, "Message must be less than 3000 characters"),
  source: z.string().max(150).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const quoteSchema = z.object({
  botcheck: z.string().max(100).optional(), // Honeypot
  name: z.string().min(2, "Name is required (at least 2 characters)").max(100, "Name must be less than 100 characters"),
  businessName: z.string().max(150, "Business name must be less than 150 characters").optional(),
  phone: z.string().min(10, "Valid phone number is required").max(20, "Phone number is too long"),
  email: z.string().email("Valid email is required").max(100, "Email must be less than 100 characters"),
  serviceRequired: z.enum([
    "Software Development",
    "Website Development",
    "Designing",
    "Digital Marketing",
    "Other"
  ], { message: "Service is required" }),
  budgetRange: z.string().max(100, "Budget range is too long").optional(),
  expectedTimeline: z.enum([
    "As soon as possible",
    "Within 1 month",
    "1–3 months",
    "Planning stage"
  ], { message: "Timeline is required" }),
  message: z.string().min(10, "Please provide more details about your project (at least 10 characters)").max(3000, "Message must be less than 3000 characters"),
  source: z.string().max(150).optional(),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
