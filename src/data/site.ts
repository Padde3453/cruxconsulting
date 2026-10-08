// Canonical public host. The apex domain redirects to www, so absolute
// canonical / hreflang / og:url / sitemap URLs always use this value.
export const SITE_URL = 'https://www.crux-consulting.ai';
export const SITE_NAME = 'Crux Consulting';
export const SITE_LOGO = `${SITE_URL}/LogoIconOnly.png`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export type Lang = 'de' | 'en';
export const LANGS: Lang[] = ['de', 'en'];
/** Language whose URL serves as hreflang x-default for localized pages. */
export const X_DEFAULT_LANG: Lang = 'en';

export const normalizeLang = (value?: string | null): Lang =>
  value && value.toLowerCase().startsWith('de') ? 'de' : 'en';

export const absoluteUrl = (path: string) => `${SITE_URL}${path === '/' ? '/' : path}`;
