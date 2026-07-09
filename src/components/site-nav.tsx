import { Link } from "@tanstack/react-router";
import { HichLogo } from "./hich-logo";
import { CartDrawer } from "./cart-drawer";

const links = [
  { to: "/", label: "Index" },
  { to: "/exhibitions", label: "Exhibitions" },
  { to: "/artists", label: "Artists" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About & Visit" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <Link to="/" className="shrink-0" aria-label="HICH Gallery home">
          <HichLogo size="sm" />
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-eyebrow text-muted-foreground transition-colors hover:text-accent [&.active]:text-accent"
              activeProps={{ className: "active" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden text-eyebrow text-muted-foreground md:block">
            MMXXVI
          </span>
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-void text-ivory">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-20 md:grid-cols-3 md:px-12">
        <div className="space-y-6">
          <HichLogo size="sm" variant="light" />
          <p className="max-w-xs font-display italic text-ivory/70">
            Where nothing becomes everything.
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-eyebrow text-accent">Visit</div>
          <p className="text-sm leading-relaxed text-ivory/80">
            14 Rue de la Lune
            <br />
            75002 Paris, France
            <br />
            Wed – Sun · 11:00 – 19:00
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-eyebrow text-accent">Correspond</div>
          <p className="text-sm leading-relaxed text-ivory/80">
            hello@hich.gallery
            <br />
            +33 1 42 00 00 00
          </p>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 text-eyebrow text-ivory/50 md:px-12">
          <span>© HICH Gallery · MMXXVI</span>
          <span>Paris</span>
        </div>
      </div>
    </footer>
  );
}
