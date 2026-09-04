
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  blogPosts,
  getCategoryColor,
  formatPostDate,
  getImageAlt,
  getMetaDescription,
  type BlogPost as BlogPostType,
} from "@/data/blogPosts";
import { useTranslation } from 'react-i18next';

const BlogPost = () => {
  const { slug, lang } = useParams<{ slug: string; lang?: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState<BlogPostType | null>(null);

  // Apply language from URL if present
  useEffect(() => {
    if (lang && (lang === 'en' || lang === 'de')) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    }
  }, [lang, i18n]);

  const currentLang = (i18n.language.startsWith('de') ? 'de' : 'en') as 'en' | 'de';

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
        <Helmet>
          <title>Blog Post Not Found | Crux Consulting</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button variant="gradient" enableMouseGradient className="rounded-full px-6 py-3 flex items-center space-x-2 mx-auto">
              <ArrowLeft size={16} />
              <span>Back to Blog</span>
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const currentUrl = `https://crux-consulting.ai/${currentLang}/blog/${blogPost.slug}`;
  const alternateUrl = currentLang === 'en' ? `https://crux-consulting.ai/de/blog/${blogPost.slug}` : `https://crux-consulting.ai/en/blog/${blogPost.slug}`;
  const imageUrl = `https://crux-consulting.ai${blogPost.image}`;
  const displayDate = formatPostDate(blogPost, currentLang);
  const imageAlt = getImageAlt(blogPost, currentLang);
  const metaDescription = getMetaDescription(blogPost, currentLang);
  // ISO date for machine-readable metadata (older posts fall back to their display date)
  const isoDate = blogPost.publishedAt ?? blogPost.date;
  const showTranslationNotice =
    !blogPost.hideTranslationNotice && blogPost.originalLanguage !== currentLang;
  
  // Create structured data for Article
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogPost.title[currentLang],
    "description": metaDescription,
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "caption": imageAlt
    },
    "datePublished": isoDate,
    "dateModified": isoDate,
    "author": {
      "@type": "Person",
      "name": blogPost.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Crux Consulting",
      "logo": {
        "@type": "ImageObject",
        "url": "https://crux-consulting.ai/LogoIconOnly.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "url": currentUrl,
    "inLanguage": currentLang,
    "articleSection": blogPost.category,
    ...(blogPost.keywords?.length ? { "keywords": blogPost.keywords.join(", ") } : {})
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        {/* Primary Meta Tags */}
        <html lang={currentLang} />
        <title>{blogPost.title[currentLang]} | Crux Consulting</title>
        <meta name="title" content={`${blogPost.title[currentLang]} | Crux Consulting`} />
        <meta name="description" content={metaDescription} />
        <meta name="author" content={blogPost.author} />
        {blogPost.keywords?.length ? (
          <meta name="keywords" content={blogPost.keywords.join(", ")} />
        ) : null}
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={blogPost.title[currentLang]} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={imageAlt} />
        <meta property="og:locale" content={currentLang === 'de' ? 'de_DE' : 'en_US'} />
        <meta property="og:locale:alternate" content={currentLang === 'de' ? 'en_US' : 'de_DE'} />
        <meta property="og:site_name" content="Crux Consulting" />
        <meta property="article:published_time" content={isoDate} />
        <meta property="article:author" content={blogPost.author} />
        <meta property="article:section" content={blogPost.category} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={blogPost.title[currentLang]} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={imageAlt} />
        
        {/* Hreflang for alternate language versions */}
        <link rel="alternate" hrefLang={currentLang === 'en' ? 'de' : 'en'} href={alternateUrl} />
        <link rel="alternate" hrefLang={currentLang} href={currentUrl} />
        <link rel="alternate" hrefLang="x-default" href={`https://crux-consulting.ai/en/blog/${blogPost.slug}`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Header />

      {/* Blog Post Content */}
      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back to Blog Link */}
          <Link to={`/${currentLang}/blog`} className="inline-flex items-center text-brand-blue hover:text-brand-green transition-colors mb-8">
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
            <time dateTime={isoDate}>{displayDate}</time>
            <span>•</span>
            <span>{currentLang === 'de' ? 'Von' : 'By'} {blogPost.author}</span>
          </div>

          {/* Featured Image */}
          <div className="aspect-video bg-gray-700 overflow-hidden rounded-lg mb-8">
            <img 
              src={blogPost.image} 
              alt={imageAlt} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Translation Notice */}
          {showTranslationNotice && currentLang === 'de' && (
            <div className="text-sm text-gray-400 mb-4 italic">
              Dies ist eine automatische Übersetzung ins Deutsche, der Artikel wurde im Original in Englisch geschrieben
            </div>
          )}
          {showTranslationNotice && currentLang === 'en' && (
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
            className="blog-content prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg prose-strong:text-white prose-em:text-gray-200 prose-a:text-brand-blue hover:prose-a:text-brand-green prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300 prose-blockquote:text-gray-200 prose-blockquote:border-brand-green"
            dangerouslySetInnerHTML={{ __html: blogPost.content[currentLang] }}
          />

          {/* Contact Us Button */}
          <div className="mt-12 text-center">
            <Button 
              onClick={handleBooking}
              variant="gradient"
              enableMouseGradient
              className="rounded-full px-8 py-3 flex items-center space-x-2 mx-auto"
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
