
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
    summary: "Running a business today means juggling dozens of tasks every week — from sending invoices and replying to emails, to updating spreadsheets and booking meetings. If your team is spending hours each week on repetitive tasks, you’re not just wasting time — you’re leaving money on the table.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "May 30, 2025",
    author: "Patrick Reverchon",
    content: "Small businesses are uniquely positioned to benefit from AI implementation due to their agility and ability to quickly adapt new technologies. AI can level the playing field by providing access to sophisticated tools previously available only to large corporations. From chatbots that handle customer inquiries 24/7 to predictive analytics that optimize inventory, AI enables small businesses to operate more efficiently and compete effectively. The key is to start with focused applications that address specific challenges and gradually expand as you gain experience and see results."
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
