import { Link } from "@tanstack/react-router";
import { HichLogo } from "./hich-logo";
import { CartDrawer } from "./cart-drawer";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const links = [
  { to: "/", label: "Index" },
  { to: "/exhibitions", label: "EVENTS" },
  { to: "/artists", label: "Artists" },
  { to: "/shop", label: "Shop" },
  { to: "/customized-art", label: "Customized Art" },
  { to: "/about", label: "About & Visit" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 md:px-10">
        <Link to="/" className="shrink-0" aria-label="HICH Gallery home">
          <HichLogo size="sm" />
        </Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
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
            &nbsp;
          </span>
          <CartDrawer />
          <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Menu" aria-expanded={menuOpen} aria-controls="preview-mobile-nav" onClick={() => setMenuOpen(!menuOpen)}><Menu /></Button>
        </div>
      </div>
      {menuOpen && <nav id="preview-mobile-nav" aria-label="Mobile navigation" className="grid gap-5 border-t border-border px-6 py-6 xl:hidden">{links.map(link => <Link key={link.to} to={link.to} className="text-eyebrow text-foreground" onClick={() => setMenuOpen(false)}>{link.label}</Link>)}</nav>}
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
          <div className="text-eyebrow text-accent">Mailbox</div>
          <p className="text-sm leading-relaxed text-ivory/80">
            7367 N Ashland Blvd
            <br />
            Chicago, IL 60626
            <br />
            United States
          </p>
        </div>
          <div className="space-y-4">
            <div className="text-eyebrow text-accent">Correspond</div>
            <p className="text-sm leading-relaxed text-ivory/80">
              <a href="mailto:info@hichgallery.com">info@hichgallery.com</a>
            </p>
            <Link to="/contact" className="inline-block text-sm text-ivory/80 underline">Contact Us</Link>
          </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 text-eyebrow text-ivory/50 md:px-12">
          <span>© HICH Gallery · MMXXVI</span>
          <span>Chicago</span>
        </div>
      </div>
    </footer>
  );
}
