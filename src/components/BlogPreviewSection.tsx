
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { blogPosts, getMostRecentPosts, getCategoryColor } from "@/data/blogPosts";
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BlogPreviewSection = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'de';
  
  // Get the 3 most recent posts automatically
  const recentPosts = getMostRecentPosts(blogPosts, 3);

  const handleViewAllArticles = () => {
    navigate('/blog');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent md:text-5xl">
            {t('blog.title')}
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {recentPosts.map((post, index) => {
            const cardAnimation = useScrollAnimation();
            
            return (
              <div
                key={post.id}
                ref={cardAnimation.elementRef}
                className={`transition-all duration-700 ${
                  cardAnimation.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link to={`/blog/${post.id}`} className="block h-full">
                  <Card className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border-gray-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="aspect-video bg-gray-700 overflow-hidden flex-shrink-0">
                  <img src={post.image} alt={post.title[currentLang]} className="w-full h-full object-cover" />
                </div>
                
                <div className="p-4 flex flex-col flex-grow">
                  <div className={`text-xs font-semibold mb-2 ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight line-clamp-2">
                    {post.title[currentLang]}
                  </h3>
                  
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed line-clamp-3 flex-grow">
                    {post.summary[currentLang]}
                  </p>
                  
                    <div className="text-xs text-gray-400 mt-auto">
                      {post.date} • {post.author}
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleViewAllArticles}
            className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-3 flex items-center space-x-2 mx-auto"
          >
            <span>{t('blog.viewAll')}</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
