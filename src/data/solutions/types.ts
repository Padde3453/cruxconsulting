import type { Lang } from '../site';

export interface SolutionSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Render bullets as a numbered list (practical steps). */
  ordered?: boolean;
}

export interface SolutionLink {
  label: string;
  path: string;
  description?: string;
}

/**
 * One language version of a focused solution page.
 * Everything except `editorial` is rendered to visitors.
 */
export interface SolutionPage {
  /** Shared id across language versions, e.g. "tender-analysis". */
  id: string;
  language: Lang;
  slug: string;
  /** Full public path, e.g. "/de/loesungen/ausschreibungen-analysieren". */
  path: string;
  /** Path of the counterpart page in the other language. */
  translationPath: string;
  /** <title> */
  title: string;
  /** meta description */
  description: string;
  h1: string;
  /** Short answer shown directly below the H1. */
  summary: string;
  /** Short label used in breadcrumbs and link cards. */
  breadcrumbLabel: string;
  sections: SolutionSection[];
  useCasesTitle: string;
  useCases: { title: string; text: string }[];
  limits: { heading: string; points: string[] };
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  relatedTitle: string;
  related: SolutionLink[];
  /** ISO date of the last meaningful content change (sitemap lastmod). */
  lastModified: string;
  /** Internal only — never rendered. Search intents are unvalidated hypotheses. */
  editorial?: { intentHypotheses: string[] };
}
