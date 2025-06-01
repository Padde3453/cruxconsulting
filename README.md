
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

### How to Manage Blog Content

The blog functionality is handled through the `BlogPreviewSection.tsx` component and the main `Blog.tsx` page. Here's how to manage your blog content:

### 1. Uploading Images for Blog Posts

**Via Lovable Interface:**
1. Open your project in Lovable
2. Upload images through the interface - they will be automatically placed in `/public/lovable-uploads/`
3. Reference uploaded images using the path: `/lovable-uploads/your-image-filename.png`

**Via Direct File Upload:**
1. Place images in the `/public/lovable-uploads/` directory
2. Reference them in your blog posts using the relative path: `/lovable-uploads/filename.png`

### 2. Adding New Blog Posts

Blog posts are currently hardcoded in the components. To add new posts:

**For Blog Preview Section (Homepage):**
1. Edit `src/components/BlogPreviewSection.tsx`
2. Locate the `blogPosts` array
3. Add new blog post objects with the following structure:
```javascript
{
  title: "Your Blog Post Title",
  excerpt: "A brief description of your blog post...",
  date: "2024-01-15",
  readTime: "5 min read",
  image: "/lovable-uploads/your-image.png",
  category: "AI Solutions" // or other categories
}
```

**For Full Blog Page:**
1. Edit `src/pages/Blog.tsx`
2. Locate the `blogPosts` array
3. Add new blog post objects with the same structure as above

### 3. Modifying Blog Post Content

To edit existing blog posts:
1. Find the blog post in the respective component (`BlogPreviewSection.tsx` or `Blog.tsx`)
2. Modify the `title`, `excerpt`, `date`, `readTime`, `image`, or `category` fields
3. Save the file - changes will be reflected immediately

### 4. Changing Blog Headlines and Sections

**Blog Preview Section (Homepage):**
- Edit `src/components/BlogPreviewSection.tsx`
- Modify the section title in the `<h2>` tag
- Update the subtitle text as needed

**Main Blog Page:**
- Edit `src/pages/Blog.tsx`
- Modify the main heading and description text
- Update page metadata and titles

### 5. Blog Categories and Filtering

Blog posts can be categorized. Current categories include:
- "AI Solutions"
- "Business Growth" 
- "Automation"
- "Technology"

To add new categories or modify existing ones:
1. Add new category names to blog post objects
2. Ensure consistent naming across all posts
3. The blog page will automatically handle category display

### 6. Best Practices

**Image Management:**
- Use descriptive filenames for uploaded images
- Optimize images for web (recommended: under 500KB)
- Use common formats: .jpg, .png, .webp

**Content Guidelines:**
- Keep excerpts concise (2-3 sentences)
- Use consistent date format: "YYYY-MM-DD"
- Provide realistic read times
- Choose relevant, descriptive titles

**File Organization:**
- Keep blog-related components in `src/components/` and `src/pages/`
- Store all blog images in `/public/lovable-uploads/`
- Maintain consistent naming conventions

### 7. Future Enhancements

For a more dynamic blog system, consider:
- Implementing a content management system (CMS)
- Adding markdown support for rich content
- Creating individual blog post pages with full content
- Adding blog post search and pagination functionality

---

Need help with any of these processes? Contact the development team or refer to the Lovable documentation for additional guidance.
