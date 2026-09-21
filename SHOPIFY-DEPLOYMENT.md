# HICH Gallery Shopify deployment

## Ownership model

- **Lovable** is the design and source-editing workspace.
- **`shopify-theme/`** is the canonical storefront code.
- **Shopify** is the production runtime and owns products, collections,
  navigation, inventory, cart, orders, payments, checkout, and Theme Editor data.
- **`src/`** remains a visual reference only. A storefront change is incomplete
  until its native Shopify theme counterpart is updated.

## First-time setup

1. Connect this Lovable project to GitHub using Lovable's Git sync.
2. In Shopify, install Shopify's **Theme Access** app for
   `4j4mx2-h2.myshopify.com` and create a theme access password.
3. Add these GitHub repository secrets under **Settings → Secrets and variables
   → Actions**:

   | Secret | Purpose |
   |---|---|
   | `SHOPIFY_CLI_THEME_TOKEN` | Theme Access password; private and never committed |
   | `SHOPIFY_PREVIEW_THEME_ID` | ID of the unpublished theme used for review |
   | `SHOPIFY_LIVE_THEME_ID` | ID of the production theme, used only for explicit publishing |

4. Run the **Shopify theme → Deploy preview** GitHub Action once. It pushes to
   the configured unpublished preview theme.

No Shopify Admin token, Storefront token, customer data, or payment credential
belongs in this repository.

## Daily workflow

1. Make a design request in Lovable.
2. Confirm the change is represented in `shopify-theme/` using Liquid, JSON,
   CSS, or JavaScript and remains editable where appropriate.
3. Validate locally with `bun run theme:check`.
4. Commit the change. GitHub validates changes under `shopify-theme/`.
5. In GitHub Actions, run **Shopify theme → Deploy preview**.
6. Review the unpublished theme in Shopify on desktop and mobile.
7. Run **Shopify theme → Publish approved theme**, type `publish`, and approve
   the protected production environment if configured.

Production publishing is deliberately manual. A commit cannot silently replace
the live storefront.

## Local Shopify preview

After authenticating Shopify CLI, run `bun run theme:dev`. To reconcile changes
made directly in Shopify, run `bun run theme:pull` and review before committing.
`config/settings_data.json` is ignored during normal pushes to protect merchant
Theme Editor settings.

## Theme Editor safety

- Put editable content in section settings or repeatable blocks.
- Use Shopify product, collection, image, menu, page, URL, and rich-text pickers.
- Never hardcode product, price, inventory, cart, or checkout data.
- Pull and review remote changes before changing a heavily customized template.
- Do not remove setting IDs used by live content without a migration plan.

## Rollback

Shopify retains theme versions and unpublished themes. If a release is wrong,
publish the previously approved theme from **Online Store → Themes**, then revert
the source change so this repository again matches production.