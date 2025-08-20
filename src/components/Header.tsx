
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Plus, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  onBooking?: () => void;
}

const Header = ({ onBooking }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleBlogNavigation = () => {
    navigate('/blog');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setMobileMenuOpen(false);
  };

  const handleServicesNavigation = () => {
    navigate('/services');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setMobileMenuOpen(false);
  };

  const handleAboutNavigation = () => {
    navigate('/about');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setMobileMenuOpen(false);
  };

  const handleBooking = () => {
    if (onBooking) {
      onBooking();
    } else {
      scrollToSection('contact');
    }
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  const isServicesActive = () => {
    return location.pathname.startsWith('/services');
  };

  const serviceLinks = [
    { path: '/services/ai-chatbot', label: t('aiChatbot.title') },
    { path: '/services/workshops', label: t('workshops.title') },
    { path: '/services/process-audit', label: t('processAudit.title') },
    { path: '/services/automation', label: t('automation.title') }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={scrollToTop}>
          <img 
            alt="Crux Consulting" 
            src="/lovable-uploads/Logotext.png" 
            className="h-20 w-auto cursor-pointer object-contain" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button 
              onClick={handleServicesNavigation}
              className={`flex items-center space-x-1 transition-colors ${
                isServicesActive() 
                  ? 'text-white border-b-2 border-brand-blue' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span>{t('navigation.services')}</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Services Dropdown */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-sm border border-gray-600 rounded-lg shadow-xl z-50">
                <div className="p-4 space-y-2">
                  <Link
                    to="/services"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors font-medium border-b border-gray-600/50 mb-2"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    {t('navigation.servicesOverview')}
                  </Link>
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button 
            onClick={handleBlogNavigation}
            className={`transition-colors ${
              isActivePage('/blog') || location.pathname.startsWith('/blog/') 
                ? 'text-white border-b-2 border-brand-blue' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {t('navigation.blog')}
          </button>
          <button 
            onClick={handleAboutNavigation}
            className={`transition-colors ${
              isActivePage('/about') 
                ? 'text-white border-b-2 border-brand-blue' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {t('navigation.about')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-300 hover:text-white transition-colors"
          >
            {t('navigation.contact')}
          </button>
          <LanguageToggle />
          <Button 
            onClick={handleBooking} 
            className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-6 py-2 flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
          >
            <span>{t('navigation.bookConsultation')}</span>
            <Plus size={16} />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageToggle />
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
            <button 
              onClick={handleServicesNavigation}
              className={`block transition-colors ${
                isActivePage('/services') 
                  ? 'text-white border-b-2 border-brand-blue' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {t('navigation.services')}
            </button>
            <button 
              onClick={handleBlogNavigation}
              className={`block transition-colors ${
                isActivePage('/blog') || location.pathname.startsWith('/blog/') 
                  ? 'text-white border-b-2 border-brand-blue' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {t('navigation.blog')}
            </button>
            <button 
              onClick={handleAboutNavigation}
              className={`block transition-colors ${
                isActivePage('/about') 
                  ? 'text-white border-b-2 border-brand-blue' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {t('navigation.about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block text-gray-300 hover:text-white transition-colors"
            >
              {t('navigation.contact')}
            </button>
            <Button 
              onClick={handleBooking} 
              className="w-full bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-6 py-2 flex items-center justify-center space-x-2"
            >
              <span>{t('navigation.bookConsultation')}</span>
              <Plus size={16} />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
