/**
 * Sitemap builder shared by `scripts/generate-sitemap.ts` (writes public/sitemap.xml)
 * and the Vite build plugin (writes dist/sitemap.xml), so both come from one source.
 *
 * lastmod policy: only page-specific dates are emitted (blog publish dates and the
 * content dates in src/data/localizedRoutes.ts). Static pages carry no lastmod.
 */
import * as fs from 'fs';
import * as path from 'path';
import { localizedRouteGroups } from '../src/data/localizedRoutes';
import { SITE_URL, X_DEFAULT_LANG } from '../src/data/site';

interface BlogPostMeta { slug: string; date: string }

// Non-language-prefixed public routes that exist in src/App.tsx
const staticPages = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/services', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/ai-chatbot', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/ai-compliance', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/automation', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/process-audit', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/workshops', priority: 0.8, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { path: '/impressum', priority: 0.3, changefreq: 'yearly' },
];

const readBlogPosts = (rootDir: string): BlogPostMeta[] => {
  const blogDir = path.resolve(rootDir, 'src/data/blog');
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts' && !f.startsWith('_'));
  const posts: BlogPostMeta[] = [];
  for (const file of files) {
    const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const slug = content.match(/^\s*slug:\s*["']([^"']+)["']/m)?.[1];
    const iso = content.match(/^\s*publishedAt:\s*["'](\d{4}-\d{2}-\d{2})["']/m)?.[1];
    const display = content.match(/^\s*date:\s*["']([^"']+)["']/m)?.[1];
    if (!slug || posts.some((p) => p.slug === slug)) continue;
    let date = iso;
    if (!date && display) {
      const d = new Date(display);
      if (!isNaN(d.getTime())) date = d.toISOString().split('T')[0];
    }
    if (date) posts.push({ slug, date });
  }
  return posts.sort((a, b) => b.date.localeCompare(a.date));
};

const alternateEntries = (paths: { de: string; en: string }, opts: { lastmod?: string; changefreq: string; priority: number }) =>
  (['en', 'de'] as const).map((lang) => [
    '  <url>',
    `    <loc>${SITE_URL}${paths[lang]}</loc>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${paths.en}"/>`,
    `    <xhtml:link rel="alternate" hreflang="de" href="${SITE_URL}${paths.de}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${paths[X_DEFAULT_LANG]}"/>`,
    opts.lastmod ? `    <lastmod>${opts.lastmod}</lastmod>` : null,
    `    <changefreq>${opts.changefreq}</changefreq>`,
    `    <priority>${opts.priority.toFixed(1)}</priority>`,
    '  </url>',
  ].filter(Boolean).join('\n'));

export const buildSitemap = (rootDir: string) => {
  const urls: string[] = [];
  for (const page of staticPages) {
    urls.push([
      '  <url>',
      `    <loc>${SITE_URL}${page.path}</loc>`,
      `    <changefreq>${page.changefreq}</changefreq>`,
      `    <priority>${page.priority.toFixed(1)}</priority>`,
      '  </url>',
    ].join('\n'));
  }
  for (const group of localizedRouteGroups) {
    urls.push(...alternateEntries(group.paths, { lastmod: group.lastmod, changefreq: 'monthly', priority: group.priority }));
  }
  urls.push(...alternateEntries({ de: '/de/blog', en: '/en/blog' }, { changefreq: 'weekly', priority: 0.9 }));
  const posts = readBlogPosts(rootDir);
  for (const post of posts) {
    urls.push(...alternateEntries({ de: `/de/blog/${post.slug}`, en: `/en/blog/${post.slug}` }, { lastmod: post.date, changefreq: 'monthly', priority: 0.8 }));
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return { xml, count: urls.length };
};
