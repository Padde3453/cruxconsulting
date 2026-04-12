export type { BlogPost } from './types';

import { shouldYouAutomateThatProcess } from './should-you-automate-that-process';
import { makingEmployeesMoreEfficient } from './making-employees-more-efficient';
import { whatAiCanActuallyDo } from './what-ai-can-actually-do';
import { fiveTasksToAutomateNow } from './5-tasks-to-automate-now';
import { frustratingBotsToExpertTeammates } from './frustrating-bots-to-expert-teammates';
import { whyAiProjectsFail } from './why-ai-projects-fail';
import type { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  shouldYouAutomateThatProcess,
  makingEmployeesMoreEfficient,
  whatAiCanActuallyDo,
  fiveTasksToAutomateNow,
  frustratingBotsToExpertTeammates,
  whyAiProjectsFail,
];

// Helper function to parse date strings and sort by most recent
export const getMostRecentPosts = (posts: BlogPost[], count: number = 3): BlogPost[] => {
  return posts
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    })
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
