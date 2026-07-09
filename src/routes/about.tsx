import { createFileRoute } from "@tanstack/react-router";
import heroGallery from "@/assets/hero-gallery.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Visit — HICH Gallery" },
      {
        name: "description",
        content:
          "About HICH Gallery, and how to visit us in central Paris. Hours, address, and everything you need for your visit.",
      },
      { property: "og:title", content: "About & Visit — HICH Gallery" },
      {
        property: "og:description",
        content: "About HICH Gallery, and how to visit us in central Paris.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <header className="mx-auto max-w-[1400px] px-6 pb-8 pt-24 md:px-12 md:pt-32">
        <span className="text-eyebrow text-accent">The Gallery</span>
        <h1 className="mt-6 font-display text-6xl leading-[1.05] text-foreground md:text-8xl">
          About & Visit
        </h1>
      </header>

      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 py-16 md:grid-cols-12 md:px-12">
        <div className="md:col-span-5">
          <img
            src={heroGallery}
            alt="Interior of HICH Gallery"
            width={1600}
            height={1100}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="space-y-6 md:col-span-7">
          <p className="font-display text-3xl italic leading-[1.35] text-foreground md:text-4xl">
            HICH — the Persian word for <em className="text-primary">nothing</em> — was founded
            in 2021 as a small gallery for large silences.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            We occupy a single-storey stone building near the Palais Brongniart in the 2nd
            arrondissement. Three rooms, a courtyard, one thick blue door. Every exhibition is
            hung by hand, walked through with the artist, and lived with before it opens.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            We believe that the work of a gallery is not to fill a room, but to help a room
            hold what is placed inside it. We keep our programme small on purpose. We keep our
            hours long on purpose. Entry is free, always.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-3 md:px-12">
          <div>
            <span className="text-eyebrow text-accent">Address</span>
            <p className="mt-6 font-display text-2xl leading-relaxed text-foreground">
              14 Rue de la Lune
              <br />
              75002 Paris
              <br />
              France
            </p>
            <p className="mt-4 text-eyebrow text-muted-foreground">
              Métro Bonne-Nouvelle · Sentier
            </p>
          </div>
          <div>
            <span className="text-eyebrow text-accent">Hours</span>
            <dl className="mt-6 space-y-3 text-foreground">
              {[
                ["Wednesday — Friday", "11:00 — 19:00"],
                ["Saturday", "11:00 — 20:00"],
                ["Sunday", "12:00 — 18:00"],
                ["Monday — Tuesday", "By appointment"],
              ].map(([d, h]) => (
                <div key={d} className="flex items-baseline justify-between gap-6 border-b border-border/60 pb-3">
                  <dt className="font-display text-lg">{d}</dt>
                  <dd className="text-eyebrow text-muted-foreground">{h}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <span className="text-eyebrow text-accent">Correspond</span>
            <p className="mt-6 font-display text-2xl leading-relaxed text-foreground">
              hello@hich.gallery
              <br />
              +33 1 42 00 00 00
            </p>
            <p className="mt-4 text-eyebrow text-muted-foreground">
              For press, sales & studio visits.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-32 text-center md:px-12">
        <span className="text-eyebrow text-accent">Founding note</span>
        <p className="mt-8 font-display text-3xl italic leading-[1.4] text-foreground md:text-4xl">
          “We chose the word <em>hich</em> because it holds two things at once — the emptiness
          before a work is made, and the emptiness that a good work invites into a room.”
        </p>
        <p className="mt-8 text-eyebrow text-muted-foreground">— Nadia Rahimi, Director</p>
      </section>
    </main>
  );
}
