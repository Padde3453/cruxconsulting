# CRUX Consulting Website

**URL**: https://lovable.dev/projects/72996f9d-6f32-4f9b-8b8a-6d3e67c74d82

## Tech Stack

Vite, TypeScript, React, shadcn-ui, Tailwind CSS

## Development

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm i
npm run dev
```

## Deploy

Open [Lovable](https://lovable.dev/projects/72996f9d-6f32-4f9b-8b8a-6d3e67c74d82) → Share → Publish.

---

## How to Add a New Blog Post

### Step 1: Copy the template

Go to `src/data/blog/` and copy the file `_TEMPLATE.ts`.  
Rename your copy to something like `my-new-post.ts` (use lowercase and dashes, no spaces).

### Step 2: Fill in your content

Open your new file and replace all the placeholder text:

| Field | What to write | Example |
|-------|--------------|---------|
| `id` | A unique number (look at other files, pick the next highest) | `7` |
| `category` | One of: `"AI STRATEGY"`, `"PROCESS AUTOMATION"`, `"AI EDUCATION"`, `"AUTOMATION"`, `"SALES & SERVICE"` | `"AI STRATEGY"` |
| `slug` | The URL-friendly name (lowercase, dashes) | `"my-new-post"` |
| `originalLanguage` | `'en'` if written in English, `'de'` if in German | `'en'` |
| `title` | Post title in English AND German | — |
| `summary` | 2-3 sentence teaser in English AND German (plain text, no HTML) | — |
| `image` | Path to your image (upload via Lovable first) | `"/lovable-uploads/my-image.png"` |
| `date` | Date in format `"Month DD, YYYY"` | `"April 13, 2026"` |
| `author` | Author name | `"Patrick Müller"` |
| `content` | Full blog post in HTML, in English AND German (use backticks `` ` `` for multi-line) | — |

Also rename the export variable (e.g. `export const myNewPost`) to match your post.

### Step 3: Register your post

Open `src/data/blog/index.ts` and do two things:

**A) Add an import at the top:**
```typescript
import { myNewPost } from './my-new-post';
```

**B) Add it to the array:**
```typescript
export const blogPosts: BlogPost[] = [
  shouldYouAutomateThatProcess,
  makingEmployeesMoreEfficient,
  // ... existing posts ...
  myNewPost,  // ← add yours here
];
```

### Step 4: Done! 🎉

Your post now appears automatically on:
- The homepage (if it's one of the 3 most recent)
- The blog overview page (`/blog`)
- Its own page (`/en/blog/my-new-post` and `/de/blog/my-new-post`)

Translation disclaimers are handled automatically based on `originalLanguage`.

---

### Available HTML Tags for Content

```html
<p>Paragraphs</p>
<h2>Section headings</h2>
<h3>Subheadings</h3>
<strong>Bold</strong>
<em>Italic</em>
<ul><li>Bullet lists</li></ul>
<ol><li>Numbered lists</li></ol>
<a href="https://..." target="_blank">Links</a>
<blockquote><p>Quotes</p></blockquote>
```

### Image Upload

1. Upload your image through the Lovable interface
2. It lands in `/public/lovable-uploads/`
3. Reference it as `/lovable-uploads/your-filename.png`

### Adding a New Category

1. Use your new category name in the blog post's `category` field
2. Open `src/data/blog/index.ts`
3. Add a case to the `getCategoryColor` function with a Tailwind color class
