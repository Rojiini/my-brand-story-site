import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  PRODUCT_BY_HANDLE_QUERY,
  storefrontApiRequest,
} from "@/lib/shopify";
import { useCartStore } from "@/stores/cart-store";

const productQueryOptions = (handle: string) =>
  queryOptions({
    queryKey: ["shopify", "product", handle],
    queryFn: async () => {
      const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, {
        handle,
      });
      const node = data?.data?.productByHandle;
      return node ?? null;
    },
  });

export const Route = createFileRoute("/product/$handle")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.handle} — HICH Gallery` },
      {
        name: "description",
        content: "A work available from HICH Gallery.",
      },
    ],
  }),
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(productQueryOptions(params.handle)),
  component: ProductPage,
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl">Could not load this work</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          Try again
        </button>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl">Work not found</h1>
      <Link to="/shop" className="mt-4 inline-block text-accent underline">
        Back to shop
      </Link>
    </div>
  ),
});

function ProductPage() {
  return (
    <main className="mx-auto max-w-[1400px] px-6 py-16 md:px-12">
      <Suspense
        fallback={
          <div className="flex justify-center py-32">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        }
      >
        <ProductDetail />
      </Suspense>
    </main>
  );
}

function ProductDetail() {
  const { handle } = Route.useParams();
  const { data: product } = useSuspenseQuery(productQueryOptions(handle));
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  const variants = product?.variants?.edges ?? [];
  const [variantId, setVariantId] = useState<string>(
    variants[0]?.node?.id ?? "",
  );

  if (!product) {
    return (
      <div className="py-32 text-center">
        <h1 className="font-display text-3xl">Work not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-accent underline">
          Back to shop
        </Link>
      </div>
    );
  }

  const selected =
    variants.find((v: any) => v.node.id === variantId)?.node ??
    variants[0]?.node;
  const images = product.images?.edges ?? [];
  const mainImg = images[0]?.node;

  const handleAdd = async () => {
    if (!selected) return;
    // Wrap in edge/node shape to match ShopifyProduct
    const productWrapped = { node: product } as any;
    await addItem({
      product: productWrapped,
      variantId: selected.id,
      variantTitle: selected.title,
      price: selected.price,
      quantity: 1,
      selectedOptions: selected.selectedOptions ?? [],
    });
    toast.success("Added to your selection", {
      position: "top-center",
    });
  };

  return (
    <div className="grid gap-12 md:grid-cols-2 md:gap-16">
      <div className="space-y-4">
        {mainImg && (
          <div className="aspect-[3/4] w-full overflow-hidden bg-secondary/30">
            <img
              src={mainImg.url}
              alt={mainImg.altText ?? product.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {images.slice(1).map((e: any, i: number) => (
              <div key={i} className="aspect-square overflow-hidden bg-secondary/30">
                <img src={e.node.url} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <Link to="/shop" className="text-eyebrow text-muted-foreground hover:text-accent">
          ← Shop
        </Link>
        <h1 className="mt-6 font-display text-5xl">{product.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {selected?.price.currencyCode}{" "}
          {selected ? parseFloat(selected.price.amount).toFixed(2) : ""}
        </p>
        {product.description && (
          <p className="mt-8 whitespace-pre-line leading-relaxed text-foreground/80">
            {product.description}
          </p>
        )}

        {variants.length > 1 && (
          <div className="mt-8 space-y-2">
            <div className="text-eyebrow text-muted-foreground">Variant</div>
            <div className="flex flex-wrap gap-2">
              {variants.map((v: any) => (
                <button
                  key={v.node.id}
                  onClick={() => setVariantId(v.node.id)}
                  disabled={!v.node.availableForSale}
                  className={`border px-4 py-2 text-sm transition-colors ${
                    variantId === v.node.id
                      ? "border-accent text-accent"
                      : "border-border text-foreground hover:border-accent/50"
                  } disabled:opacity-40`}
                >
                  {v.node.title}
                </button>
              ))}
            </div>
          </div>
        )}

        <Button
          onClick={handleAdd}
          disabled={isLoading || !selected || !selected.availableForSale}
          size="lg"
          className="mt-10 w-full md:w-auto"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : selected?.availableForSale ? (
            "Add to Cart"
          ) : (
            "Sold Out"
          )}
        </Button>
      </div>
    </div>
  );
}
