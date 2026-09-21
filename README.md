# HICH Gallery

The production storefront is a native Shopify Online Store 2.0 theme. Lovable
remains the design workspace, and Shopify remains responsible for products,
collections, inventory, cart, orders, payments, and checkout.

This project was built with [Lovable](https://lovable.dev).

**Shopify store**: `4j4mx2-h2.myshopify.com`

## Canonical storefront source

The deployable theme lives in [`shopify-theme/`](shopify-theme/). Future visual
changes should update that directory first:

- `layout/theme.liquid` — Shopify document shell
- `sections/` — Theme Editor sections and blocks
- `snippets/` — reusable Liquid UI
- `templates/` — Online Store 2.0 JSON templates
- `assets/` — storefront CSS, JavaScript, and bundled images
- `config/` — theme settings schema
- `locales/` — storefront translations

The React app in `src/` is retained as a Lovable visual reference. It is not the
production Shopify storefront and must not replace native Liquid functionality.

## Lovable → Shopify workflow

1. Request a design or UI change in Lovable.
2. Make the corresponding change in `shopify-theme/`, keeping important content
   configurable through section settings and blocks.
3. Run `bun run theme:check`.
4. Commit the change. If GitHub sync is enabled, the included workflow validates
   theme changes and can deploy them to an unpublished Shopify preview theme.
5. Review the unpublished theme in Shopify, then explicitly publish it when ready.

Full setup, credentials, deployment, rollback, and Theme Editor safety guidance
is in [`SHOPIFY-DEPLOYMENT.md`](SHOPIFY-DEPLOYMENT.md).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5944cf32-ca51-4b9b-9c5e-6dfec9d88492).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
