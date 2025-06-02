
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, ArrowLeft, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, getCategoryColor } from "@/data/blogPosts";

const Blog = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
