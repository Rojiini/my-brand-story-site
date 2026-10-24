import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { inquirySchema, shopifyContactAction } from "@/lib/contact-forms";
import gallery from "@/assets/hero-gallery.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us — HICH Gallery" },
    { name: "description", content: "Contact HICH Gallery in Chicago for artwork, orders, custom art, and collaborations. Subscribe to gallery newsletters and event invitations." },
    { property: "og:title", content: "Contact Us — HICH Gallery" },
    { property: "og:description", content: "Connect with HICH Gallery for artwork, custom commissions, and events, and join our newsletter." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ContactPage,
});

function ContactPage() {
  const [error, setError] = useState("");
  return <main>
    <header className="mx-auto max-w-[1400px] px-6 pb-12 pt-24 md:px-12 md:pt-32">
      <span className="text-eyebrow text-accent">Correspond</span>
      <h1 className="mt-6 font-display text-6xl leading-[1.05] text-foreground md:text-8xl">Contact Us</h1>
      <p className="mt-8 max-w-xl text-lg text-muted-foreground">A question, a collaboration, or the beginning of a new piece. We’d love to hear from you.</p>
    </header>
    <section className="mx-auto grid max-w-[1400px] gap-16 px-6 py-12 lg:grid-cols-[5fr_7fr] md:px-12">
      <div className="min-w-0 space-y-10">
        <img src={gallery} alt="Art displayed at HICH Gallery" width={1600} height={1100} className="aspect-[4/3] w-full object-cover" />
        <div><div className="flex items-center gap-3 text-eyebrow text-accent"><Mail size={16} /> Email</div><a className="mt-4 inline-flex max-w-full items-center gap-2 break-all font-display text-3xl text-primary hover:underline" href="mailto:info@hichgallery.com">info@hichgallery.com<ArrowUpRight size={20} className="shrink-0" /></a><p className="mt-3 text-sm text-muted-foreground">Artwork & orders · Custom commissions · Press & collaborations</p></div>
        <div><div className="flex items-center gap-3 text-eyebrow text-accent"><MapPin size={16} /> Mailbox</div><p className="mt-4 font-display text-2xl leading-relaxed">7367 N Ashland Blvd<br />Chicago, IL 60626<br />United States</p></div>
      </div>
      <div className="min-w-0">
        <span className="text-eyebrow text-accent">Get in touch</span><h2 className="mt-4 font-display text-4xl">Send us a message</h2>
        <form action={shopifyContactAction} method="post" className="mt-8 space-y-6" onSubmit={(event) => {
          const data = new FormData(event.currentTarget);
          const result = inquirySchema.safeParse({ name: data.get("contact[name]"), email: data.get("contact[email]"), topic: data.get("contact[Topic]"), message: data.get("contact[body]") });
          if (!result.success) { event.preventDefault(); setError(result.error.issues[0]?.message || "Check your details."); } else { setError(""); }
        }}>
          <input type="hidden" name="form_type" value="contact" /><input type="hidden" name="utf8" value="✓" />
          <label className="block space-y-2 text-sm" htmlFor="contact-name">Name<Input id="contact-name" name="contact[name]" required maxLength={100} autoComplete="name" className="h-12 rounded-none" /></label>
          <label className="block space-y-2 text-sm" htmlFor="contact-email">Email address<Input id="contact-email" name="contact[email]" required type="email" maxLength={254} autoComplete="email" className="h-12 rounded-none" /></label>
          <label className="block space-y-2 text-sm" htmlFor="contact-topic">What’s your message about?<select id="contact-topic" name="contact[Topic]" className="h-12 w-full rounded-none border border-input bg-background px-3 text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">{["General inquiry", "Artwork & orders", "Customized art", "Events & collaborations"].map(topic => <option key={topic}>{topic}</option>)}</select></label>
          <label className="block space-y-2 text-sm" htmlFor="contact-message">Message<Textarea id="contact-message" name="contact[body]" required maxLength={5000} rows={7} className="rounded-none" /></label>
          <p className="text-sm text-muted-foreground">We’ll use your details to respond to your inquiry. Sending a message does not subscribe you to newsletters.</p>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          <Button type="submit" size="lg" className="h-12 rounded-none text-eyebrow">Send message <ArrowUpRight /></Button>
        </form>
      </div>
    </section>
    <section className="mt-16 border-y border-border bg-card">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:px-12 lg:grid-cols-2">
        <div><span className="text-eyebrow text-accent">Stay connected</span><h2 className="mt-4 font-display text-5xl">Letters from HICH</h2><p className="mt-6 max-w-md text-muted-foreground">New art, stories from our artists, and invitations to our next events. Join our newsletter.</p></div>
        <NewsletterSignup />
      </div>
    </section>
  </main>;
}
