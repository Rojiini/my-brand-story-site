import { createFileRoute } from "@tanstack/react-router";
import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";

export const Route = createFileRoute("/artists")({
  head: () => ({
    meta: [
      { title: "Artists — HICH Gallery" },
      {
        name: "description",
        content:
          "The artists represented by HICH Gallery — a small roster of painters, sculptors and image-makers working at the edge of stillness.",
      },
      { property: "og:title", content: "Artists — HICH Gallery" },
      {
        property: "og:description",
        content: "The artists represented by HICH Gallery.",
      },
    ],
    links: [{ rel: "canonical", href: "/artists" }],
  }),
  component: ArtistsPage,
});

const artists = [
  {
    name: "Yasmin Farahani",
    location: "b. 1987, Tehran · lives in Paris",
    medium: "Painting · gold leaf",
    img: artist1,
    bio: "Farahani's canvases balance monastic restraint with the sensuality of gold. She joined HICH in 2024.",
  },
  {
    name: "Ines Kepler",
    location: "b. 1979, Vienna · lives in Marseille",
    medium: "Drawing · installation",
    img: artist2,
    bio: "Kepler's line reduces sculpture to a single gesture, drawn directly on the wall of the room.",
  },
  {
    name: "Mateo Aguilar",
    location: "b. 1984, Oaxaca · lives in Lisbon",
    medium: "Sculpture · bronze",
    img: artist3,
    bio: "Working in lost-wax bronze, Aguilar treats each form as a small, private architecture.",
  },
  {
    name: "Rafael Osei",
    location: "b. 1991, Accra · lives in Berlin",
    medium: "Photography · shadow",
    img: artist1,
    bio: "Osei's images sit at the threshold of the visible, exposed onto rag paper by hand.",
  },
];

function ArtistsPage() {
  return (
    <main>
      <header className="mx-auto max-w-[1400px] px-6 pb-8 pt-24 md:px-12 md:pt-32">
        <span className="text-eyebrow text-accent">Roster</span>
        <h1 className="mt-6 font-display text-6xl leading-[1.05] text-foreground md:text-8xl">
          Artists
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          A small, deliberate roster. We represent our artists over years, not seasons, and
          treat their practice with the patience it asks for.
        </p>
      </header>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 pt-16 md:px-12">
        <div className="grid gap-x-12 gap-y-24 md:grid-cols-2">
          {artists.map((a, i) => (
            <article key={a.name} className={`group ${i % 2 === 1 ? "md:mt-24" : ""}`}>
              <div className="overflow-hidden">
                <img
                  src={a.img}
                  alt={`Portrait of ${a.name}`}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h2 className="font-display text-3xl text-foreground md:text-4xl">{a.name}</h2>
                <span className="text-eyebrow text-accent">0{i + 1}</span>
              </div>
              <p className="mt-2 text-eyebrow text-muted-foreground">{a.location}</p>
              <p className="mt-1 text-eyebrow text-muted-foreground">{a.medium}</p>
              <p className="mt-6 leading-relaxed text-muted-foreground">{a.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
