// Re-export everything from the new modular blog structure
export {
  blogPosts,
  getMostRecentPosts,
  getCategoryColor,
  getPostDate,
  formatPostDate,
  getImageAlt,
  getMetaDescription,
} from './blog';
export type { BlogPost, LocalizedText } from './blog';
