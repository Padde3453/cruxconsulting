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
      number: "1",
      title: t('aiCompliance.riskLevels.prohibited.title'),
      description: t('aiCompliance.riskLevels.prohibited.description'),
      color: 'from-red-600 to-red-800',
      details: "Social scoring, facial recognition, dark pattern AI, manipulation"
    },
    {
      number: "2", 
      title: t('aiCompliance.riskLevels.highRisk.title'),
      description: t('aiCompliance.riskLevels.highRisk.description'),
      color: 'from-orange-500 to-red-600',
      details: "Safety components in critical infrastructure, employment & performance in work, access to education, access to public services, use in insurance, credit scoring, border control, justice systems"
    },
    {
      number: "3",
      title: t('aiCompliance.riskLevels.transparency.title'),
      description: t('aiCompliance.riskLevels.transparency.description'),
      color: 'from-yellow-500 to-orange-500',
      details: "General purpose AI and AI systems with specific transparency requirements such as chatbots, emotion recognition systems"
    },
    {
      number: "4",
      title: t('aiCompliance.riskLevels.minimal.title'),
      description: t('aiCompliance.riskLevels.minimal.description'),
      color: 'from-green-500 to-yellow-500',
      details: "AI-enabled video games, spam filters"
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
          <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/euaiact.gif" 
              alt="EU AI Act Compliance visualization"
              className="w-full h-auto"
              loading="lazy"
            />
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
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              {t('aiCompliance.riskLevels.title')}
            </h2>
          </div>

          {/* Risk Level Pyramid with Side-by-Side Layout */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Pyramid */}
            <div className="lg:col-span-2 relative">
              <div className="space-y-1 max-w-sm mx-auto">
                {riskLevels.map((level, index) => {
                  const levelAnimation = useScrollAnimation();
                  const widths = ['120px', '160px', '200px', '240px']; // Progressive widths for pyramid shape
                  return (
                    <div
                      key={index}
                      ref={levelAnimation.elementRef}
                      className={`relative transition-all duration-700 ${
                        levelAnimation.isVisible 
                          ? 'opacity-100 translate-x-0' 
                          : `opacity-0 ${index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'}`
                      }`}
                      style={{ 
                        transitionDelay: levelAnimation.isVisible ? `${index * 300}ms` : '0ms' 
                      }}
                    >
                      <div 
                        className={`h-16 bg-gradient-to-r ${level.color} flex items-center justify-center mx-auto shadow-lg transition-all duration-300 relative`}
                        style={{ 
                          width: widths[index],
                          clipPath: index === 0 ? 'polygon(50% 0%, 100% 100%, 0% 100%)' : // Triangle for top
                                   index === 1 ? 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' : // Narrow trapezoid
                                   index === 2 ? 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' : // Medium trapezoid
                                   'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)' // Wide trapezoid
                        }}
                      >
                        {/* Number only */}
                        <div className="text-white font-bold text-2xl">
                          {level.number}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-3 space-y-1">
              {riskLevels.map((level, index) => {
                const textAnimation = useScrollAnimation();
                return (
                  <div
                    key={`text-${index}`}
                    ref={textAnimation.elementRef}
                    className={`transition-all duration-700 ${
                      textAnimation.isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
                    }`}
                    style={{ 
                      transitionDelay: textAnimation.isVisible ? `${index * 300 + 150}ms` : '0ms' 
                    }}
                  >
                    <div className="min-h-16 sm:h-16 flex items-center p-3 sm:p-4 bg-gradient-to-r from-gray-800/30 to-gray-700/20 backdrop-blur-sm rounded-lg border border-gray-600/30">
                      <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center text-white font-bold text-sm`}>
                          {level.number}
                        </div>
                        <div className="flex-1 min-w-0">
                          {/* Mobile Layout - Stack vertically */}
                          <div className="block sm:hidden space-y-2">
                            <h3 className="text-sm font-bold text-white leading-tight">{level.title}</h3>
                            <p className="text-xs text-gray-400 italic leading-tight line-clamp-3">{level.details}</p>
                          </div>
                          {/* Desktop Layout - Grid */}
                          <div className="hidden sm:grid grid-cols-5 gap-4 items-center h-full">
                            <div className="col-span-2">
                              <h3 className="text-sm font-bold text-white leading-tight">{level.title}</h3>
                            </div>
                            <div className="col-span-3">
                              <p className="text-xs text-gray-400 italic leading-relaxed overflow-hidden line-clamp-2">{level.details}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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