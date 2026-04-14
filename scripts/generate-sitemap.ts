/**
 * Sitemap Generator Script
 * 
 * Generates a sitemap.xml file for SEO purposes.
 * Run with: npx tsx scripts/generate-sitemap.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://crux-consulting.ai';

interface BlogPostMeta {
  slug: string;
  date: string;
}

// Read blog posts from the source file
const blogPostsPath = path.resolve(__dirname, '../src/data/blogPosts.ts');
const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf-8');

const slugMatches = blogPostsContent.matchAll(/slug:\s*["']([^"']+)["']/g);
const dateMatches = blogPostsContent.matchAll(/date:\s*["']([^"']+)["']/g);

const slugs = Array.from(slugMatches).map(m => m[1]);
const dates = Array.from(dateMatches).map(m => m[1]);

const blogPosts: BlogPostMeta[] = slugs.map((slug, index) => ({
  slug,
  date: dates[index] || new Date().toISOString()
}));

// Static pages — these are the ACTUAL routes in the app router
// Non-language-prefixed pages (no /en/ or /de/ prefix)
const staticPages = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/services', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/ai-chatbot', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/ai-compliance', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/automation', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/process-audit', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/workshops', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/tender-assistant', priority: 0.8, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { path: '/impressum', priority: 0.3, changefreq: 'yearly' },
];

function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return new Date().toISOString().split('T')[0];
    }
    return date.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

function generateStaticUrlEntry(pagePath: string, lastmod: string, priority: number, changefreq: string): string {
  const loc = pagePath === '/' ? BASE_URL : `${BASE_URL}${pagePath}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// Blog pages have actual language-prefixed routes (/:lang/blog/:slug)
function generateBlogUrlEntry(slug: string, lastmod: string): string {
  return `  <url>
    <loc>${BASE_URL}/en/blog/${slug}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en/blog/${slug}"/>
    <xhtml:link rel="alternate" hreflang="de" href="${BASE_URL}/de/blog/${slug}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en/blog/${slug}"/>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/de/blog/${slug}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en/blog/${slug}"/>
    <xhtml:link rel="alternate" hreflang="de" href="${BASE_URL}/de/blog/${slug}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en/blog/${slug}"/>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
}

function generateSitemap(): string {
  const today = new Date().toISOString().split('T')[0];
  
  let urls: string[] = [];

  // Static pages (no language prefix — these are the real routes)
  for (const page of staticPages) {
    urls.push(generateStaticUrlEntry(page.path, today, page.priority, page.changefreq));
  }

  // Blog index pages (language-prefixed routes that exist)
  urls.push(`  <url>
    <loc>${BASE_URL}/en/blog</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en/blog"/>
    <xhtml:link rel="alternate" hreflang="de" href="${BASE_URL}/de/blog"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en/blog"/>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/de/blog</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en/blog"/>
    <xhtml:link rel="alternate" hreflang="de" href="${BASE_URL}/de/blog"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en/blog"/>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`);

  // Blog posts (language-prefixed routes that exist)
  for (const post of blogPosts) {
    const lastmod = formatDate(post.date);
    urls.push(generateBlogUrlEntry(post.slug, lastmod));
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;
}

const sitemap = generateSitemap();
const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap, 'utf-8');

console.log(`✅ Sitemap generated successfully at ${outputPath}`);
console.log(`📝 Total URLs: ${staticPages.length} static + 2 blog index + ${blogPosts.length * 2} blog posts = ${staticPages.length + 2 + blogPosts.length * 2}`);
