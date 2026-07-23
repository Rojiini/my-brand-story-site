import { createFileRoute } from "@tanstack/react-router";
import heroGallery from "@/assets/hero-gallery.jpg";
import betsabehPortrait from "@/assets/betsabeh-hasanpour.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Visit — HICH Gallery" },
      {
        name: "description",
        content:
          "About HICH Gallery, founded by Betsabeh Hasanpour in Chicago. Discover our story, our founder, and how to visit us.",
      },
      { property: "og:title", content: "About & Visit — HICH Gallery" },
      {
        property: "og:description",
        content: "About HICH Gallery, founded by Betsabeh Hasanpour in Chicago.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const artisticFields = [
  "Persian Calligraphy",
  "Khattashi Calligraphy Painting",
  "Tazhib Persian Illumination",
  "Acrylic Painting",
  "Mixed Media Art",
  "Art Education & Creative Workshops",
  "Cultural Art Programs",
  "Art Collaboration for Interior Design Projects",
];

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
            HICH — the Persian word for <em className="text-primary">nothing</em> — is a
            contemporary art space founded by Betsabeh Hasanpour in Chicago, Illinois.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Through HICH Gallery, Betsabeh is dedicated to building a platform where art,
            culture, and creativity converge — presenting the richness of Persian art to an
            international audience while fostering meaningful artistic dialogue and connection.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            We believe that the work of a gallery is not to fill a room, but to help a room hold
            what is placed inside it. We keep our programme small on purpose. We keep our hours
            long on purpose. Entry is free, always.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-12 md:px-12">
          <div className="md:col-span-4">
            <div className="overflow-hidden">
              <img
                src={betsabehPortrait.url}
                alt="Betsabeh Hasanpour, founder of HICH Gallery"
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-8 md:col-span-8">
            <div>
              <span className="text-eyebrow text-accent">Founder</span>
              <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
                Betsabeh Hasanpour
              </h2>
              <p className="mt-2 text-eyebrow text-muted-foreground">
                Founder & Contemporary International Visual Artist
              </p>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Betsabeh Hasanpour is a contemporary international visual artist, art educator,
                and the founder of HICH Gallery, based in Chicago, Illinois.
              </p>
              <p>
                Her artistic practice is grounded in Persian heritage and shaped by a
                contemporary global perspective. Working across painting, Persian calligraphy,
                Khattashi calligraphy painting, Tazhib Persian illumination, and mixed media,
                she creates visually layered works that bridge tradition, emotion, and modern
                artistic expression.
              </p>
              <p>
                Betsabeh has refined her artistic practice under the guidance of distinguished
                Iranian masters, including Master Alireza Malekzadeh, Haleh Grayandeh, Master
                Esfandiyari, Maryam Lamei, and Master Sabouni Rizi.
              </p>
              <p>
                In addition to her studio practice, she has extensive experience teaching art to
                children and adults and developing creative workshops that foster imagination,
                self-expression, and cultural awareness. She views art as a universal language
                that transcends borders and connects people through shared human experience.
              </p>
              <p>
                Her professional collaborations include working with interior designers to
                create custom artworks for residential spaces, as well as partnering with Nimars
                Home Staging in Canada on projects involving interior styling and artistic
                spatial design.
              </p>
            </div>
            <div className="grid gap-8 pt-4 md:grid-cols-2">
              <div>
                <span className="text-eyebrow text-accent">Education</span>
                <p className="mt-3 font-display text-xl text-foreground">
                  Bachelor of Laws (LL.B.) — Iran
                </p>
              </div>
              <div>
                <span className="text-eyebrow text-accent">Artistic Fields</span>
                <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {artisticFields.map((field) => (
                    <li key={field} className="flex items-start gap-2">
                      <span className="text-accent">·</span>
                      {field}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-3 md:px-12">
          <div>
            <span className="text-eyebrow text-accent">Mailbox</span>
            <p className="mt-6 font-display text-2xl leading-relaxed text-foreground">
              7367 N Ashland Blvd
              <br />
              Chicago, IL 60626
              <br />
              United States
            </p>
            <p className="mt-4 text-eyebrow text-muted-foreground">By appointment only</p>
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
                <div
                  key={d}
                  className="flex items-baseline justify-between gap-6 border-b border-border/60 pb-3"
                >
                  <dt className="font-display text-lg">{d}</dt>
                  <dd className="text-eyebrow text-muted-foreground">{h}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <span className="text-eyebrow text-accent">Correspond</span>
            <p className="mt-6 font-display text-2xl leading-relaxed text-foreground">
              info@hichgallery.com
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
        <p className="mt-8 text-eyebrow text-muted-foreground">
          — Betsabeh Hasanpour, Founder & Artist
        </p>
      </section>
    </main>
  );
}
