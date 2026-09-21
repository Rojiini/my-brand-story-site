# Make the Shopify theme the production source

## Goal
Keep Lovable as the design workspace while treating the native Shopify Online Store 2.0 theme as the production storefront source. Future visual changes will be reflected in Liquid, JSON templates, CSS, and JavaScript rather than relying on the React preview.

## Changes
1. Add the complete existing Shopify theme to a tracked top-level theme workspace, preserving `layout/`, `sections/`, `snippets/`, `templates/`, `assets/`, `config/`, and `locales/`.
2. Preserve Theme Editor controls and Shopify-native products, collections, navigation, search, cart, inventory, and checkout.
3. Add Shopify CLI configuration and focused scripts for theme validation, local preview, safe deployment to an unpublished theme, and an explicit production publish step.
4. Add a GitHub Actions workflow that validates theme changes and can deploy them to Shopify using repository secrets, without placing private credentials in the codebase.
5. Document the Lovable → commit → Shopify workflow, required Shopify credentials, first-time setup, preview deployment, production publishing, and rollback guidance.
6. Update project guidance so future design requests target the Shopify theme first; retain the React app only as a reference workspace unless separately requested.
7. Validate the theme archive structure, JSON templates, Liquid files, deployment scripts, and current app diagnostics.

## Technical details
- Canonical theme directory: `shopify-theme/`.
- Deployment uses Shopify CLI and the store domain `4j4mx2-h2.myshopify.com`.
- Required secret: a Shopify Theme Access password/token stored locally or in GitHub Actions secrets, never committed.
- Automated pushes default to an unpublished preview theme; publishing remains an explicit action to protect the live store.
- Theme Editor data and merchant-managed product/catalog data remain under Shopify’s control.

## Not included
- No React storefront replacement.
- No automatic live publish on every commit.
- No inventory changes or product-data changes.
