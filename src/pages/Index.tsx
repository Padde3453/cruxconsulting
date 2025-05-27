
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Menu, Linkedin, Instagram } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import FloatingElements from "@/components/FloatingElements";
import WhyCruxSection from "@/components/WhyCruxSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import EinsteinQuoteSection from "@/components/EinsteinQuoteSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const { toast } = useToast();

  // Scroll animations for each section
  const whyCruxAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const einsteinAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const processAnimation = useScrollAnimation();
  const blogAnimation = useScrollAnimation();
  const contactAnimation = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBooking = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      <FloatingElements />
      
      <Header onBooking={handleBooking} />

      {/* Hero Section */}
      <HeroSection onBooking={handleBooking} />

      {/* Why Crux Section */}
      <div 
        ref={whyCruxAnimation.elementRef}
        className={`transition-all duration-1000 ${
          whyCruxAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <WhyCruxSection />
      </div>

      {/* Services Section */}
      <div 
        ref={servicesAnimation.elementRef}
        className={`transition-all duration-1000 ${
          servicesAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <ServicesSection onBooking={handleBooking} />
      </div>

      {/* Einstein Quote Section */}
      <div 
        ref={einsteinAnimation.elementRef}
        className={`transition-all duration-1000 ${
          einsteinAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <EinsteinQuoteSection />
      </div>

      {/* Stats Section */}
      <div 
        ref={statsAnimation.elementRef}
        className={`transition-all duration-1000 ${
          statsAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <StatsSection />
      </div>

      {/* Process Section */}
      <div 
        ref={processAnimation.elementRef}
        className={`transition-all duration-1000 ${
          processAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <ProcessSection />
      </div>

      {/* Blog Preview Section */}
      <div 
        ref={blogAnimation.elementRef}
        className={`transition-all duration-1000 ${
          blogAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <BlogPreviewSection />
      </div>

      {/* Contact Section */}
      <div 
        ref={contactAnimation.elementRef}
        className={`transition-all duration-1000 ${
          contactAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <ContactSection onBooking={handleBooking} />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
