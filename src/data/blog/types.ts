export interface BlogPost {
  id: number;
  category: string;
  slug: string;
  title: {
    en: string;
    de: string;
  };
  summary: {
    en: string;
    de: string;
  };
  content: {
    en: string;
    de: string;
  };
  image: string;
  date: string;
  author: string;
  originalLanguage: 'en' | 'de';
}
