
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [blogPost, setBlogPost] = useState<any>(null);

  // This should match the blog posts from the Blog page and BlogPreviewSection
  const blogPosts = [{
    id: 1,
    category: "AI STRATEGY",
    title: "How to Develop an Effective AI Strategy",
    summary: "Key steps to crafting a successful AI strategy that aligns with business goals.",
    content: "Developing an effective AI strategy requires careful planning and alignment with your business objectives. Start by identifying specific pain points in your operations where AI can make a meaningful impact. Consider your current data infrastructure, team capabilities, and budget constraints. A successful AI strategy begins with small, measurable projects that can demonstrate value quickly. Focus on areas where you have quality data and clear success metrics. Remember that AI is not a one-size-fits-all solution - it should complement your existing processes and enhance your team's capabilities rather than replace them entirely.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "April 19, 2024",
    author: "Patrick Müller"
  }, {
    id: 2,
    category: "PROCESS AUTOMATION",
    title: "10 Tasks Your Business Should Automate",
    summary: "Discover ten routine tasks that can be automated to improve efficiency.",
    content: "Automation can transform your business operations by eliminating repetitive tasks and reducing human error. Here are ten key areas to consider: 1) Data entry and validation, 2) Invoice processing, 3) Customer service responses, 4) Inventory management, 5) Social media posting, 6) Email marketing campaigns, 7) Report generation, 8) Appointment scheduling, 9) Lead qualification, and 10) File organization. Start with the tasks that consume the most time and have clear, repeatable processes. Remember that successful automation requires proper planning, testing, and gradual implementation to ensure smooth transitions.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "April 10, 2024",
    author: "Patrick Müller"
  }, {
    id: 3,
    category: "AI EDUCATION",
    title: "Getting Started with AI: A Beginner's Guide",
    summary: "An introductory guide to understanding and implementing artificial intelligence.",
    content: "Artificial Intelligence might seem overwhelming at first, but understanding the basics can help you identify opportunities in your business. AI encompasses machine learning, natural language processing, computer vision, and automation. Start by learning about different types of AI applications relevant to your industry. Focus on understanding how AI can solve specific problems rather than getting caught up in technical details. Consider attending workshops, reading industry publications, and connecting with AI professionals. Most importantly, start small with pilot projects that allow you to learn and iterate without major risk.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "April 2, 2024",
    author: "Patrick Müller"
  }, {
    id: 4,
    category: "AUTOMATION",
    title: "The Impact of AI on Small Businesses",
    summary: "Discover the impact of AI on small businesses and growth opportunities.",
    content: "Small businesses are uniquely positioned to benefit from AI implementation due to their agility and ability to quickly adapt new technologies. AI can level the playing field by providing access to sophisticated tools previously available only to large corporations. From chatbots that handle customer inquiries 24/7 to predictive analytics that optimize inventory, AI enables small businesses to operate more efficiently and compete effectively. The key is to start with focused applications that address specific challenges and gradually expand as you gain experience and see results.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "April 19, 2024",
    author: "Patrick Müller"
  }, {
    id: 5,
    category: "AUTOMATION",
    title: "Best Practices for Workflow Automation",
    summary: "An ultimate guide to addressing and optimizing workflow processes.",
    content: "Effective workflow automation requires a systematic approach to analyzing and optimizing your business processes. Begin by mapping out your current workflows and identifying bottlenecks, redundancies, and manual tasks that consume significant time. Document each step clearly and gather input from team members who perform these tasks daily. When implementing automation, start with simple, low-risk processes and gradually move to more complex workflows. Ensure proper testing, provide adequate training, and maintain fallback procedures. Regular monitoring and optimization are essential for long-term success.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "April 10, 2024",
    author: "Patrick Müller"
  }, {
    id: 6,
    category: "AI STRATEGY",
    title: "5 Common Misconceptions About AI",
    summary: "Expert insights on common AI misconceptions and how to address them.",
    content: "There are many misconceptions about AI that can prevent businesses from leveraging its potential. Misconception 1: AI will replace all human jobs - Reality: AI augments human capabilities rather than replacing them entirely. Misconception 2: AI is only for tech companies - Reality: AI applications exist across all industries. Misconception 3: AI requires massive data sets - Reality: Many AI solutions work effectively with smaller, quality datasets. Misconception 4: AI implementation is too expensive - Reality: Cloud-based AI services have made implementation more accessible. Misconception 5: AI is too complex for small businesses - Reality: Many user-friendly AI tools require minimal technical expertise.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "April 2, 2024",
    author: "Patrick Müller"
  }];

  const getCategoryColor = (category: string) => {
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

  useEffect(() => {
    if (id) {
      const post = blogPosts.find(post => post.id === parseInt(id));
      setBlogPost(post);
    }
  }, [id]);

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-6 py-3 flex items-center space-x-2 mx-auto">
              <ArrowLeft size={16} />
              <span>Back to Blog</span>
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Blog Post Content */}
      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back to Blog Link */}
          <Link to="/blog" className="inline-flex items-center text-brand-blue hover:text-brand-green transition-colors mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>

          {/* Category */}
          <div className={`text-sm font-semibold mb-4 ${getCategoryColor(blogPost.category)}`}>
            {blogPost.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {blogPost.title}
          </h1>

          {/* Meta Information */}
          <div className="text-gray-400 mb-8 flex items-center space-x-4">
            <span>{blogPost.date}</span>
            <span>•</span>
            <span>By {blogPost.author}</span>
          </div>

          {/* Featured Image */}
          <div className="aspect-video bg-gray-700 overflow-hidden rounded-lg mb-8">
            <img 
              src={blogPost.image} 
              alt={blogPost.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Summary */}
          <div className="text-xl text-gray-300 mb-8 p-6 bg-gray-800/50 rounded-lg border-l-4 border-brand-blue">
            {blogPost.summary}
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              {blogPost.content}
            </p>
          </div>

          {/* Back to Blog Button */}
          <div className="mt-12 text-center">
            <Link to="/blog">
              <Button className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-3 flex items-center space-x-2 mx-auto">
                <ArrowLeft size={16} />
                <span>Back to All Articles</span>
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
