# HICH Gallery — Shopify Online Store 2.0 theme

A native Liquid theme that recreates the HICH Gallery design. No React. Shopify
handles products, inventory, cart, orders, payments and checkout.

## Install

1. Shopify admin → **Online Store → Themes → Add theme → Upload zip file**.
2. Select `hich-gallery-shopify-theme.zip`, then **Publish** (or Preview first).
3. Navigation → create a menu with handle `main-menu` and add:
   Index (`/`), Exhibitions and Events (`/pages/exhibitions`), Artists
   (`/pages/artists`), Shop (`/collections/all`), About & Visit (`/pages/about`).
4. Pages → create pages with handles `exhibitions`, `artists`, `about`. Each one
   picks up its matching template automatically.

## Editing content

Everything important is editable in **Customize** (Theme Editor):

- Home: hero image/heading/tagline, statement, featured collection, exhibition
  feature, programme grid (repeatable blocks), closing quote.
- Header: which menu to show. Footer: tagline, mailbox address, email, copyright.
- Theme settings → Brand colours: ivory, royal blue, Persian gold, void night.

## Structure

- `layout/theme.liquid` — document shell, fonts, brand colour variables
- `sections/` — header, footer, hero, statement, featured-collection,
  exhibition-feature, programme-grid, quote, profiles, rich-text,
  contact-details, main-product, main-collection, main-cart, main-search,
  main-page, main-404
- `snippets/` — hich-logo, product-card, icon-cart
- `templates/` — index, product, collection, cart, search, 404, page,
  page.exhibitions, page.artists, page.about, list-collections
- `assets/` — base.css, theme.js, starter gallery images

Starter images ship in `assets/`; replace them with your own through the image
pickers in the Theme Editor.
