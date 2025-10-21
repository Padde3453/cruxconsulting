
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, getCategoryColor, type BlogPost as BlogPostType } from "@/data/blogPosts";
import { useTranslation } from 'react-i18next';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = (i18n.language.startsWith('de') ? 'de' : 'en') as 'en' | 'de';
  const [blogPost, setBlogPost] = useState<BlogPostType | null>(null);

  const handleBooking = () => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    if (slug) {
      const post = blogPosts.find(post => post.slug === slug);
      setBlogPost(post || null);
    }
  }, [slug]);

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
            {currentLang === 'de' ? 'Zurück zu den Blogs' : 'Back to Blog'}
          </Link>

          {/* Category */}
          <div className={`text-sm font-semibold mb-4 ${getCategoryColor(blogPost.category)}`}>
            {blogPost.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {blogPost.title[currentLang]}
          </h1>

          {/* Meta Information */}
          <div className="text-gray-400 mb-8 flex items-center space-x-4">
            <span>{blogPost.date}</span>
            <span>•</span>
            <span>{currentLang === 'de' ? 'Von' : 'By'} {blogPost.author}</span>
          </div>

          {/* Featured Image */}
          <div className="aspect-video bg-gray-700 overflow-hidden rounded-lg mb-8">
            <img 
              src={blogPost.image} 
              alt={blogPost.title[currentLang]} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Translation Notice */}
          {blogPost.originalLanguage === 'en' && currentLang === 'de' && (
            <div className="text-sm text-gray-400 mb-4 italic">
              Dies ist eine automatische Übersetzung ins Deutsche, der Artikel wurde im Original in Englisch geschrieben
            </div>
          )}
          {blogPost.originalLanguage === 'de' && currentLang === 'en' && (
            <div className="text-sm text-gray-400 mb-4 italic">
              This is an automatic translation into English, the article was originally written in German
            </div>
          )}

          {/* Summary */}
          <div className="text-xl text-gray-300 mb-8 p-6 bg-gray-800/50 rounded-lg border-l-4 border-brand-blue">
            {blogPost.summary[currentLang]}
          </div>

          {/* Content - Now properly renders HTML */}
          <div 
            className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg prose-strong:text-white prose-em:text-gray-200 prose-a:text-brand-blue hover:prose-a:text-brand-green prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: blogPost.content[currentLang] }}
          />

          {/* Contact Us Button */}
          <div className="mt-12 text-center">
            <Button 
              onClick={handleBooking}
              className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-3 flex items-center space-x-2 mx-auto"
            >
              <span>{currentLang === 'de' ? 'Kontaktieren Sie uns' : 'Contact Us'}</span>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
