import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, ArrowLeft, Home, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingElements from "@/components/FloatingElements";

const NotFound = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      <FloatingElements />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              alt="Crux Consulting" 
              onClick={scrollToTop} 
              src="/lovable-uploads/Logotext.png" 
              className="h-20 w-auto cursor-pointer object-contain" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link to="/#contact">
              <Button className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-6 py-2">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-white"
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-6 py-4 space-y-4">
              <Link 
                to="/#services" 
                className="block text-gray-300 hover:text-white transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/blog" 
                className="block text-gray-300 hover:text-white transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-300 hover:text-white transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/#contact" 
                className="block text-gray-300 hover:text-white transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link to="/#contact">
                <Button 
                  className="w-full bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-6 py-2" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* 404 Content */}
      <section className="pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-2xl p-12 backdrop-blur-sm">
            <h1 className="text-8xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Oops! Page not found
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/">
                <Button className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-3 flex items-center space-x-2 transition-all duration-300 transform hover:scale-105">
                  <Home size={20} />
                  <span>Return to Home</span>
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                onClick={() => window.history.back()} 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-full px-8 py-3 flex items-center space-x-2"
              >
                <ArrowLeft size={20} />
                <span>Go Back</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <a 
              href="https://www.instagram.com/crux_consulting.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <div className="text-gray-400 cursor-not-allowed transition-all duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </div>
          </div>
          <p className="text-gray-500">
            © 2024 Crux Consulting. Transforming SMEs with AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
