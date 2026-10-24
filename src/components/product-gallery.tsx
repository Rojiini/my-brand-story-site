import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProductImage = { url: string; altText?: string | null };

export function ProductGallery({ images, title }: { images: ProductImage[]; title: string }) {
  const [viewport, api] = useEmblaCarousel({ loop: images.length > 1 });
  const [selected, setSelected] = useState(0);
  const sync = useCallback(() => setSelected(api?.selectedScrollSnap() ?? 0), [api]);
  useEffect(() => {
    if (!api) return;
    sync();
    api.on("select", sync).on("reInit", sync);
    return () => { api.off("select", sync).off("reInit", sync); };
  }, [api, sync]);
  if (!images.length) return null;
  return (
    <section className="min-w-0 space-y-4" aria-label={`${title} photos`} aria-roledescription="carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); api?.scrollPrev(); }
        if (event.key === "ArrowRight") { event.preventDefault(); api?.scrollNext(); }
      }}>
      <div ref={viewport} className="overflow-hidden">
        <div className="flex touch-pan-y items-stretch">
          {images.map((image, index) => (
            <div key={`${image.url}-${index}`} className="flex min-w-0 flex-[0_0_100%] items-center justify-center bg-secondary/30" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${images.length}`}>
              <img src={image.url} alt={image.altText || `${title} — photo ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} className="h-auto w-full max-w-full object-contain md:max-h-[85vh] md:w-auto" />
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && <>
        <div className="flex items-center justify-between">
          <Button variant="outline" size="icon" aria-label="Previous photo" title="Previous photo" onClick={() => api?.scrollPrev()}><ChevronLeft /></Button>
          <span className="text-sm text-muted-foreground" aria-live="polite" aria-atomic="true">{selected + 1} / {images.length}</span>
          <Button variant="outline" size="icon" aria-label="Next photo" title="Next photo" onClick={() => api?.scrollNext()}><ChevronRight /></Button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => <Button key={`${image.url}-${index}`} variant="ghost" className={`h-20 w-20 shrink-0 rounded-none border p-1 ${selected === index ? "border-accent" : "border-border"}`} aria-label={`View photo ${index + 1}`} aria-pressed={selected === index} onClick={() => api?.scrollTo(index)}>
            <img src={image.url} alt="" loading="lazy" className="h-full w-full object-contain" />
          </Button>)}
        </div>
      </>}
    </section>
  );
}