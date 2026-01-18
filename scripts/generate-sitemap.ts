/**
 * Sitemap Generator Script
 * 
 * Generates a sitemap.xml file for SEO purposes.
 * Run with: npx tsx scripts/generate-sitemap.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// Define the base URL for the site
const BASE_URL = 'https://crux-consulting.ai';

// Define blog posts data inline to avoid import issues with TypeScript paths
// This will need to be kept in sync with src/data/blogPosts.ts
interface BlogPostMeta {
  slug: string;
  date: string;
}

// Read blog posts from the source file
const blogPostsPath = path.resolve(__dirname, '../src/data/blogPosts.ts');
const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf-8');

// Extract slugs and dates using regex
const slugMatches = blogPostsContent.matchAll(/slug:\s*["']([^"']+)["']/g);
const dateMatches = blogPostsContent.matchAll(/date:\s*["']([^"']+)["']/g);

const slugs = Array.from(slugMatches).map(m => m[1]);
const dates = Array.from(dateMatches).map(m => m[1]);

const blogPosts: BlogPostMeta[] = slugs.map((slug, index) => ({
  slug,
  date: dates[index] || new Date().toISOString()
}));

// Static pages with their priorities
const staticPages = [
  { path: '', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/services', priority: 0.9, changefreq: 'monthly' },
  { path: '/blog', priority: 0.9, changefreq: 'weekly' },
  { path: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { path: '/impressum', priority: 0.3, changefreq: 'yearly' },
  { path: '/services/ai-chatbot', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/ai-compliance', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/automation', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/process-audit', priority: 0.8, changefreq: 'monthly' },
  { path: '/services/workshops', priority: 0.8, changefreq: 'monthly' },
];

// Convert date string to ISO format
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

// Generate URL entry with hreflang alternates
function generateUrlEntry(
  path: string,
  lastmod: string,
  priority: number,
  changefreq: string,
  hasLanguageVariants: boolean = true
): string {
  const languages = ['en', 'de'];
  
  let alternates = '';
  if (hasLanguageVariants) {
    alternates = languages
      .map(lang => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}/${lang}${path}"/>`)
      .join('\n');
    alternates += `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en${path}"/>`;
  }

  return `  <url>
    <loc>${BASE_URL}/en${path}</loc>
${alternates}
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
  <url>
    <loc>${BASE_URL}/de${path}</loc>
${alternates}
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// Generate the complete sitemap
function generateSitemap(): string {
  const today = new Date().toISOString().split('T')[0];
  
  let urls: string[] = [];

  // Add static pages
  for (const page of staticPages) {
    urls.push(generateUrlEntry(page.path, today, page.priority, page.changefreq));
  }

  // Add blog posts
  for (const post of blogPosts) {
    const lastmod = formatDate(post.date);
    urls.push(generateUrlEntry(`/blog/${post.slug}`, lastmod, 0.8, 'monthly'));
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;
}

// Write sitemap to public folder
const sitemap = generateSitemap();
const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap, 'utf-8');

console.log(`✅ Sitemap generated successfully at ${outputPath}`);
console.log(`📝 Total URLs: ${(staticPages.length + blogPosts.length) * 2} (${staticPages.length} static pages + ${blogPosts.length} blog posts × 2 languages)`);
