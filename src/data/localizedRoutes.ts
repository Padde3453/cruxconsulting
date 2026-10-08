/**
 * Single source of truth for language-specific public routes outside the blog.
 * Used by the router helpers, LanguageToggle, sitemap generator and prerenderer.
 * Keep this file free of '@/' aliases and asset imports so Node/Bun scripts can import it.
 */
import type { Lang } from './site';

export interface LocalizedRouteGroup {
  id: string;
  paths: Record<Lang, string>;
  /** ISO date of the last meaningful content change. */
  lastmod: string;
  priority: number;
}

export const ROUTE_PATHS = {
  tenderAssistant: { de: '/de/services/tender-assistant', en: '/en/services/tender-assistant' },
  tenderAnalysis: { de: '/de/loesungen/ausschreibungen-analysieren', en: '/en/solutions/tender-analysis' },
  tenderAutofill: {
    de: '/de/loesungen/ausschreibungsformulare-ausfuellen',
    en: '/en/solutions/tender-questionnaire-autofill',
  },
} as const satisfies Record<string, Record<Lang, string>>;

export const SOLUTION_BASE: Record<Lang, string> = { de: '/de/loesungen', en: '/en/solutions' };

export const BLOG_PATHS = {
  tendersTheoryVsReality: (lang: Lang) => `/${lang}/blog/tenders-theory-vs-reality`,
  saveHoursOnRfp: (lang: Lang) => `/${lang}/blog/save-hours-on-rfp-responses`,
};

export const LEGACY_TENDER_PATH = '/services/tender-assistant';

export const localizedRouteGroups: LocalizedRouteGroup[] = [
  { id: 'tender-assistant', paths: ROUTE_PATHS.tenderAssistant, lastmod: '2026-10-08', priority: 0.9 },
  { id: 'tender-analysis', paths: ROUTE_PATHS.tenderAnalysis, lastmod: '2026-10-08', priority: 0.7 },
  { id: 'tender-autofill', paths: ROUTE_PATHS.tenderAutofill, lastmod: '2026-10-08', priority: 0.7 },
];

/** All language-specific paths that are prerendered at build time. */
export const prerenderPaths: string[] = localizedRouteGroups.flatMap((g) => [g.paths.de, g.paths.en]);

const stripTrailing = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

export const findRouteGroup = (pathname: string) => {
  const clean = stripTrailing(pathname);
  return localizedRouteGroups.find((g) => g.paths.de === clean || g.paths.en === clean);
};

/** Equivalent URL in the target language, or null when the path is not a localized route. */
export const getCounterpartPath = (pathname: string, target: Lang): string | null => {
  const group = findRouteGroup(pathname);
  return group ? group.paths[target] : null;
};
