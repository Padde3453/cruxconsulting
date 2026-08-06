import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getServiceTool from "./tools/get-service";
import listBlogPostsTool from "./tools/list-blog-posts";
import getBlogPostTool from "./tools/get-blog-post";
import searchContentTool from "./tools/search-content";
import getCompanyInfoTool from "./tools/get-company-info";

// Direct Supabase auth issuer — must not be derived from the proxied SUPABASE_URL.
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "cruxconsulting",
  title: "cruxconsulting",
  version: "0.1.0",
  instructions:
    "Tools for the Crux Consulting website (crux-consulting.ai), an AI-native business consulting firm. Callers must sign in to a Crux Consulting account. Use `get_company_info` for background on the company, `list_services` / `get_service` for its consulting offerings, `list_blog_posts` / `get_blog_post` for published articles (English and German), and `search_content` to search across everything.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    getCompanyInfoTool,
    listServicesTool,
    getServiceTool,
    listBlogPostsTool,
    getBlogPostTool,
    searchContentTool,
  ],
});
