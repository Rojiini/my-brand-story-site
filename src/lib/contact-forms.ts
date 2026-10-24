import { z } from "zod";

export const shopifyContactAction = "https://4j4mx2-h2.myshopify.com/contact";
export const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid email address.").max(254),
  firstName: z.string().trim().max(100),
  lastName: z.string().trim().max(100),
  consent: z.literal(true, { errorMap: () => ({ message: "Please agree to receive newsletters before subscribing." }) }),
});
export const inquirySchema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  topic: z.enum(["General inquiry", "Artwork & orders", "Customized art", "Events & collaborations"]),
  message: z.string().trim().min(1, "Enter your message.").max(5000),
});
