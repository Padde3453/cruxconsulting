import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getServiceTool from "./tools/get-service";
import listBlogPostsTool from "./tools/list-blog-posts";
import getBlogPostTool from "./tools/get-blog-post";
import searchContentTool from "./tools/search-content";
import getCompanyInfoTool from "./tools/get-company-info";

export default defineMcp({
  name: "cruxconsulting",
  title: "cruxconsulting",
  version: "0.1.0",
  instructions:
    "Public tools for the Crux Consulting website (crux-consulting.ai), an AI-native business consulting firm. Use `get_company_info` for background on the company, `list_services` / `get_service` for its consulting offerings, `list_blog_posts` / `get_blog_post` for published articles (English and German), and `search_content` to search across everything. All data is public website content.",
  tools: [
    getCompanyInfoTool,
    listServicesTool,
    getServiceTool,
    listBlogPostsTool,
    getBlogPostTool,
    searchContentTool,
  ],
});
