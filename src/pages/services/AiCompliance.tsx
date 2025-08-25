import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Scale, Shield, FileText, Search, TrendingUp, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const AiCompliance = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  // Scroll animations
  const heroAnimation = useScrollAnimation();
  const gifAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const pyramidAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const handleBooking = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const services = [
    { 
      icon: FileText, 
      text: t('aiCompliance.services.0'),
      color: 'text-brand-blue'
    },
    { 
      icon: Search, 
      text: t('aiCompliance.services.1'),
      color: 'text-brand-green'
    },
    { 
      icon: Shield, 
      text: t('aiCompliance.services.2'),
      color: 'text-brand-blue'
    },
    { 
      icon: TrendingUp, 
      text: t('aiCompliance.services.3'),
      color: 'text-brand-green'
    },
    { 
      icon: Users, 
      text: t('aiCompliance.services.4'),
      color: 'text-brand-blue'
    },
    { 
      icon: Scale, 
      text: t('aiCompliance.services.5'),
      color: 'text-brand-green'
    }
  ];

  const riskLevels = [
    {
      title: t('aiCompliance.riskLevels.prohibited.title'),
      description: t('aiCompliance.riskLevels.prohibited.description'),
      color: 'from-red-600 to-red-800',
      size: 'h-16'
    },
    {
      title: t('aiCompliance.riskLevels.highRisk.title'),
      description: t('aiCompliance.riskLevels.highRisk.description'),
      color: 'from-orange-500 to-red-600',
      size: 'h-20'
    },
    {
      title: t('aiCompliance.riskLevels.transparency.title'),
      description: t('aiCompliance.riskLevels.transparency.description'),
      color: 'from-yellow-500 to-orange-500',
      size: 'h-24'
    },
    {
      title: t('aiCompliance.riskLevels.minimal.title'),
      description: t('aiCompliance.riskLevels.minimal.description'),
      color: 'from-green-500 to-yellow-500',
      size: 'h-28'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden relative">
      <FloatingElements />
      
      <Header onBooking={handleBooking} />

      {/* Hero Section */}
      <section className="flex items-center justify-center pt-28 pb-8 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div 
          ref={heroAnimation.elementRef}
          className={`relative z-10 w-full px-6 transition-all duration-1000 ${
            heroAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-9 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                {t('aiCompliance.hero.title')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-7">
              {t('aiCompliance.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* GIF Section */}
      <section className="py-8 relative">
        <div 
          ref={gifAnimation.elementRef}
          className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
            gifAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Placeholder for GIF - will be replaced when GIF is provided */}
          <div className="w-full max-w-md mx-auto h-64 bg-gradient-to-br from-gray-800/40 to-gray-700/30 backdrop-blur-sm border border-gray-600/30 rounded-xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <Scale className="w-16 h-16 text-brand-blue mx-auto" />
              <p className="text-gray-400">EU AI Act Compliance GIF</p>
              <p className="text-sm text-gray-500">Will loop continuously</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div 
          ref={servicesAnimation.elementRef}
          className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-1000 ${
            servicesAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`group flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-800/30 to-gray-700/20 backdrop-blur-sm rounded-lg border border-gray-600/30 hover:border-brand-blue/50 transition-all duration-1000 hover:transform hover:scale-105 ${
                    servicesAnimation.isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ 
                    transitionDelay: servicesAnimation.isVisible ? `${index * 150}ms` : '0ms' 
                  }}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center group-hover:from-brand-blue/20 group-hover:to-brand-green/20 transition-all duration-300`}>
                    <IconComponent className={`h-6 w-6 ${service.color} transition-colors duration-300`} />
                  </div>
                  <p className="text-lg text-gray-200 group-hover:text-white transition-colors duration-300">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Act Risk Pyramid Section */}
      <section className="py-20 relative">
        <div 
          ref={pyramidAnimation.elementRef}
          className={`relative z-10 max-w-5xl mx-auto px-6 transition-all duration-1000 ${
            pyramidAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              {t('aiCompliance.riskLevels.title')}
            </h2>
          </div>

          {/* Risk Level Pyramid */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {riskLevels.map((level, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-500 hover:scale-105 ${
                  pyramidAnimation.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: pyramidAnimation.isVisible ? `${index * 200}ms` : '0ms' 
                }}
              >
                <div className={`${level.size} bg-gradient-to-r ${level.color} rounded-lg flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                     style={{ width: `${100 - index * 15}%` }}>
                  <div className="text-center text-white px-4">
                    <h3 className="font-bold text-lg mb-1">{level.title}</h3>
                  </div>
                </div>
                
                {/* Description tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="bg-gray-800/95 backdrop-blur-sm border border-gray-600 rounded-lg p-4 max-w-sm">
                    <p className="text-sm text-gray-300 text-center">{level.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div 
          ref={ctaAnimation.elementRef}
          className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
            ctaAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 p-12 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              {t('aiCompliance.cta.title')}
            </h2>
            <p className="text-xl text-white mb-8">
              {t('aiCompliance.cta.description')}
            </p>
            <Button 
              onClick={handleBooking}
              size="lg" 
              className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 mx-auto transition-all duration-300 transform hover:scale-105"
            >
              <span>{t('aiCompliance.cta.button')}</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiCompliance;