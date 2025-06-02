
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPreviewSection = () => {
  // This should match the blog posts from the Blog page
  const blogPosts = [{
    id: 1,
    category: "AI STRATEGY",
    title: "How to Develop an Effective AI Strategy",
    summary: "Key steps to crafting a successful AI strategy that aligns with business goals.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "April 19, 2024",
    author: "Patrick Müller"
  }, {
    id: 2,
    category: "PROCESS AUTOMATION",
    title: "10 Tasks Your Business Should Automate",
    summary: "Discover ten routine tasks that can be automated to improve efficiency.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "April 10, 2024",
    author: "Patrick Müller"
  }, {
    id: 3,
    category: "AI EDUCATION",
    title: "Getting Started with AI: A Beginner's Guide",
    summary: "An introductory guide to understanding and implementing artificial intelligence.",
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

  // Get the 3 most recent posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent md:text-5xl">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Stay updated with the latest trends in AI, automation, and business strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {recentPosts.map(post => 
            <Link key={post.id} to={`/blog/${post.id}`} className="block">
              <Card className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border-gray-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-gray-700 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="p-4">
                  <div className={`text-xs font-semibold mb-2 ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                  
                  <div className="text-xs text-gray-400">
                    {post.date} • {post.author}
                  </div>
                </div>
              </Card>
            </Link>
          )}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-3 flex items-center space-x-2 mx-auto">
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
