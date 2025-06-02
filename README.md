
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/72996f9d-6f32-4f9b-8b8a-6d3e67c74d82

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/72996f9d-6f32-4f9b-8b8a-6d3e67c74d82) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/72996f9d-6f32-4f9b-8b8a-6d3e67c74d82) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

---

## Blog Management Guide

### Blog System Overview

The blog system consists of:
- **Blog Preview Section**: Shows the 3 most recent posts on the homepage
- **Blog Overview Page** (`/blog`): Displays all blog posts in a grid layout
- **Dynamic Blog Post Pages** (`/blog/:id`): Individual reading pages for each blog post with full content

### Blog Navigation Structure

```
Homepage → Blog Preview (3 latest posts) → Individual Post Page
    ↓
Blog Overview Page (all posts) → Individual Post Page
```

### How to Manage Blog Content

### 1. Uploading Images for Blog Posts

**Via Lovable Interface:**
1. Open your project in Lovable
2. Upload images through the interface - they will be automatically placed in `/public/lovable-uploads/`
3. Reference uploaded images using the path: `/lovable-uploads/your-image-filename.png`

**Via Direct File Upload:**
1. Place images in the `/public/lovable-uploads/` directory
2. Reference them in your blog posts using the relative path: `/lovable-uploads/filename.png`

### 2. Adding New Blog Posts

Blog posts are currently managed in two main files that must be kept in sync:

**For Blog Preview Section (Homepage):**
1. Edit `src/components/BlogPreviewSection.tsx`
2. Locate the `blogPosts` array
3. Add new blog post objects with the following structure:

**For Blog Overview and Individual Pages:**
1. Edit `src/pages/Blog.tsx`
2. Locate the `blogPosts` array
3. Add new blog post objects with the following structure:

```javascript
{
  id: 7, // Must be unique
  category: "AI STRATEGY", // See categories below
  title: "Your Blog Post Title",
  summary: "A brief description of your blog post content...",
  image: "/lovable-uploads/your-image.png",
  date: "April 19, 2024",
  author: "Patrick Müller",
  content: `
    <p>Your full blog post content goes here.</p>
    <p>You can use HTML tags for formatting:</p>
    <ul>
      <li>Bullet points</li>
      <li>Bold text with <strong>strong tags</strong></li>
      <li>Links with <a href="#">anchor tags</a></li>
    </ul>
    <h2>Section Headers</h2>
    <p>More content...</p>
  `
}
```

**Important**: Make sure to add the same blog post to both files with identical `id`, `category`, `title`, `summary`, `image`, `date`, and `author` fields. Only the `content` field is used in the individual blog post page.

### 3. Blog Post Content Guidelines

**Content Field**: 
- Use HTML markup for rich formatting
- Supported tags: `<p>`, `<h2>`, `<h3>`, `<strong>`, `<em>`, `<ul>`, `<ol>`, `<li>`, `<a>`, `<blockquote>`
- Keep paragraphs well-structured with `<p>` tags
- Use heading tags (`<h2>`, `<h3>`) for section breaks

**Summary Field**:
- Keep concise (2-3 sentences)
- Use as a preview/teaser for the full content
- This appears on both homepage preview and blog overview

### 4. Blog Categories and Styling

Available categories with their color schemes:
- **"AI STRATEGY"** - Blue theme (`text-brand-blue`)
- **"PROCESS AUTOMATION"** - Green theme (`text-brand-green`)  
- **"AI EDUCATION"** - Purple theme (`text-purple-400`)
- **"AUTOMATION"** - Cyan theme (`text-cyan-400`)

To add new categories:
1. Add the category name to blog post objects
2. Update the `getCategoryColor` function in both `BlogPreviewSection.tsx` and `Blog.tsx`
3. Choose an appropriate color class from the Tailwind palette

### 5. Blog URL Structure

- Homepage: `/` (shows 3 latest posts in preview section)
- Blog overview: `/blog` (shows all posts)
- Individual posts: `/blog/:id` (e.g., `/blog/1`, `/blog/2`)

### 6. Navigation Features

- **Back to Home**: Available on blog overview page
- **Back to Blog**: Available on individual blog post pages
- **Read More**: Links from preview cards to full posts
- **View All Articles**: Link from homepage preview to blog overview

### 7. Responsive Design

The blog system is fully responsive:
- **Desktop**: 3-column grid on overview, full-width content on individual posts
- **Tablet**: 2-column grid on overview
- **Mobile**: 1-column layout throughout

### 8. Best Practices

**Content Management:**
- Always update both `BlogPreviewSection.tsx` and `Blog.tsx` when adding new posts
- Use consistent ID numbering (increment from highest existing ID)
- Keep image files optimized (under 500KB recommended)
- Use descriptive filenames for images

**Writing Guidelines:**
- Write engaging titles (keep under 60 characters for best display)
- Create compelling summaries that encourage clicks
- Structure content with clear headings and paragraphs
- Include relevant links and formatting in content

**Technical Considerations:**
- Ensure all image paths are correct and files exist
- Test blog posts on different screen sizes
- Verify all links work correctly
- Keep HTML content properly formatted

### 9. Future Enhancements

For a more advanced blog system, consider:
- Content Management System (CMS) integration
- Markdown support for easier content creation
- Blog post search and filtering functionality
- Comments system
- Social sharing buttons
- SEO optimization with meta tags
- Blog post scheduling
- Author profiles and multiple authors

---

Need help with any of these processes? Contact the development team or refer to the Lovable documentation for additional guidance.
