# Architecture rules

- Language-specific non-blog routes (tender page, solution pages) are declared once in `src/data/localizedRoutes.ts`; router helpers, LanguageToggle, sitemap and prerenderer all read it — why: one source keeps URLs, hreflang and sitemap in sync.
- Solution pages are typed local content in `src/data/solutions/` rendered by one template (`src/pages/SolutionPage.tsx`); `editorial` fields are never rendered — why: reviewable copy without a CMS, no keyword fields leak to visitors.
- URL language (`/de/...`, `/en/...`) wins over stored/browser language via the i18next `path` detector plus `useUrlLanguage` — why: deterministic language per URL for users and crawlers.
- Absolute canonical/hreflang/og/sitemap URLs use `SITE_URL` from `src/data/site.ts` (www host) — why: apex redirects to www.
- `vite.config.ts` plugin `crux-prerender` (build only, fail-soft) writes `dist/sitemap.xml` and prerenders `prerenderPaths` with the real React components into `dist/<path>/index.html`; the client still mounts with `createRoot` — why: real initial HTML without a framework migration or bot-only content.
- `public/sitemap.xml` is regenerated with `bun scripts/generate-sitemap.ts` from the same builder (`scripts/sitemap.ts`); only page-specific lastmod dates are emitted — why: no fake freshness signals.
