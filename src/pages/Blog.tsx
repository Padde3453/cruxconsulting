
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, ArrowLeft, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
  }, {
    id: 4,
    category: "AUTOMATION",
    title: "The Impact of AI on Small Businesses",
    summary: "Discover the impact of AI on small businesses and growth opportunities.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "April 19, 2024",
    author: "Patrick Müller"
  }, {
    id: 5,
    category: "AUTOMATION",
    title: "Best Practices for Workflow Automation",
    summary: "An ultimate guide to addressing and optimizing workflow processes.",
    image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png",
    date: "April 10, 2024",
    author: "Patrick Müller"
  }, {
    id: 6,
    category: "AI STRATEGY",
    title: "5 Common Misconceptions About AI",
    summary: "Expert insights on common AI misconceptions and how to address them.",
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Insights on AI, automation, and business strategy
          </p>
          
          {/* Back to Home Link */}
          <Link to="/" className="inline-flex items-center text-brand-blue hover:text-brand-green transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => 
              <Link key={post.id} to={`/blog/${post.id}`} className="block">
                <Card className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border-gray-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="aspect-video bg-gray-700 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="p-6">
                    <div className={`text-sm font-semibold mb-3 ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
