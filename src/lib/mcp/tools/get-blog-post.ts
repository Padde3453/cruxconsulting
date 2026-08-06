import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPosts } from "../../../data/blog";
import { blogUrl, htmlToPlainText, resolveLanguage } from "../content";

export default defineTool({
  name: "get_blog_post",
  title: "Get blog post",
  description:
    "Get the full text of one Crux Consulting blog post by its slug (see list_blog_posts).",
  inputSchema: {
    slug: z.string().min(1).describe("Blog post slug, e.g. 'why-AI-projects-fail'."),
    language: z
      .enum(["en", "de"])
      .nullable()
      .describe("Language of the returned content. Defaults to English."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug, language }) => {
    const lang = resolveLanguage(language);
    const needle = slug.trim().toLowerCase();
    const post = blogPosts.find((p) => p.slug.toLowerCase() === needle);
    if (!post) {
      throw new ToolError(
        `No blog post with slug "${slug}". Use list_blog_posts to see available slugs.`,
      );
    }

    const body = htmlToPlainText(post.content[lang]);
    return {
      content: [
        {
          type: "text",
          text: `${post.title[lang]}\n${post.category} · ${post.date} · ${post.author}\n${blogUrl(lang, post.slug)}\n\n${body}`,
        },
      ],
      structuredContent: {
        slug: post.slug,
        language: lang,
        title: post.title[lang],
        summary: post.summary[lang],
        category: post.category,
        date: post.date,
        author: post.author,
        url: blogUrl(lang, post.slug),
        content: body,
      },
    };
  },
});
