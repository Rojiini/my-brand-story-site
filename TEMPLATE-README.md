# HICH Gallery — Website Template

A complete, self-contained gallery + e-commerce website template built with
TanStack Start (React 19 + Vite 7) and Tailwind CSS v4, wired to Shopify's
Storefront API.

## What's included

- **Pages/routes** (`src/routes/`)
  - `index.tsx` — home (hero, current show, featured shop products)
  - `exhibitions.tsx` — exhibitions & events
  - `artists.tsx` — artist profiles
  - `about.tsx` — story, founders, artist bio, mailbox/contact
  - `shop.tsx` — Shopify product grid
  - `product.$handle.tsx` — product detail page (SEO + Product JSON-LD)
  - `sitemap[.]xml.ts` — dynamic sitemap (static pages + all Shopify products)
  - `__root.tsx` — global layout, fonts, SEO defaults, Organization/WebSite JSON-LD
- **Components** (`src/components/`) — `site-nav.tsx` (header/footer),
  `hich-logo.tsx`, `cart-drawer.tsx`, plus the shadcn/ui library in `components/ui/`
- **State & data** — `src/stores/cart-store.ts` (zustand, persisted cart),
  `src/hooks/use-cart-sync.ts`, `src/lib/shopify.ts` (Storefront GraphQL client)
- **Design system** — `src/styles.css` holds every color, font, and spacing token:
  Royal Blue `#4A5FD9`, Persian Gold `#C9A961`, Ivory Canvas `#F3EDE1`,
  Void Night `#0E0E1E`, Aged Bronze `#7A6B48`, Deep Lapis `#1E2A6B`.
  Fonts: Cormorant Garamond (display) + Inter (body).
- **Assets** — `src/assets/` (site imagery, artwork, catalog photos) and
  `public/` (robots.txt, `catalog1/` product images served publicly)
- **Config** — `package.json`, `vite.config.ts`, `tsconfig.json`,
  `components.json`, `eslint.config.js`, `.prettierrc`

Nothing has been simplified or removed; this is the live site as-is.

## Running it

```bash
bun install    # or npm install
bun run dev    # http://localhost:8080
bun run build
```

## What you must reconfigure for a new project

| Item | Where | Notes |
|---|---|---|
| Shopify store domain | `src/lib/shopify.ts` → `SHOPIFY_STORE_PERMANENT_DOMAIN` | currently `4j4mx2-h2.myshopify.com` |
| Shopify Storefront access token | `src/lib/shopify.ts` → `SHOPIFY_STOREFRONT_TOKEN` | publishable key (safe in client code), but must be regenerated per store |
| Shopify Admin API access | not in the code | Admin/product-management was done through the Lovable Shopify connector, not from this codebase. Reconnect a store in the new project. |
| Site URL | `src/routes/__root.tsx`, `src/routes/sitemap[.]xml.ts`, `public/robots.txt` | canonical/og URLs point to `my-brand-story-site.lovable.app` |
| Brand content | `src/routes/about.tsx`, `artists.tsx`, `exhibitions.tsx`, `src/components/site-nav.tsx` | gallery name, founders, bio, address `7367 N Ashland Blvd, Chicago, IL 60626`, `info@hichgallery.com` |
| Images | `src/assets/`, `public/catalog1/` | replace with the new brand's artwork |
| Logo/wordmark | `src/components/hich-logo.tsx` | Arabic script + English wordmark |
| CDN asset pointers | `src/assets/*.asset.json` | these URLs are tied to this project; re-upload images in the new project |

No `.env` file, database, or server-side secret is used — there are no
private API keys in this project. Everything else works out of the box once
the Shopify domain + storefront token are swapped.

## Reuse checklist

1. Swap the Shopify domain and storefront token.
2. Replace assets in `src/assets/` and re-point the `.asset.json` imports.
3. Update `src/styles.css` tokens and fonts for the new brand.
4. Rewrite copy in the route files and update every `head()` block (titles,
   descriptions, og tags) — each route has its own.
5. Update `public/robots.txt` and the sitemap base URL.
