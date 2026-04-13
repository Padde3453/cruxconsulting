/**
 * =====================================================
 * BLOG POST TEMPLATE
 * =====================================================
 * 
 * HOW TO USE:
 * 1. Copy this file
 * 2. Rename it to your-post-title.ts (use kebab-case, e.g. "my-new-post.ts")
 * 3. Fill in all the fields below (replace the placeholder text)
 * 4. Export it in src/data/blog/index.ts
 * 5. Done! Your post will appear everywhere automatically.
 * 
 * See README.md for full instructions.
 * =====================================================
 */

import { BlogPost } from './types';

export const myNewPost: BlogPost = {
  // UNIQUE ID — check index.ts for the highest existing ID and add 1
  id: 99,

  // CATEGORY — pick one: "AI STRATEGY", "PROCESS AUTOMATION", "AI EDUCATION", "AUTOMATION", "SALES & SERVICE"
  category: "AI STRATEGY",

  // SLUG — used in the URL, must be unique, use kebab-case (lowercase with dashes)
  slug: "my-new-post",

  // ORIGINAL LANGUAGE — 'en' if you wrote it in English, 'de' if in German
  originalLanguage: 'en',

  // TITLE — keep under 60 characters for best display
  title: {
    en: "Your English Title Here",
    de: "Ihr deutscher Titel hier"
  },

  // SUMMARY — 2-3 sentences shown on preview cards (plain text, no HTML)
  summary: {
    en: "A short English summary that makes people want to read more.",
    de: "Eine kurze deutsche Zusammenfassung, die Leser neugierig macht."
  },

  // IMAGE — path to uploaded image (upload via Lovable, then use the path)
  image: "/lovable-uploads/your-image-filename.png",

  // DATE — format: "Month DD, YYYY"
  date: "January 1, 2025",

  // AUTHOR
  author: "Patrick Müller",

  // CONTENT — full blog post in HTML. Use backticks (`) for multi-line content.
  content: {
    en: `
      <p>Opening paragraph goes here. Make it engaging!</p>

      <h2>First Section Heading</h2>
      <p>Your content with <strong>bold text</strong> and <em>italic text</em>.</p>

      <h3>A Subheading</h3>
      <ul>
        <li>Bullet point one</li>
        <li>Bullet point two</li>
        <li>Bullet point three</li>
      </ul>

      <p>More content here. You can add <a href="https://example.com" target="_blank">links</a> too.</p>

      <blockquote>
        <p>Use blockquotes for important callouts or quotes.</p>
      </blockquote>

      <h2>Second Section</h2>
      <p>Continue writing your post...</p>

      <p>End with a clear takeaway or call to action.</p>
    `,
    de: `
      <p>Einleitungsabsatz hier. Machen Sie ihn ansprechend!</p>

      <h2>Erste Abschnittsüberschrift</h2>
      <p>Ihr Inhalt mit <strong>fettem Text</strong> und <em>kursivem Text</em>.</p>

      <h3>Eine Unterüberschrift</h3>
      <ul>
        <li>Aufzählungspunkt eins</li>
        <li>Aufzählungspunkt zwei</li>
        <li>Aufzählungspunkt drei</li>
      </ul>

      <p>Mehr Inhalt hier. Sie können auch <a href="https://example.com" target="_blank">Links</a> hinzufügen.</p>

      <blockquote>
        <p>Verwenden Sie Zitate für wichtige Hinweise oder Zitate.</p>
      </blockquote>

      <h2>Zweiter Abschnitt</h2>
      <p>Schreiben Sie Ihren Beitrag weiter...</p>

      <p>Enden Sie mit einer klaren Erkenntnis oder einem Aufruf zum Handeln.</p>
    `
  }
};
