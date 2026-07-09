import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useSuspenseQuery, queryOptions } from "@tanstack/react-query";
import { Suspense } from "react";
import {
  type ShopifyProduct,
  PRODUCTS_QUERY,
  storefrontApiRequest,
} from "@/lib/shopify";

const productsQueryOptions = queryOptions({
  queryKey: ["shopify", "products"],
  queryFn: async () => {
    const data = await storefrontApiRequest(PRODUCTS_QUERY, { first: 50 });
    const edges: ShopifyProduct[] = data?.data?.products?.edges ?? [];
    return edges;
  },
});

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — HICH Gallery" },
      {
        name: "description",
        content:
          "Acquire limited works, editions, and prints from HICH Gallery's contemporary program.",
      },
      { property: "og:title", content: "Shop — HICH Gallery" },
      {
        property: "og:description",
        content: "Limited works, editions, and prints from HICH Gallery.",
      },
    ],
  }),
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(productsQueryOptions),
  component: ShopPage,
  errorComponent: ShopError,
  notFoundComponent: () => <p className="p-12">Not found.</p>,
});

function ShopError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl">The shop could not load</h1>
      <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
      <button
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="mt-6 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
      >
        Try again
      </button>
    </div>
  );
}

function ShopPage() {
  return (
    <main className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
      <div className="mb-16 max-w-2xl">
        <div className="text-eyebrow text-accent">Editions & Works</div>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">Shop</h1>
        <p className="mt-6 font-display italic text-muted-foreground">
          A curated selection of limited works, editions, and prints from the
          gallery program.
        </p>
      </div>
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductsGrid />
      </Suspense>
    </main>
  );
}

function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse space-y-3">
          <div className="aspect-[3/4] w-full bg-secondary/40" />
          <div className="h-4 w-2/3 bg-secondary/40" />
          <div className="h-3 w-1/3 bg-secondary/40" />
        </div>
      ))}
    </div>
  );
}

function ProductsGrid() {
  const { data: products } = useSuspenseQuery(productsQueryOptions);

  if (products.length === 0) {
    return (
      <div className="border border-dashed border-border/60 py-32 text-center">
        <p className="font-display text-2xl">No products found</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Tell the AI in chat what you'd like to sell — for example, an edition
          title, a price, and a photograph — and it will be added to your live
          Shopify store.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => {
        const img = p.node.images.edges[0]?.node;
        const price = p.node.priceRange.minVariantPrice;
        return (
          <Link
            key={p.node.id}
            to="/product/$handle"
            params={{ handle: p.node.handle }}
            className="group block"
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
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="font-display text-xl group-hover:text-accent">
                {p.node.title}
              </h3>
              <span className="text-sm text-muted-foreground">
                {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
