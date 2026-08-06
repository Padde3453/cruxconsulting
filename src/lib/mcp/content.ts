export const SITE_URL = "https://crux-consulting.ai";

export type SiteLanguage = "en" | "de";

export function resolveLanguage(language?: string | null): SiteLanguage {
  return language?.toLowerCase().startsWith("de") ? "de" : "en";
}

export function blogUrl(language: SiteLanguage, slug: string): string {
  return `${SITE_URL}/${language}/blog/${slug}`;
}

/** Strip HTML tags from stored blog content and normalise whitespace. */
export function htmlToPlainText(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|h1|h2|h3|li|blockquote)>/gi, "\n")
    .replace(/<li[^>]*>/gi, "- ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\n{3,}/g, "\n\n")
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .trim();
}

export interface SiteService {
  slug: string;
  name: string;
  description: string;
  highlights: string[];
  url: string;
}

const service = (
  slug: string,
  name: string,
  description: string,
  highlights: string[],
): SiteService => ({ slug, name, description, highlights, url: `${SITE_URL}/services/${slug}` });

export const services: SiteService[] = [
  service(
    "tender-assistant",
    "Tender Assistant",
    "An AI assistant that helps companies respond to tenders and RFPs faster: it reads the tender documents, finds the relevant requirements, and drafts answers grounded in your own previous submissions and documentation.",
    [
      "Analyses tender and RFP documents automatically",
      "Drafts answers from your existing knowledge base",
      "Keeps a human in the loop for review and final wording",
      "Cuts the time spent on repetitive bid responses",
    ],
  ),
  service(
    "automation",
    "Custom Automations",
    "Workflow and task automation tailored to how your business actually works — connecting the tools you already use so repetitive manual steps disappear.",
    [
      "Automates repetitive, rule-based work across existing tools",
      "Custom integrations rather than off-the-shelf templates",
      "Measurable time and cost savings per process",
    ],
  ),
  service(
    "ai-chatbot",
    "AI Chatbots & Virtual Assistants",
    "AI chatbots and virtual assistants for sales and customer service that answer with your company's real knowledge instead of generic responses.",
    [
      "Trained on your own content and documentation",
      "Handles sales enquiries and support questions",
      "Escalates to a human when needed",
    ],
  ),
  service(
    "workshops",
    "AI Workshops & Training",
    "Hands-on AI workshops and training programmes that give teams the practical skills to use AI safely and effectively in their daily work.",
    [
      "Practical, role-specific exercises",
      "Covers everyday AI use plus risks and limits",
      "Designed for non-technical teams as well as specialists",
    ],
  ),
  service(
    "process-audit",
    "Process Audit",
    "A structured analysis of your business processes to identify where automation and AI create real value — and where they do not.",
    [
      "Maps current processes and pain points",
      "Prioritises opportunities by impact and effort",
      "Delivers a concrete implementation roadmap",
    ],
  ),
  service(
    "ai-compliance",
    "AI Compliance & Governance",
    "AI governance, compliance and risk management support, including the requirements introduced by the EU AI Act.",
    [
      "Assessment of AI use cases and risk categories",
      "Governance structures, policies and documentation",
      "Guidance on EU AI Act obligations and timelines",
    ],
  ),
];

export const company = {
  name: "Crux Consulting",
  tagline: "AI-native business consulting",
  about:
    "Crux Consulting helps companies implement AI, automate processes and build custom solutions that actually work in day-to-day operations. The focus is on business outcomes — more revenue, more time, lower cost and a better client experience — rather than technology for its own sake.",
  approach: [
    "Start small: prove value on a concrete process before scaling.",
    "Tailored first: solutions are built around how your business already works.",
    "AI-native, business led: technology follows the business case, never the other way round.",
    "Keep humans in the loop: AI drafts and assists, people decide.",
  ],
  contactUrl: `${SITE_URL}/#contact`,
} as const;
