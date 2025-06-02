export interface BlogPost {
  id: number;
  category: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "AI STRATEGY",
    title: "How to Develop an Effective AI Strategy",
    summary: "Key steps to crafting a successful AI strategy that aligns with business goals.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "March 6, 2025",
    author: "Patrick Reverchon",
    content: "Developing an effective AI strategy requires careful planning and alignment with your business objectives. Start by identifying specific pain points in your operations where AI can make a meaningful impact. Consider your current data infrastructure, team capabilities, and budget constraints. A successful AI strategy begins with small, measurable projects that can demonstrate value quickly. Focus on areas where you have quality data and clear success metrics. Remember that AI is not a one-size-fits-all solution - it should complement your existing processes and enhance your team's capabilities rather than replace them entirely."
  },
  {
    id: 2,
    category: "PROCESS AUTOMATION",
    title: "10 Tasks Your Business Should Automate",
    summary: "Discover ten routine tasks that can be automated to improve efficiency.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "March 29, 2025",
    author: "Patrick Reverchon",
    content: "Automation can transform your business operations by eliminating repetitive tasks and reducing human error. Here are ten key areas to consider: 1) Data entry and validation, 2) Invoice processing, 3) Customer service responses, 4) Inventory management, 5) Social media posting, 6) Email marketing campaigns, 7) Report generation, 8) Appointment scheduling, 9) Lead qualification, and 10) File organization. Start with the tasks that consume the most time and have clear, repeatable processes. Remember that successful automation requires proper planning, testing, and gradual implementation to ensure smooth transitions."
  },
  {
    id: 3,
    category: "AI EDUCATION",
    title: "Getting Started with AI: A Beginner's Guide",
    summary: "An introductory guide to understanding and implementing artificial intelligence.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "April 15, 2025",
    author: "Patrick Reverchon",
    content: "Artificial Intelligence might seem overwhelming at first, but understanding the basics can help you identify opportunities in your business. AI encompasses machine learning, natural language processing, computer vision, and automation. Start by learning about different types of AI applications relevant to your industry. Focus on understanding how AI can solve specific problems rather than getting caught up in technical details. Consider attending workshops, reading industry publications, and connecting with AI professionals. Most importantly, start small with pilot projects that allow you to learn and iterate without major risk."
  },
  {
    id: 4,
    category: "AUTOMATION",
    title: "5 Business Tasks SMEs Should Automate Now",
    summary: "Running a business today means juggling dozens of tasks every week — from sending invoices and replying to emails, to updating spreadsheets and booking meetings. If your team is spending hours each week on repetitive tasks, you're not just wasting time — you're leaving money on the table.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "May 30, 2025",
    author: "Patrick Reverchon",
    content: `<h2>Stop Wasting Time: 5 Business Tasks SMEs Should Automate Now</h2>


<p>The good news? <strong>Smart automation isn't just for big tech companies anymore.</strong> Thanks to easy-to-use tools and custom solutions, small and mid-sized companies can now automate key parts of their operations without hiring a developer or changing everything overnight.</p>

<p>Here are five common tasks that <em>SMEs like yours</em> can start automating right away — and how it can help you save time, reduce errors, and focus on what really matters: your clients.</p>

<h3>1. Client Onboarding</h3>
<p>Whether you're a law firm, tax consultant, or logistics provider — onboarding new clients often means repeating the same steps: sending welcome emails, requesting documents, filling out forms. These steps can all be <strong>automated into a smooth, digital workflow</strong>.</p>
<p><strong>Result:</strong> No more chasing clients for paperwork. Everything gets done faster, and your team has more time to build relationships — not fill out PDFs.</p>

<h3>2. Invoice Creation and Follow-Up</h3>
<p>Still creating invoices manually and chasing late payments? Automate it. Connect your CRM or spreadsheet to an invoice tool that sends bills automatically, sets due dates, and triggers polite reminders when payments are overdue.</p>
<p><strong>Result:</strong> You get paid faster and reduce stress — without anyone on your team sending "Just checking in" emails again.</p>

<h3>3. Scheduling and Calendar Management</h3>
<p>How many emails go back and forth before a client meeting is booked? Automating your scheduling with tools like <a href="https://calendly.com/" target="_blank">Calendly</a> or Microsoft Bookings lets clients choose a slot that works — with no email ping-pong.</p>
<p><strong>Result:</strong> You save time, reduce no-shows, and give your clients a better experience from the very first meeting.</p>

<h3>4. Reporting and Dashboards</h3>
<p>If you're pulling data from Excel or typing up weekly reports manually — stop. Reporting tools can pull data from your systems automatically and update dashboards in real time. Whether it's sales performance, warehouse stock, or project status — it's all visible at a glance.</p>
<p><strong>Result:</strong> Faster decisions, less manual work, and a team that always knows what's going on.</p>

<h3>5. Email Sorting and Document Management</h3>
<p>Legal firms, accountants, and even farmers often deal with dozens (or hundreds) of emails and attachments. AI tools can now <strong>automatically sort emails, extract documents, rename them properly, and store them in the right folder</strong> — all without lifting a finger.</p>
<p><strong>Result:</strong> A clean inbox, organized files, and no more time wasted hunting for that one attachment from last week.</p>

<h2>Why This Matters for SMEs</h2>
<p>You don't need a 10-person IT department to automate. You just need the right partner who understands your business and your goals.</p>

<p>At <strong>Crux Consulting</strong>, we specialize in helping small and mid-sized businesses unlock time, save money, and <strong>scale smarter through automation and AI</strong>. Our solutions are custom-built for companies between 30–200 employees — not for tech giants.</p>

<p><a href="/contact" target="_blank"><strong>Ready to stop wasting time and start automating? Let's talk about your first quick win.</strong></a></p>`
  }
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
    default:
      return "text-gray-400";
  }
};
