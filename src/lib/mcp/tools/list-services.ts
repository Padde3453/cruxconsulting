import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "../content";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List all consulting services offered by Crux Consulting, with a short description and the page URL for each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: services
          .map((s) => `${s.name} (${s.slug})\n${s.description}\n${s.url}`)
          .join("\n\n"),
      },
    ],
    structuredContent: { services },
  }),
});
