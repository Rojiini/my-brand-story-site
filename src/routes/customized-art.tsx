import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/customized-art")({
  head: () => ({
    meta: [
      { title: "Customized Art — HICH Gallery" },
      {
        name: "description",
        content:
          "Commission custom and personalized Persian art from HICH Gallery. Choose your colors, poem, size and materials, or let artist Betsabeh Shahlaei illustrate your story.",
      },
      { property: "og:title", content: "Customized Art — HICH Gallery" },
      {
        property: "og:description",
        content:
          "Custom and personalized artwork by Betsabeh Shahlaei — your colors, your words, your story, turned into art.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/customized-art" }],
  }),
  component: CustomizedArtPage,
});

const personalizeOptions = [
  {
    title: "Color palette",
    text: "Choose your favorite colors or colors that hold a special meaning for you.",
  },
  {
    title: "Poem or words",
    text: "Add a personal poem, meaningful quote, names, or words that are important to you.",
  },
  { title: "Size", text: "Choose the dimensions that work perfectly for your space." },
  {
    title: "Materials",
    text: "Select the materials and artistic elements that best fit your vision.",
  },
];

const steps = [
  { n: "01", title: "Share Your Idea", text: "Tell us what you have in mind or share your story with us." },
  {
    n: "02",
    title: "Personalize Your Artwork",
    text: "Choose your colors, poem or text, size, materials, and other details.",
  },
  {
    n: "03",
    title: "Our Artist Creates",
    text: "Betsabeh brings your vision or story to life through an original artwork.",
  },
  {
    n: "04",
    title: "Receive Your One-of-a-Kind Piece",
    text: "A piece of art created specifically for you, and no one else.",
  },
];

function CustomizedArtPage() {
  return (
    <main>
      <header className="mx-auto max-w-[1400px] px-6 pb-8 pt-24 md:px-12 md:pt-32">
        <span className="text-eyebrow text-accent">Custom &amp; Personalized Art</span>
        <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[1.05] text-foreground md:text-8xl">
          Art Made Just for You
        </h1>
        <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
          At HICH Gallery, we believe art can be deeply personal. Our custom art service gives you
          the opportunity to create a piece that reflects your story, your personality, and your
          vision.
        </p>
      </header>

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
        <span className="text-eyebrow text-accent">Personalize</span>
        <h2 className="mt-4 max-w-3xl font-display text-4xl text-foreground md:text-5xl">
          Work with our artist to create an artwork that is uniquely yours.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {personalizeOptions.map((o) => (
            <div key={o.title} className="border-t border-border pt-6">
              <h3 className="font-display text-2xl text-foreground">{o.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{o.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-3xl leading-relaxed text-muted-foreground">
          Whether it is a piece for your home, a meaningful gift, or something that represents an
          important moment in your life, we will work with you to turn your ideas into art.
        </p>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-3xl px-6 py-24 md:px-12">
          <span className="text-eyebrow text-accent">Your Story, Illustrated</span>
          <h2 className="mt-4 font-display text-4xl italic leading-[1.25] text-foreground md:text-5xl">
            Tell us your story. We’ll turn it into art.
          </h2>
          <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Your story can become a one-of-a-kind artwork. Share a personal story, memory,
              relationship, special moment, or meaningful experience with us. Our artist, Betsabeh,
              will use your story as inspiration to create an original illustration that captures
              its feeling and meaning.
            </p>
            <p>
              You don’t need to know exactly what you want the artwork to look like. Just tell us
              your story.
            </p>
            <p>
              From a love story to a childhood memory, a family moment, a journey, or a dream for
              the future, Betsabeh will transform your words into a visual piece created especially
              for you.
            </p>
            <p className="font-display text-2xl italic text-foreground">
              Your story. Your memories. Your art.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
        <span className="text-eyebrow text-accent">How It Works</span>
        <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
          Four steps to your own piece
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-border pt-6">
              <span className="text-eyebrow text-accent">{s.n}</span>
              <h3 className="mt-3 font-display text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <a
          href="mailto:info@hichgallery.com"
          className="mt-12 inline-block border border-foreground px-8 py-4 text-eyebrow text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Tell us your story
        </a>
      </section>
    </main>
  );
}
