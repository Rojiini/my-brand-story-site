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
          "About HICH Gallery, a family-owned Persian art and design brand founded in Chicago by Bety Shahlaei, Fozhan Bozorgi, and Rojin Bozorgi.",
      },
      { property: "og:title", content: "About & Visit — HICH Gallery" },
      {
        property: "og:description",
        content: "About HICH Gallery, a family-owned Persian art and design brand founded in Chicago.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ArtGallery",
          name: "HICH Gallery",
          url: "https://my-brand-story-site.lovable.app/about",
          email: "info@hichgallery.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "7367 N Ashland Blvd",
            addressLocality: "Chicago",
            addressRegion: "IL",
            postalCode: "60626",
            addressCountry: "US",
          },
        }),
      },
    ],
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
            alt="HICH Gallery artwork"
            width={1600}
            height={1100}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div className="space-y-6 md:col-span-7">
          <span className="text-eyebrow text-accent">Our Story</span>
          <p className="font-display text-3xl italic leading-[1.35] text-foreground md:text-4xl">
            HICH Gallery began with a word — <em className="text-primary">هیچ</em>, hich — which
            means "nothing" in Farsi. But in Persian and Sufi thought, nothing is never empty.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            It is the space before creation, the silence before a poem, the blank wall before a
            story is told. From that idea came our name, and our belief: where nothing becomes
            everything.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            HICH Gallery is a family-owned business founded in Chicago by Bety Shahlaei, Fozhan
            Bozorgi, and Rojin Bozorgi — three women bound by family and by a shared love for the
            culture, poetry, and artistry of Persia. What started as conversations around a
            kitchen table about art, identity, and home grew into a gallery and brand that carries
            those roots into everyday life.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            We create decorative wall art, clothing, and accessories rooted in Persian design —
            drawing from centuries of pattern, calligraphy, miniature painting, and Sufi
            symbolism, and reshaping them for modern spaces and modern wardrobes. Every piece we
            make is an attempt to bring a little bit of that heritage into the homes and lives of
            the people who wear or display it.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Based in Chicago, HICH Gallery is our way of building a bridge — between the culture
            we come from and the community we now call home, between generations of family, and
            between the idea of nothing and the everything it can become.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-[1400px] gap-16 px-6 py-24 md:px-12">
          <div className="mb-16 text-center">
            <span className="text-eyebrow text-accent">Founders</span>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
              The family behind HICH
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Three women, one family, and a shared love for Persian culture, poetry, and art.
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="overflow-hidden">
                <img
                  src={betsabehPortrait.url}
                  alt="Bety Shahlaei, founder and artist of HICH Gallery"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-8 md:col-span-8">
              <div>
                <h3 className="font-display text-4xl text-foreground md:text-5xl">
                  BETSABEH SHAHLAEI
                </h3>
                <p className="mt-2 text-eyebrow text-muted-foreground">
                  Founder & Contemporary International Visual Artist
                </p>
              </div>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Bety Shahlaei is a contemporary international visual artist, art educator, and
                  the founder of HICH Gallery, based in Chicago, Illinois.
                </p>
                <p>
                  Her artistic practice is grounded in Persian heritage and shaped by a
                  contemporary global perspective. Working across painting, Persian calligraphy,
                  Khattashi calligraphy painting, Tazhib Persian illumination, and mixed media, she
                  creates visually layered works that bridge tradition, emotion, and modern
                  artistic expression.
                </p>
                <p>
                  Bety has refined her artistic practice under the guidance of distinguished
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
                    Bachelor of Laws — Iran
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

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="border-t border-border pt-8">
              <h3 className="font-display text-2xl text-foreground">Fozhan Bozorgi</h3>
              <p className="mt-1 text-eyebrow text-muted-foreground">Co-founder</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Fozhan brings the family’s vision of Persian artistry into everyday life, helping
                shape HICH Gallery as a bridge between heritage and modern living.
              </p>
            </div>
            <div className="border-t border-border pt-8">
              <h3 className="font-display text-2xl text-foreground">Rojin Bozorgi</h3>
              <p className="mt-1 text-eyebrow text-muted-foreground">Co-founder</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Rojin helps carry the culture, poetry, and artistry of Persia into the gallery’s
                collections, ensuring each piece tells a story of identity and home.
              </p>
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
          “HICH Gallery is our way of building a bridge — between the culture we come from and the
          community we now call home, between generations of family, and between the idea of
          nothing and the everything it can become.”
        </p>
        <p className="mt-8 text-eyebrow text-muted-foreground">
          — BETSABEH SHAHLAEI, Fozhan Bozorgi & Rojin Bozorgi
        </p>
      </section>
    </main>
  );
}
