export interface LocalizedText {
  en: string;
  de: string;
}

export interface BlogPost {
  id: number;
  category: string;
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  content: LocalizedText;
  image: string;
  /**
   * Human-readable publication date (English, e.g. "September 4, 2026").
   * Kept for backwards compatibility with older posts, the sitemap generator
   * and the MCP tools. New posts should also set `publishedAt`.
   */
  date: string;
  author: string;
  originalLanguage: 'en' | 'de';

  // ---- Optional fields (newer posts) ----------------------------------------

  /** ISO 8601 publication date (YYYY-MM-DD). Used for sorting, JSON-LD and localized display. */
  publishedAt?: string;
  /** Localized, descriptive alt text for the featured image. Falls back to the title. */
  imageAlt?: LocalizedText;
  /** Localized meta description for <meta name="description"> / og:description. Falls back to the summary. */
  metaDescription?: LocalizedText;
  /** SEO keywords (primary first). */
  keywords?: string[];
  /**
   * Set to true for posts that were written bilingually and professionally
   * edited in both languages — suppresses the "automatic translation" notice.
   */
  hideTranslationNotice?: boolean;
  /**
   * How the HTML body is styled.
   * - 'legacy' (default): older posts that space paragraphs with <br> tags — rendered unchanged.
   * - 'semantic': proper article typography for h2/h3, p, ul/ol, blockquote, a, tables.
   *   Use this for all new posts (no <br> between paragraphs needed).
   */
  contentFormat?: 'legacy' | 'semantic';
}
