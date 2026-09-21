import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import laTalk from "@/assets/events/la-2025-IMG_4685.jpg";
import laCanvas from "@/assets/events/la-2025-IMG_4716.jpg";
import laTable from "@/assets/events/la-2025-IMG_4725.jpg";
import laRoom from "@/assets/events/la-2025-IMG_4744.jpg";

const laGallery = [
  { src: laTalk, alt: "Visitors viewing a calligraphy work at the HICH Gallery Los Angeles event" },
  { src: laCanvas, alt: "A green calligraphy canvas on display at the Los Angeles event" },
  { src: laTable, alt: "Guests browsing handmade jewellery at the Los Angeles event" },
  { src: laRoom, alt: "The gathering room and table at the HICH Gallery Los Angeles event" },
];

export const Route = createFileRoute("/exhibitions")({
  head: () => ({
    meta: [
      { title: "Events — HICH Gallery" },
      {
        name: "description",
        content:
          "Art beyond the gallery — HICH Gallery events bring artists, art lovers, and communities together in Chicago and beyond.",
      },
      { property: "og:title", content: "Events — HICH Gallery" },
      {
        property: "og:description",
        content:
          "Art beyond the gallery — exhibitions, artist showcases, and creative experiences from HICH Gallery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/exhibitions" }],
  }),
  component: EventsPage,
});

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
      <div className="mb-14 flex items-baseline gap-6">
        <span className="text-eyebrow text-accent">{label}</span>
        <div className="hich-hairline flex-1" />
      </div>
      {children}
    </section>
  );
}

function EventsPage() {
  const [email, setEmail] = useState("");

  const notify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("You're on the list — we'll be in touch about our next event.");
    setEmail("");
  };

  return (
    <main>
      <header className="mx-auto max-w-[1400px] px-6 pb-8 pt-24 md:px-12 md:pt-32">
        <span className="text-eyebrow text-accent">Events</span>
        <h1 className="mt-6 font-display text-6xl leading-[1.05] text-foreground md:text-8xl">
          Art Beyond the Gallery
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          At HICH Gallery, we believe art is not limited to a gallery space. Our events bring
          artists, art lovers, and communities together to experience creativity, culture, and
          meaningful connections.
        </p>
      </header>

      <Section label="Past Event">
        <article className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <img
              src={laRoom}
              alt="HICH Gallery Los Angeles Event"
              width={1200}
              height={1600}
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center md:col-span-5">
            <span className="text-eyebrow text-muted-foreground">Los Angeles · 2025</span>
            <h2 className="mt-6 font-display text-4xl italic text-foreground md:text-5xl">
              HICH Gallery Los Angeles Event
            </h2>
            <div className="hich-hairline my-8 w-16" />
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Last year, HICH Gallery brought its art and creative vision to Los Angeles for a
                special gathering celebrating contemporary art and artistic expression.
              </p>
              <p>
                The event brought together art enthusiasts, creatives, and members of the community
                to explore the work of our artists and connect through art.
              </p>
              <p>
                It was a meaningful opportunity for HICH Gallery to meet people beyond our gallery
                space, share our artists' work, and create new connections within the art
                community.
              </p>
              <p className="font-display text-lg italic text-foreground">
                Thank you to everyone who joined us and helped make the event memorable.
              </p>
            </div>
          </div>
        </article>
      </Section>

      <Section label="Upcoming Events">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-5xl italic text-foreground md:text-6xl">
            Join Us at Our Next Event
          </h2>
          <div className="hich-hairline mx-auto my-10 w-16" />
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>We are always looking for new ways to bring art closer to our community.</p>
            <p>
              Our upcoming events will feature art exhibitions, artist showcases, creative
              experiences, and opportunities to meet and connect with artists and fellow art
              lovers.
            </p>
            <p>
              Stay connected with HICH Gallery to be the first to hear about our next event,
              including the date, location, featured artists, and special experiences.
            </p>
            <p className="font-display text-lg italic text-foreground">
              We look forward to seeing you at our next event.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-8">
            <a
              href="mailto:info@hichgallery.com?subject=Upcoming%20Events"
              className="inline-block border border-foreground px-10 py-4 text-eyebrow text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              View Upcoming Events
            </a>

            <form onSubmit={notify} className="w-full max-w-md">
              <span className="text-eyebrow text-accent">Notify me</span>
              <div className="mt-4 flex border border-foreground">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  aria-label="Email address for event notifications"
                  className="w-full bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-foreground px-6 text-eyebrow text-background transition-opacity hover:opacity-80"
                >
                  Notify Me
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </main>
  );
}
