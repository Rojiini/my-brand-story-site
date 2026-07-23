import { createFileRoute } from "@tanstack/react-router";
import betsabehPortrait from "@/assets/betsabeh-hasanpour.jpg.asset.json";
import artistWork1 from "@/assets/artist-1.jpg";
import artistWork2 from "@/assets/artist-2.jpg";
import artistWork3 from "@/assets/artist-3.jpg";

export const Route = createFileRoute("/artists")({
  head: () => ({
    meta: [
      { title: "Artists — HICH Gallery" },
      {
        name: "description",
        content:
          "Betsabeh Hasanpour — contemporary international visual artist, founder of HICH Gallery, working across Persian calligraphy, Tazhib illumination, and mixed media.",
      },
      { property: "og:title", content: "Artists — HICH Gallery" },
      {
        property: "og:description",
        content: "Betsabeh Hasanpour — contemporary international visual artist and founder of HICH Gallery.",
      },
    ],
    links: [{ rel: "canonical", href: "/artists" }],
  }),
  component: ArtistsPage,
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

const galleryWorks = [
  {
    src: artistWork1,
    alt: "Gilded Verse — Persian calligraphy on gold leaf",
  },
  {
    src: artistWork2,
    alt: "Cobalt Bloom I — white plate with blue floral patterns",
  },
  {
    src: artistWork3,
    alt: "Cobalt Bloom II — white plate with blue floral patterns",
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
          HICH Gallery is the studio and platform of Betsabeh Hasanpour, a contemporary
          international visual artist whose practice bridges Persian tradition and modern
          expression.
        </p>
      </header>

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="overflow-hidden">
              <img
                src={betsabehPortrait.url}
                alt="Portrait of Betsabeh Hasanpour"
                width={900}
                height={1100}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-8 md:col-span-7">
            <div>
              <h2 className="font-display text-4xl text-foreground md:text-5xl">
                Betsabeh Hasanpour
              </h2>
              <p className="mt-2 text-eyebrow text-muted-foreground">
                Contemporary International Visual Artist · Founder of HICH Gallery
              </p>
              <p className="mt-2 text-eyebrow text-muted-foreground">Chicago, Illinois</p>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Betsabeh Hasanpour is a contemporary international visual artist, art educator,
                and the founder of HICH Gallery, based in Chicago, Illinois.
              </p>
              <p>
                Her artistic practice is grounded in Persian heritage and shaped by a
                contemporary global perspective. Working across painting, Persian calligraphy,
                Khattashi calligraphy painting, Tazhib Persian illumination, and mixed media, she
                creates visually layered works that bridge tradition, emotion, and modern
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
            <div className="grid gap-8 border-t border-border pt-8 md:grid-cols-2">
              <div>
                <span className="text-eyebrow text-accent">Education</span>
                <p className="mt-3 font-display text-xl text-foreground">
                  Bachelor of Laws (LL.B.) — Iran
                </p>
              </div>
              <div>
                <span className="text-eyebrow text-accent">Fields</span>
                <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-muted-foreground">
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

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
          <span className="text-eyebrow text-accent">Selected works</span>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {galleryWorks.map((work, i) => (
              <div key={work.alt} className="overflow-hidden">
                <img
                  src={work.src}
                  alt={work.alt}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <span className="mt-3 block text-eyebrow text-muted-foreground">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
