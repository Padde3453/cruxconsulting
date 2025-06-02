
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

The blog system uses a **centralized data structure** that automatically keeps all blog components in sync. The system consists of:

- **Blog Preview Section**: Automatically shows the 3 most recent posts on the homepage
- **Blog Overview Page** (`/blog`): Displays all blog posts in a grid layout
- **Dynamic Blog Post Pages** (`/blog/:id`): Individual reading pages for each blog post with full HTML content rendering

### Centralized Blog Data Management

All blog data is managed in **ONE LOCATION**: `src/data/blogPosts.ts`

**Key Benefits:**
- ✅ Add a blog post once, it appears everywhere automatically
- ✅ Homepage preview automatically shows the 3 most recent posts by date
- ✅ All pages stay in sync automatically
- ✅ Full HTML content rendering on individual blog post pages
- ✅ No duplication or manual updates needed

### Blog Navigation Structure

```
Homepage → Blog Preview (3 latest posts) → Individual Post Page (Full HTML Content)
    ↓
Blog Overview Page (all posts) → Individual Post Page (Full HTML Content)
```

### How to Add New Blog Posts

**Single Source Management:**
1. Edit `src/data/blogPosts.ts`
2. Add new blog post objects to the `blogPosts` array
3. That's it! The entire website updates automatically

### Blog Post Format

Add new blog posts using this exact structure in `src/data/blogPosts.ts`:

```typescript
{
  id: 7, // Must be unique - increment from highest existing ID
  category: "AI STRATEGY", // Choose from available categories (see below)
  title: "Your Blog Post Title Here",
  summary: "A compelling 2-3 sentence summary that appears on preview cards and overview page...",
  image: "/lovable-uploads/your-image-filename.png", // Path to uploaded image
  date: "June 15, 2024", // Format: "Month DD, YYYY"
  author: "Patrick Müller", // Author name
  content: `
    <p>Your full blog post content goes here. Use HTML formatting for rich content.</p>
    
    <h2>Section Heading</h2>
    <p>More content with <strong>bold text</strong> and <em>italic text</em>.</p>
    
    <ul>
      <li>Bullet point one</li>
      <li>Bullet point two</li>
      <li>Bullet point three</li>
    </ul>
    
    <p>You can include <a href="https://example.com" target="_blank">external links</a> and other HTML elements.</p>
    
    <blockquote>
      <p>Important quotes or callouts can be formatted like this.</p>
    </blockquote>
    
    <h3>Subsection</h3>
    <p>Continue with more detailed content...</p>
  `
}
```

### Field Requirements and Guidelines

**Required Fields:**
- `id`: Unique number (increment from highest existing)
- `category`: Must match available categories
- `title`: Descriptive title (keep under 60 characters for best display)
- `summary`: 2-3 sentences for preview cards (plain text only)
- `image`: Path to image file in `/lovable-uploads/`
- `date`: Human-readable date format
- `author`: Author name
- `content`: Full HTML content for the blog post (use template literals with backticks)

**Content Field Formatting:**
- **IMPORTANT**: Use template literals (backticks `) instead of quotes for the content field
- Use HTML markup for rich formatting on individual blog post pages
- Supported tags: `<p>`, `<br>`, `<h2>`, `<h3>`, `<strong>`, `<em>`, `<ul>`, `<ol>`, `<li>`, `<a>`, `<blockquote>`
- Structure content with clear paragraphs using `<p>` tags
- Use heading tags (`<h2>`, `<h3>`) for section breaks
- Include `target="_blank"` for external links
- Keep content well-structured and readable
- The HTML content will be automatically rendered on individual blog post pages

**Template Literal Example for Content:**
```typescript
content: `
  <h2>Your Main Heading</h2>
  <p>Your paragraph content with <strong>bold text</strong> and <em>italic text</em>.</p>
  
  <h3>Subheading</h3>
  <ul>
    <li>List item one</li>
    <li>List item two</li>
  </ul>
  
  <p>More content with <a href="https://example.com" target="_blank">external links</a>.</p>
`
```

### Image Management

**Uploading Images:**

**Via Lovable Interface:**
1. Open your project in Lovable
2. Upload images through the interface
3. Images are automatically placed in `/public/lovable-uploads/`
4. Reference using: `/lovable-uploads/filename.png`

**Via Direct Upload:**
1. Place images in `/public/lovable-uploads/` directory
2. Reference using: `/lovable-uploads/filename.png`
3. Keep files optimized (under 500KB recommended)

### Available Categories and Colors

Categories with their automatic color themes:
- **"AI STRATEGY"** - Blue theme (`text-brand-blue`)
- **"PROCESS AUTOMATION"** - Green theme (`text-brand-green`)  
- **"AI EDUCATION"** - Purple theme (`text-purple-400`)
- **"AUTOMATION"** - Cyan theme (`text-cyan-400`)

**Adding New Categories:**
1. Add category name to your blog post
2. Update `getCategoryColor` function in `src/data/blogPosts.ts`
3. Choose appropriate Tailwind color class

### Automatic Features

**Most Recent Posts:**
- Homepage automatically shows 3 most recent posts by date
- Posts are sorted automatically using the `getMostRecentPosts` function
- No manual selection needed

**HTML Content Rendering:**
- Individual blog post pages automatically render HTML content
- Rich formatting including headings, links, lists, and emphasis
- Styled with proper typography and spacing

**URL Structure:**
- Homepage: `/` (shows 3 latest posts in preview)
- Blog overview: `/blog` (shows all posts)
- Individual posts: `/blog/:id` (e.g., `/blog/1`, `/blog/2`)

**Navigation Features:**
- Back to Home link on blog overview page
- Back to Blog links on individual post pages
- Automatic linking between all blog components

### Responsive Design

The system is fully responsive across all devices:
- **Desktop**: 3-column grid, full-width content
- **Tablet**: 2-column grid
- **Mobile**: 1-column layout

### Best Practices

**Content Creation:**
- Write engaging titles under 60 characters
- Create compelling summaries that encourage clicks (plain text only)
- Structure HTML content with clear headings and paragraphs
- Use proper HTML formatting for readability
- Include relevant links and formatting
- Use template literals (backticks) for the content field to avoid syntax errors

**Technical Guidelines:**
- Always increment ID numbers from the highest existing ID
- Ensure image paths are correct and files exist
- Test content on different screen sizes
- Use consistent date formatting
- Keep HTML content properly structured
- Always use template literals for content with HTML

**Writing Tips:**
- Start with a strong opening paragraph
- Use subheadings to break up long content
- Include actionable insights and practical advice
- End with clear takeaways or next steps
- Proofread for grammar and clarity

### Example Complete Blog Post

```typescript
{
  id: 8,
  category: "AI STRATEGY",
  title: "Implementing AI in Small Business Operations",
  summary: "Learn practical steps to integrate AI tools into your small business operations without overwhelming your team or budget.",
  image: "/lovable-uploads/ai-small-business.png",
  date: "June 20, 2024",
  author: "Patrick Müller",
  content: `
    <p>Small businesses today have unprecedented access to AI tools that were once reserved for large corporations. The key is knowing where to start and how to implement these tools effectively.</p>
    
    <h2>Start Small, Think Big</h2>
    <p>The most successful AI implementations begin with <strong>small, focused projects</strong> that address specific pain points. Rather than trying to automate everything at once, identify one or two processes that could benefit immediately from AI assistance.</p>
    
    <h3>Best Areas to Begin</h3>
    <ul>
      <li>Customer service with chatbots</li>
      <li>Email marketing automation</li>
      <li>Basic data analysis and reporting</li>
      <li>Social media scheduling</li>
    </ul>
    
    <h2>Budget-Friendly Implementation</h2>
    <p>You don't need a massive budget to get started. Many AI tools offer <em>freemium models</em> or affordable monthly subscriptions that scale with your business needs.</p>
    
    <blockquote>
      <p>"The best time to plant a tree was 20 years ago. The second-best time is now." - This applies perfectly to AI adoption in small businesses.</p>
    </blockquote>
    
    <p>For more resources on AI implementation, visit <a href="https://example.com" target="_blank">our comprehensive guide</a>.</p>
  `
}
```

### Troubleshooting Common Issues

**Syntax Errors in Content:**
- Always use template literals (backticks `) for the content field
- Avoid using double quotes within the content HTML
- If you need quotes in your HTML, use single quotes or escape them properly

**HTML Not Rendering:**
- The system automatically renders HTML on individual blog post pages
- Summary fields display as plain text (no HTML rendering)
- Only the content field supports HTML rendering

---

*The blog system is designed for simplicity and efficiency. Add your content once with proper HTML formatting, and it appears everywhere automatically with correct rendering!*
