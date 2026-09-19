# HICH Gallery Shopify Online Store 2.0 Theme

## Goal
Recreate the current HICH Gallery storefront as an uploadable, fully native Shopify theme. The theme will use Liquid, Shopify sections and blocks, JSON templates, CSS, and small theme JavaScript only—no React runtime.

## What will be built
- Preserve the HICH visual identity: ivory canvas, royal blue, Persian gold, the `هیچ / HICH / GALLERY` wordmark, editorial typography, restrained spacing, and gallery-style layouts.
- Recreate the editable homepage with an image-led introduction, gallery statement, featured products, current exhibition, exhibition programme, and closing quotation.
- Add native templates for collections/product grids, product details, exhibitions and events, artists, About & Visit, cart, search, standard pages, and 404.
- Convert repeated interface elements into Shopify snippets, including product cards, responsive images, price display, pagination, and the HICH wordmark.
- Build a responsive header, mobile navigation, predictive-style search access, cart count, and footer using Shopify menus and settings.
- Use Shopify objects for products, variants, availability, collections, menus, search, cart, checkout links, and inventory messaging.
- Make important homepage text, images, links, featured collections/products, exhibition entries, and section ordering editable in Shopify’s Theme Editor.
- Include theme settings for brand colors, typography choices, logo/wordmark behavior, contact email, and gallery address.

## Technical details
- Shopify Online Store 2.0 structure: `layout`, `templates`, `sections`, `snippets`, `assets`, `config`, and `locales`.
- JSON templates will compose reusable Liquid sections; section schemas will expose editor controls and repeatable blocks.
- Product and cart forms will use Shopify’s native Liquid form helpers and routes. Checkout remains Shopify-hosted.
- Existing HICH imagery needed for the default presentation will be bundled as theme assets where licensing and file size permit; merchant-selected images will use Shopify image pickers.
- CSS will reproduce the existing desktop and mobile design without depending on Tailwind, React, or the Lovable app.
- Theme metadata and presets will be included so the package can be uploaded and customized immediately.

## Validation and delivery
- Validate Liquid/JSON structure, required theme files, internal references, and archive contents.
- Inspect representative desktop and mobile renders locally where possible.
- Deliver a clean Shopify-uploadable ZIP plus a short setup guide covering upload, menu assignment, collection selection, and content editing.
