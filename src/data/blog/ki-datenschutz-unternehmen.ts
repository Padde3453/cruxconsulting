import type { BlogPost } from './types';
import { contentDe } from './ki-datenschutz-unternehmen.de';
import { contentEn } from './ki-datenschutz-unternehmen.en';

/**
 * Blog post #9 — written bilingually (original: German, professionally edited English).
 * Both language versions share the slug: /de/blog/ki-datenschutz-unternehmen and /en/blog/ki-datenschutz-unternehmen
 */
export const kiDatenschutzUnternehmen: BlogPost = {
  id: 9,
  category: "AI EDUCATION",
  slug: "ki-datenschutz-unternehmen",
  title: {
    en: "AI and Data Protection in Companies: The 0-to-10 Risk Check",
    de: "KI und Datenschutz im Unternehmen: Der Risiko-Check von 0 bis 10",
  },
  summary: {
    en: "Data protection does not depend on the model alone, but on the path the data takes. This article provides a clear comparison of the main AI operating models.",
    de: "Nicht das Modell allein entscheidet über Datenschutz, sondern der Weg, den die Daten nehmen. Dieser Beitrag ordnet die wichtigsten Betriebsmodelle verständlich ein.",
  },
  metaDescription: {
    en: "Which AI is safe for companies in the DACH region? Corporate licences, APIs, tunnels and on-premise in a data protection check from 0 to 10.",
    de: "Welche KI ist für Unternehmen in DACH sicher? Corporate-Lizenzen, APIs, Tunnel und On-Premise im Datenschutz-Check von 0 bis 10.",
  },
  keywords: [
    "KI Datenschutz Unternehmen",
    "DSGVO KI",
    "Enterprise KI",
    "Open-Source-KI",
    "On-Premise KI",
    "KI-Risikoklassifikation",
    "RAG Datenschutz",
    "Geschäftsgeheimnisse KI",
  ],
  content: {
    en: contentEn,
    de: contentDe,
  },
  image: "/lovable-uploads/ki-datenschutz-risikoklassifikation-16x9.png",
  imageAlt: {
    en: "Infographic showing the 0-to-10 risk classification for AI data protection in companies",
    de: "Infografik zur Risikoklassifikation von KI-Datenschutz im Unternehmen",
  },
  date: "September 4, 2026",
  publishedAt: "2026-09-04",
  author: "Patrick Reverchon",
  originalLanguage: "de",
  hideTranslationNotice: true,
};
