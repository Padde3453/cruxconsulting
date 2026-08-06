import { defineTool } from "@lovable.dev/mcp-js";
import { company, SITE_URL } from "../content";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Get public information about Crux Consulting: what the company does, how it works, and how to get in touch.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          `${company.name} — ${company.tagline}`,
          SITE_URL,
          "",
          company.about,
          "",
          "How we work:",
          ...company.approach.map((step) => `- ${step}`),
          "",
          `Contact: ${company.contactUrl}`,
          `Legal: ${SITE_URL}/impressum · Privacy: ${SITE_URL}/privacy`,
        ].join("\n"),
      },
    ],
    structuredContent: { company: { ...company, website: SITE_URL } },
  }),
});
