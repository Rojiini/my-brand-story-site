import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newsletterSchema, shopifyContactAction } from "@/lib/contact-forms";

export function NewsletterSignup({ id = "newsletter", label = "Subscribe", names = true, tag = "newsletter" }: { id?: string; label?: string; names?: boolean; tag?: string }) {
  const [error, setError] = useState("");
  return (
    <form action={shopifyContactAction} method="post" className="space-y-6" onSubmit={(event) => {
      const data = new FormData(event.currentTarget);
      const result = newsletterSchema.safeParse({ email: data.get("contact[email]"), firstName: data.get("contact[first_name]") || "", lastName: data.get("contact[last_name]") || "", consent: data.get("contact[accepts_marketing]") === "true" });
      if (!result.success) { event.preventDefault(); setError(result.error.issues[0]?.message || "Check your details."); }
      else { setError(""); }
    }}>
      <input type="hidden" name="form_type" value="customer" />
      <input type="hidden" name="utf8" value="✓" />
      <input type="hidden" name="contact[tags]" value={tag} />
      {names && <div className="grid gap-6 sm:grid-cols-2">
        <label className="block space-y-2 text-sm" htmlFor={`${id}-first`}>First name <span className="text-muted-foreground">(optional)</span><Input id={`${id}-first`} name="contact[first_name]" autoComplete="given-name" maxLength={100} className="h-12 rounded-none" /></label>
        <label className="block space-y-2 text-sm" htmlFor={`${id}-last`}>Last name <span className="text-muted-foreground">(optional)</span><Input id={`${id}-last`} name="contact[last_name]" autoComplete="family-name" maxLength={100} className="h-12 rounded-none" /></label>
      </div>}
      <label className="block space-y-2 text-sm" htmlFor={`${id}-email`}>Email address<Input id={`${id}-email`} name="contact[email]" type="email" required autoComplete="email" maxLength={254} className="h-12 rounded-none" /></label>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"><input type="checkbox" name="contact[accepts_marketing]" value="true" required className="mt-1 size-4 shrink-0 accent-primary" />I agree to receive HICH Gallery newsletters, art updates, and event invitations by email. I can unsubscribe at any time.</label>
      {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
      <Button type="submit" size="lg" className="h-12 rounded-none text-eyebrow">{label}</Button>
    </form>
  );
}
