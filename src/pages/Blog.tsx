
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, ArrowLeft, Linkedin, Instagram } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, getCategoryColor, getMostRecentPosts } from "@/data/blogPosts";
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { lang } = useParams<{ lang?: string }>();

  // Apply language from URL if present
  useEffect(() => {
    if (lang && (lang === 'en' || lang === 'de')) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    }
  }, [lang, i18n]);

  const currentLang = (i18n.language.startsWith('de') ? 'de' : 'en') as 'en' | 'de';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Sort posts by date (newest first) using the helper function
  const sortedPosts = getMostRecentPosts(blogPosts, blogPosts.length);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('blog.pageTitle')}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {t('blog.pageSubtitle')}
          </p>
          
          {/* Back to Home Link */}
          <Link to="/" className="inline-flex items-center text-brand-blue hover:text-brand-green transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            {t('blog.backToHome')}
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map(post => 
              <Link key={post.id} to={`/${currentLang}/blog/${post.slug}`} className="block">
                <Card className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border-gray-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="aspect-video bg-gray-700 overflow-hidden">
                    <img src={post.image} alt={post.title[currentLang]} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="p-6">
                    <div className={`text-sm font-semibold mb-3 ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {post.title[currentLang]}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {post.summary[currentLang]}
                    </p>
                    
                    <div className="text-xs text-gray-400">
                      {post.date} • {currentLang === 'de' ? 'Von' : 'By'} {post.author}
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
