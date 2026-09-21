<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## HICH Shopify storefront rule

`shopify-theme/` is the canonical production storefront. For design, layout,
styling, typography, navigation, section, or UI requests, update the appropriate
Shopify Liquid, JSON, CSS, JavaScript, section, block, snippet, or template file.
Keep Shopify products, collections, images, navigation, search, cart, inventory,
orders, payments, and checkout native. Preserve Theme Editor configurability.
Do not implement a React-only production storefront. The React app under `src/`
is a visual reference unless the user explicitly requests a preview-only change.
