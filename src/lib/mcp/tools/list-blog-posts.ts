import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPosts } from "@/data/blog";
import { blogUrl, resolveLanguage } from "../content";

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description:
    "List all published Crux Consulting blog posts with title, summary, category, date and URL.",
  inputSchema: {
    language: z
      .enum(["en", "de"])
      .nullable()
      .describe("Language of the returned content. Defaults to English."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ language }) => {
    const lang = resolveLanguage(language);
    const posts = [...blogPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((post) => ({
        slug: post.slug,
        title: post.title[lang],
        summary: post.summary[lang],
        category: post.category,
        date: post.date,
        author: post.author,
        url: blogUrl(lang, post.slug),
      }));

    return {
      content: [
        {
          type: "text",
          text: posts
            .map((p) => `${p.title}\n${p.category} · ${p.date} · ${p.author}\n${p.summary}\n${p.url}`)
            .join("\n\n"),
        },
      ],
      structuredContent: { language: lang, posts },
    };
  },
});
