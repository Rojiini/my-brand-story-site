import { createFileRoute } from "@tanstack/react-router";
import exhibition1 from "@/assets/exhibition-1.jpg";
import exhibition2 from "@/assets/exhibition-2.jpg";
import exhibition3 from "@/assets/exhibition-3.jpg";

export const Route = createFileRoute("/exhibitions")({
  head: () => ({
    meta: [
      { title: "Exhibitions — HICH Gallery" },
      {
        name: "description",
        content:
          "Current, upcoming and past exhibitions at HICH Gallery, Chicago — a programme devoted to contemporary Persian painting, calligraphy and image-making.",
      },
      { property: "og:title", content: "Exhibitions — HICH Gallery" },
      {
        property: "og:description",
        content: "Current, upcoming and past exhibitions at HICH Gallery, Chicago.",
      },
    ],
    links: [{ rel: "canonical", href: "/exhibitions" }],
  }),
  component: ExhibitionsPage,
});

const current = [
  {
    n: "01",
    title: "Le Silence Bleu",
    artist: "Yasmin Farahani",
    dates: "12 June — 14 September 2026",
    room: "Room I · Ground floor",
    img: exhibition1,
    blurb:
      "Twelve canvases in indigo and gold leaf. A meditation on emptiness, and what emptiness contains.",
  },
];

const upcoming = [
  {
    n: "02",
    title: "Weight & Wind",
    artist: "Mateo Aguilar",
    dates: "02 October — 08 December 2026",
    room: "Room II · Mezzanine",
    img: exhibition2,
    blurb:
      "Bronze forms carved from lost wax. Aguilar's first Parisian solo, marking a decade of quiet practice.",
  },
];

const past = [
  {
    n: "03",
    title: "One Line, One Room",
    artist: "Ines Kepler",
    dates: "18 January — 24 March 2026",
    img: exhibition3,
    blurb: "A single mark repeated. The gesture as architecture.",
  },
  {
    n: "04",
    title: "Threshold Studies",
    artist: "Rafael Osei",
    dates: "22 October — 30 December 2025",
    img: exhibition2,
    blurb: "Sculpture and shadow at the edge of the visible.",
  },
  {
    n: "05",
    title: "Ivory Interior",
    artist: "Group Show",
    dates: "07 July — 12 September 2025",
    img: exhibition3,
    blurb: "Six painters on the colour of quiet.",
  },
];

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

function ExhibitionsPage() {
  return (
    <main>
      <header className="mx-auto max-w-[1400px] px-6 pb-8 pt-24 md:px-12 md:pt-32">
        <span className="text-eyebrow text-accent">Programme</span>
        <h1 className="mt-6 font-display text-6xl leading-[1.05] text-foreground md:text-8xl">
          Exhibitions
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Four to six exhibitions each year, developed in close conversation with the artists.
          Entry is free, always.
        </p>
      </header>

      <Section label="Now on view">
        {current.map((e) => (
          <article key={e.n} className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-7">
              <img
                src={e.img}
                alt={e.title}
                width={1000}
                height={1300}
                className="w-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center md:col-span-5">
              <span className="text-eyebrow text-muted-foreground">
                {e.n} · {e.room}
              </span>
              <h2 className="mt-6 font-display text-5xl italic text-foreground md:text-6xl">
                {e.title}
              </h2>
              <p className="mt-4 font-display text-xl text-muted-foreground">by {e.artist}</p>
              <p className="mt-2 text-eyebrow text-accent">{e.dates}</p>
              <div className="hich-hairline my-8 w-16" />
              <p className="leading-relaxed text-muted-foreground">{e.blurb}</p>
            </div>
          </article>
        ))}
      </Section>

      <Section label="Upcoming">
        {upcoming.map((e) => (
          <article
            key={e.n}
            className="grid gap-14 md:grid-cols-12 md:[&>*:first-child]:order-2"
          >
            <div className="md:col-span-7">
              <img
                src={e.img}
                alt={e.title}
                width={1000}
                height={1300}
                className="w-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center md:col-span-5">
              <span className="text-eyebrow text-muted-foreground">
                {e.n} · {e.room}
              </span>
              <h2 className="mt-6 font-display text-5xl italic text-foreground md:text-6xl">
                {e.title}
              </h2>
              <p className="mt-4 font-display text-xl text-muted-foreground">by {e.artist}</p>
              <p className="mt-2 text-eyebrow text-accent">{e.dates}</p>
              <div className="hich-hairline my-8 w-16" />
              <p className="leading-relaxed text-muted-foreground">{e.blurb}</p>
            </div>
          </article>
        ))}
      </Section>

      <Section label="Archive">
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-3">
          {past.map((e) => (
            <article key={e.n}>
              <img
                src={e.img}
                alt={e.title}
                width={1000}
                height={1300}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-eyebrow text-accent">{e.n}</span>
                <span className="text-eyebrow text-muted-foreground">{e.dates}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl text-foreground">{e.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.artist}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.blurb}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
