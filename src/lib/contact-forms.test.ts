import { describe, expect, test } from "bun:test";
import { newsletterSchema, inquirySchema } from "./contact-forms";
const subscriber = { email: "reader@example.com", firstName: "Art", lastName: "Lover" };
describe("Newsletter consent", () => {
  test("rejects signup without explicit consent", () => expect(newsletterSchema.safeParse({ ...subscriber, consent: false }).success).toBe(false));
  test("accepts a valid consenting subscriber", () => expect(newsletterSchema.safeParse({ ...subscriber, consent: true }).success).toBe(true));
  test("rejects malformed email addresses", () => expect(newsletterSchema.safeParse({ ...subscriber, email: "invalid", consent: true }).success).toBe(false));
});
test("inquiries do not require or imply a newsletter subscription", () => {
  const result = inquirySchema.parse({ name: "Reader", email: "reader@example.com", topic: "General inquiry", message: "I have a question about your art." });
  expect("consent" in result).toBe(false);
});
