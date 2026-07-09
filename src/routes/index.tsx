import { createFileRoute, Link } from "@tanstack/react-router";
import heroGallery from "@/assets/hero-gallery.jpg";
import exhibition1 from "@/assets/exhibition-1.jpg";
import exhibition2 from "@/assets/exhibition-2.jpg";
import exhibition3 from "@/assets/exhibition-3.jpg";
import { HichLogo } from "@/components/hich-logo";

export const Route = createFileRoute("/")({
  component: Index,
});

const currentShow = {
  eyebrow: "Now on view · until 14 September",
  title: "Le Silence Bleu",
  artist: "Yasmin Farahani",
  blurb:
    "Twelve canvases in indigo and gold leaf. A meditation on emptiness, and what emptiness contains.",
};

const featured = [
  {
    n: "01",
    title: "Le Silence Bleu",
    artist: "Yasmin Farahani",
    dates: "Jun 12 — Sep 14",
    img: exhibition1,
  },
  {
    n: "02",
    title: "Weight & Wind",
    artist: "Mateo Aguilar",
    dates: "Apr 04 — Jun 02",
    img: exhibition2,
  },
  {
    n: "03",
    title: "One Line, One Room",
    artist: "Ines Kepler",
    dates: "Jan 18 — Mar 24",
    img: exhibition3,
  },
];

function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-void text-ivory">
        <img
          src={heroGallery}
          alt="Interior of HICH Gallery with a large blue and gold canvas"
          width={1600}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/40 to-void" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-[1400px] flex-col items-center justify-center px-6 py-32 text-center md:px-12">
          <HichLogo size="lg" variant="light" />
          <p className="mt-12 max-w-xl font-display text-xl italic text-ivory/85 md:text-2xl">
            Where nothing becomes everything.
          </p>
          <div className="mt-16 flex flex-col items-center gap-4">
            <div className="hich-hairline w-24" />
            <span className="text-eyebrow text-accent">{currentShow.eyebrow}</span>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center md:px-12">
        <span className="text-eyebrow text-accent">A Gallery in Paris</span>
        <h2 className="mt-8 font-display text-4xl leading-[1.15] text-foreground md:text-6xl">
          HICH — the Persian word for <em className="text-primary">nothing</em>
          &nbsp;— is where our questions begin.
        </h2>
        <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We are a contemporary art gallery devoted to painters, sculptors, and image-makers
          working at the edge of stillness. Each exhibition is an invitation to sit with the
          space between things.
        </p>
      </section>

      {/* Featured exhibition */}
      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 pb-32 md:grid-cols-12 md:px-12">
        <div className="md:col-span-7">
          <img
            src={exhibition1}
            alt={currentShow.title}
            width={1000}
            height={1300}
            className="w-full"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center md:col-span-5">
          <span className="text-eyebrow text-accent">Current Exhibition · 01</span>
          <h3 className="mt-6 font-display text-5xl italic text-foreground md:text-6xl">
            {currentShow.title}
          </h3>
          <p className="mt-4 font-display text-xl text-muted-foreground">
            by {currentShow.artist}
          </p>
          <div className="hich-hairline my-8 w-16" />
          <p className="text-base leading-relaxed text-muted-foreground">{currentShow.blurb}</p>
          <Link
            to="/exhibitions"
            className="mt-10 inline-flex w-fit items-center gap-3 border-b border-foreground pb-1 text-eyebrow text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            All Exhibitions →
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="text-eyebrow text-accent">Selected Programme</span>
              <h3 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
                Recent & upcoming
              </h3>
            </div>
            <Link
              to="/exhibitions"
              className="hidden text-eyebrow text-muted-foreground hover:text-accent md:inline"
            >
              Archive →
            </Link>
          </div>
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-3">
            {featured.map((f) => (
              <article key={f.n} className="group">
                <div className="overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    width={1000}
                    height={1300}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="text-eyebrow text-accent">{f.n}</span>
                  <span className="text-eyebrow text-muted-foreground">{f.dates}</span>
                </div>
                <h4 className="mt-3 font-display text-2xl text-foreground">{f.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{f.artist}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quiet closing */}
      <section className="mx-auto max-w-3xl px-6 py-32 text-center md:px-12">
        <p className="font-display text-3xl italic leading-[1.4] text-foreground md:text-4xl">
          “Emptiness is not the absence of the world. It is the shape the world takes when
          we stop insisting on it.”
        </p>
        <p className="mt-8 text-eyebrow text-muted-foreground">— from the founding note</p>
      </section>
    </main>
  );
}
