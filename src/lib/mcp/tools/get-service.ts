import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "../content";

export default defineTool({
  name: "get_service",
  title: "Get service details",
  description:
    "Get the full public description of one Crux Consulting service by its slug (see list_services).",
  inputSchema: {
    slug: z.string().min(1).describe("Service slug, e.g. 'tender-assistant'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const service = services.find((s) => s.slug === slug.trim().toLowerCase());
    if (!service) {
      throw new ToolError(
        `Unknown service "${slug}". Available: ${services.map((s) => s.slug).join(", ")}`,
      );
    }
    return {
      content: [
        {
          type: "text",
          text: `${service.name}\n${service.url}\n\n${service.description}\n\nHighlights:\n${service.highlights
            .map((h) => `- ${h}`)
            .join("\n")}`,
        },
      ],
      structuredContent: { service },
    };
  },
});
