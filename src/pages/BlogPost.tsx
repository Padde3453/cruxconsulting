
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, getCategoryColor, type BlogPost as BlogPostType } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [blogPost, setBlogPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    if (id) {
      const post = blogPosts.find(post => post.id === parseInt(id));
      setBlogPost(post || null);
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

          {/* Content - Now properly renders HTML */}
          <div 
            className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg prose-strong:text-white prose-em:text-gray-200 prose-a:text-brand-blue hover:prose-a:text-brand-green prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

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
