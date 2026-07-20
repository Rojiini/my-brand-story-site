import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import heroGallery from "@/assets/hero-gallery.jpg";
import exhibition1 from "@/assets/exhibition-1.jpg";
import exhibition2 from "@/assets/exhibition-2.jpg";
import exhibition3 from "@/assets/exhibition-3.jpg";
import { HichLogo } from "@/components/hich-logo";
import {
  type ShopifyProduct,
  PRODUCTS_QUERY,
  storefrontApiRequest,
} from "@/lib/shopify";
import { useCartStore } from "@/stores/cart-store";

const productsQueryOptions = queryOptions({
  queryKey: ["shopify", "home-products"],
  queryFn: async () => {
    const data = await storefrontApiRequest(PRODUCTS_QUERY, { first: 6 });
    const edges: ShopifyProduct[] = data?.data?.products?.edges ?? [];
    return edges;
  },
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HICH Gallery — Contemporary Art" },
      {
        name: "description",
        content:
          "HICH Gallery is a contemporary art space where nothing becomes everything. Discover exhibitions, artists, and available works.",
      },
      { property: "og:title", content: "HICH Gallery — Contemporary Art" },
      {
        property: "og:description",
        content:
          "Discover exhibitions, artists, and available works at HICH Gallery.",
      },
    ],
  }),
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(productsQueryOptions),
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
        <span className="text-eyebrow text-accent">A Gallery in Chicago</span>
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

      {/* Shop section */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="text-eyebrow text-accent">Available Works</span>
              <h3 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
                From the shop
              </h3>
            </div>
            <Link
              to="/shop"
              className="hidden text-eyebrow text-muted-foreground hover:text-accent md:inline"
            >
              All works →
            </Link>
          </div>
          <Suspense fallback={<ProductsSkeleton />}>
            <ShopProducts />
          </Suspense>
          <div className="mt-16 text-center md:hidden">
            <Link
              to="/shop"
              className="text-eyebrow text-muted-foreground hover:text-accent"
            >
              All works →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured exhibition */}
      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 py-32 md:grid-cols-12 md:px-12">
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

function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="animate-pulse space-y-3">
          <div className="aspect-[3/4] w-full bg-secondary/40" />
          <div className="h-4 w-2/3 bg-secondary/40" />
          <div className="h-3 w-1/3 bg-secondary/40" />
        </div>
      ))}
    </div>
  );
}

function ShopProducts() {
  const { data: products } = useSuspenseQuery(productsQueryOptions);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  if (products.length === 0) {
    return (
      <div className="border border-dashed border-border/60 py-20 text-center">
        <p className="font-display text-2xl">No works available</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Visit the shop to browse the full collection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => {
        const img = p.node.images.edges[0]?.node;
        const price = p.node.priceRange.minVariantPrice;
        const variant = p.node.variants.edges[0]?.node;

        const handleAdd = async (e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          if (!variant) return;
          await addItem({
            product: p,
            variantId: variant.id,
            variantTitle: variant.title,
            price: variant.price,
            quantity: 1,
            selectedOptions: variant.selectedOptions ?? [],
          });
          toast.success("Added to your selection", {
            position: "top-center",
          });
        };

        return (
          <article key={p.node.id} className="group">
            <Link
              to="/product/$handle"
              params={{ handle: p.node.handle }}
              className="block"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-secondary/30">
                {img ? (
                  <img
                    src={img.url}
                    alt={img.altText ?? p.node.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : null}
              </div>
            </Link>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <Link
                to="/product/$handle"
                params={{ handle: p.node.handle }}
                className="block"
              >
                <h4 className="font-display text-xl group-hover:text-accent">
                  {p.node.title}
                </h4>
              </Link>
              <span className="text-sm text-muted-foreground">
                {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
              </span>
            </div>
            <Button
              onClick={handleAdd}
              disabled={isLoading || !variant || !variant.availableForSale}
              variant="outline"
              className="mt-4 w-full"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : variant?.availableForSale ? (
                "Add to Cart"
              ) : (
                "Sold Out"
              )}
            </Button>
          </article>
        );
      })}
    </div>
  );
}
