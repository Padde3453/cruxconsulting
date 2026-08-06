import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPosts } from "../../../data/blog";
import { blogUrl, htmlToPlainText, resolveLanguage, services } from "../content";

export default defineTool({
  name: "search_content",
  title: "Search site content",
  description:
    "Full-text search across Crux Consulting's public services and blog posts. Returns matching items with URLs and short excerpts.",
  inputSchema: {
    query: z.string().min(2).describe("Search terms, e.g. 'tender automation'."),
    language: z
      .enum(["en", "de"])
      .nullable()
      .describe("Language of the returned content. Defaults to English."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, language }) => {
    const lang = resolveLanguage(language);
    const q = query.trim().toLowerCase();

    const serviceHits = services
      .filter((s) =>
        `${s.name} ${s.description} ${s.highlights.join(" ")}`.toLowerCase().includes(q),
      )
      .map((s) => ({ type: "service" as const, title: s.name, url: s.url, excerpt: s.description }));

    const blogHits = blogPosts
      .map((post) => ({ post, body: htmlToPlainText(post.content[lang]) }))
      .filter(({ post, body }) =>
        `${post.title[lang]} ${post.summary[lang]} ${body}`.toLowerCase().includes(q),
      )
      .map(({ post, body }) => {
        const idx = body.toLowerCase().indexOf(q);
        const excerpt =
          idx >= 0
            ? body.slice(Math.max(0, idx - 120), idx + 240).trim()
            : post.summary[lang];
        return {
          type: "blog_post" as const,
          title: post.title[lang],
          url: blogUrl(lang, post.slug),
          excerpt,
        };
      });

    const results = [...serviceHits, ...blogHits];
    return {
      content: [
        {
          type: "text",
          text: results.length
            ? results.map((r) => `[${r.type}] ${r.title}\n${r.url}\n${r.excerpt}`).join("\n\n")
            : `No matches for "${query}".`,
        },
      ],
      structuredContent: { query, language: lang, results },
    };
  },
});
