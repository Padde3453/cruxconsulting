
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ValueCard from "@/components/ValueCard";
import DeliveryPromise from "@/components/DeliveryPromise";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});
  const [searchParams] = useSearchParams();
  
  // Scroll animations
  const heroAnimation = useScrollAnimation();
  const deliveryAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  // Handle URL parameter to expand specific section and scroll to it
  useEffect(() => {
    const expandParam = searchParams.get('expand');
    if (expandParam) {
      const sectionIndex = parseInt(expandParam, 10);
      if (!isNaN(sectionIndex) && sectionIndex >= 0 && sectionIndex < valueCards.length) {
        setOpenSections({ [sectionIndex]: true });
        
        // Scroll to the specific section after a brief delay to ensure DOM is updated
        setTimeout(() => {
          const sectionElement = document.getElementById(`value-card-${sectionIndex}`);
          if (sectionElement) {
            sectionElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
          }
        }, 100);
      }
    }
  }, [searchParams]);

  const handleBooking = () => {
    window.location.href = '/#contact';
  };

  const toggleSection = (index: number) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const valueCards = [
    {
      title: t('services.moreRevenue.title'),
      subtitle: t('services.moreRevenue.subtitle'),
      animationType: "revenue" as const,
      services: [
        t('services.moreRevenue.services.0'),
        t('services.moreRevenue.services.1'),
        t('services.moreRevenue.services.2'),
        t('services.moreRevenue.services.3'),
        t('services.moreRevenue.services.4')
      ]
    },
    {
      title: t('services.moreFreeTime.title'),
      subtitle: t('services.moreFreeTime.subtitle'),
      animationType: "time" as const,
      services: [
        t('services.moreFreeTime.services.0'),
        t('services.moreFreeTime.services.1'),
        t('services.moreFreeTime.services.2'),
        t('services.moreFreeTime.services.3'),
        t('services.moreFreeTime.services.4')
      ]
    },
    {
      title: t('services.betterClientExperience.title'),
      subtitle: t('services.betterClientExperience.subtitle'),
      animationType: "experience" as const,
      services: [
        t('services.betterClientExperience.services.0'),
        t('services.betterClientExperience.services.1'),
        t('services.betterClientExperience.services.2'),
        t('services.betterClientExperience.services.3'),
        t('services.betterClientExperience.services.4')
      ]
    },
    {
      title: t('services.lessCost.title'),
      subtitle: t('services.lessCost.subtitle'),
      animationType: "cost" as const,
      services: [
        t('services.lessCost.services.0'),
        t('services.lessCost.services.1'),
        t('services.lessCost.services.2'),
        t('services.lessCost.services.3'),
        t('services.lessCost.services.4')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden relative">
      <FloatingElements />
      
      <Header onBooking={handleBooking} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-24 pb-12 relative">
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
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {t('services.pageTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              {t('services.pageSubtitle')}
            </p>
          </div>

          {/* Value Sections - 1x4 Layout */}
          <div className="space-y-4 w-full max-w-7xl mx-auto">
            {valueCards.map((card, index) => (
              <div key={index} id={`value-card-${index}`}>
                <ValueCard
                  index={index}
                  title={card.title}
                  subtitle={card.subtitle}
                  animationType={card.animationType}
                  services={card.services}
                  isOpen={openSections[index]}
                  onToggle={() => toggleSection(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 relative">
        <div 
          ref={deliveryAnimation.elementRef}
          className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-1000 ${
            deliveryAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <DeliveryPromise />
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
              {t('services.readyToDiscover')}
            </h2>
            <p className="text-xl text-white mb-8">
              {t('services.exploreAutomation')}
            </p>
            <Button 
              onClick={handleBooking}
              size="lg" 
              className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 mx-auto transition-all duration-300 transform hover:scale-105"
            >
              <span>{t('services.bookConsultation')}</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
