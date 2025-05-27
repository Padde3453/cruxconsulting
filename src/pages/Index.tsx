
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Menu } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactFormSection from "@/components/ContactFormSection";
import FloatingElements from "@/components/FloatingElements";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      <FloatingElements />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button onClick={scrollToTop} className="cursor-pointer">
              <img src="/lovable-uploads/3f806d3d-5974-43de-a754-d838661a004d.png" alt="Crux Consulting" className="h-20 w-auto" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-gray-300 hover:text-white transition-colors cursor-not-allowed opacity-50"
              disabled
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact us
            </button>
            <Button 
              onClick={handleBooking} 
              className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-6 py-2 flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <span>Book Consultation</span>
              <Plus size={16} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 px-6 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-gray-300 hover:text-white transition-colors text-left cursor-not-allowed opacity-50"
                disabled
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Contact us
              </button>
              <Button 
                onClick={handleBooking} 
                className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-6 py-2 flex items-center space-x-2 transition-all duration-300 w-fit"
              >
                <span>Book Consultation</span>
                <Plus size={16} />
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <HeroSection onBooking={handleBooking} />

      {/* Services Section */}
      <ServicesSection onBooking={handleBooking} />

      {/* Stats Section */}
      <StatsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Contact Section */}
      <ContactFormSection onBooking={handleBooking} />
    </div>
  );
};

export default Index;
