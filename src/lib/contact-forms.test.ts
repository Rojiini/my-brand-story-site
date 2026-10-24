import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { newsletterSchema, inquirySchema } from "./contact-forms";
const subscriber = { email: "reader@example.com", firstName: "Art", lastName: "Lover" };
describe("Newsletter consent", () => {
  it("rejects signup without explicit consent", () => assert.equal(newsletterSchema.safeParse({ ...subscriber, consent: false }).success, false));
  it("accepts a valid consenting subscriber", () => assert.equal(newsletterSchema.safeParse({ ...subscriber, consent: true }).success, true));
  it("rejects malformed email addresses", () => assert.equal(newsletterSchema.safeParse({ ...subscriber, email: "invalid", consent: true }).success, false));
});
it("inquiries do not require or imply a newsletter subscription", () => {
  const result = inquirySchema.parse({ name: "Reader", email: "reader@example.com", topic: "General inquiry", message: "I have a question about your art." });
  assert.equal("consent" in result, false);
});
