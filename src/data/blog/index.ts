export type { BlogPost, LocalizedText } from './types';

import { shouldYouAutomateThatProcess } from './should-you-automate-that-process';
import { makingEmployeesMoreEfficient } from './making-employees-more-efficient';
import { whatAiCanActuallyDo } from './what-ai-can-actually-do';
import { fiveTasksToAutomateNow } from './5-tasks-to-automate-now';
import { frustratingBotsToExpertTeammates } from './frustrating-bots-to-expert-teammates';
import { whyAiProjectsFail } from './why-ai-projects-fail';
import { tendersTheoryVsReality } from './tenders-theory-vs-reality';
import { saveHoursOnRfpResponses } from './save-hours-on-rfp-responses';
import { kiDatenschutzUnternehmen } from './ki-datenschutz-unternehmen';
import type { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  shouldYouAutomateThatProcess,
  makingEmployeesMoreEfficient,
  whatAiCanActuallyDo,
  fiveTasksToAutomateNow,
  frustratingBotsToExpertTeammates,
  whyAiProjectsFail,
  tendersTheoryVsReality,
  saveHoursOnRfpResponses,
  kiDatenschutzUnternehmen,
];

type Lang = 'en' | 'de';

/** Returns the publication date as a Date object (prefers the ISO `publishedAt`). */
export const getPostDate = (post: BlogPost): Date => {
  if (post.publishedAt) {
    // Anchor to noon UTC so the calendar day is stable in every timezone.
    return new Date(`${post.publishedAt}T12:00:00Z`);
  }
  return new Date(post.date);
};

/**
 * Localized publication date for display.
 * Posts with an ISO `publishedAt` are formatted per language
 * (de: "4. September 2026", en: "September 4, 2026").
 * Older posts keep their original display string unchanged.
 */
export const formatPostDate = (post: BlogPost, lang: Lang): string => {
  if (!post.publishedAt) return post.date;
  return new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(getPostDate(post));
};

/** Localized alt text for the featured image (falls back to the localized title). */
export const getImageAlt = (post: BlogPost, lang: Lang): string =>
  post.imageAlt?.[lang] ?? post.title[lang];

/** Localized meta description (falls back to the localized summary). */
export const getMetaDescription = (post: BlogPost, lang: Lang): string =>
  post.metaDescription?.[lang] ?? post.summary[lang];

// Helper function to sort by most recent (does not mutate the input array)
export const getMostRecentPosts = (posts: BlogPost[], count: number = 3): BlogPost[] => {
  return [...posts]
    .sort((a, b) => getPostDate(b).getTime() - getPostDate(a).getTime())
    .slice(0, count);
};

// Helper function to get category colors
export const getCategoryColor = (category: string): string => {
  switch (category) {
    case "AI STRATEGY":
      return "text-brand-blue";
    case "PROCESS AUTOMATION":
      return "text-brand-green";
    case "AI EDUCATION":
      return "text-purple-400";
    case "AUTOMATION":
      return "text-cyan-400";
    case "SALES & SERVICE":
      return "text-orange-400";
    default:
      return "text-gray-400";
  }
};
