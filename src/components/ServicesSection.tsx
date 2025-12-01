
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Plus, TrendingUp, Clock, Users, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ServicesSectionProps {
  onBooking: () => void;
}

const ServicesSection = ({ onBooking }: ServicesSectionProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleServiceClick = (serviceIndex: number) => {
    navigate(`/services?expand=${serviceIndex}`);
  };

  const handleExploreAllServices = () => {
    navigate('/services');
    // Ensure we scroll to top when navigating to services
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const services = [
    {
      icon: TrendingUp,
      title: t('services.moreRevenue.title'),
      subtitle: t('services.moreRevenue.subtitle'),
      description: t('services.moreRevenue.description'),
      features: [
        t('services.moreRevenue.features.0'),
        t('services.moreRevenue.features.1'),
        t('services.moreRevenue.features.2')
      ]
    },
    {
      icon: Clock,
      title: t('services.moreFreeTime.title'),
      subtitle: t('services.moreFreeTime.subtitle'),
      description: t('services.moreFreeTime.description'),
      features: [
        t('services.moreFreeTime.features.0'),
        t('services.moreFreeTime.features.1'),
        t('services.moreFreeTime.features.2')
      ]
    },
    {
      icon: Users,
      title: t('services.betterClientExperience.title'),
      subtitle: t('services.betterClientExperience.subtitle'),
      description: t('services.betterClientExperience.description'),
      features: [
        t('services.betterClientExperience.features.0'),
        t('services.betterClientExperience.features.1'),
        t('services.betterClientExperience.features.2')
      ]
    },
    {
      icon: DollarSign,
      title: t('services.lessCost.title'),
      subtitle: t('services.lessCost.subtitle'),
      description: t('services.lessCost.description'),
      features: [
        t('services.lessCost.features.0'),
        t('services.lessCost.features.1'),
        t('services.lessCost.features.2')
      ]
    }
  ];

  const titleAnimation = useScrollAnimation(0.1);
  const cardsAnimation = useScrollAnimation(0.2);

  return (
    <section id="services" className="py-24 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={titleAnimation.elementRef}
          className={`text-center mb-16 transition-all duration-600 ${
            titleAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-5'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-center text-xl font-bold">{t('services.subtitle')}</p>
        </div>

        <div 
          ref={cardsAnimation.elementRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            // Alternating pattern: 0,2 from left | 1,3 from right (desktop)
            // Mobile: all from left
            const isEven = index % 2 === 0;
            const animationClass = cardsAnimation.isVisible 
              ? 'opacity-100 translate-x-0 scale-100' 
              : isEven 
                ? 'opacity-0 -translate-x-[60px] xl:-translate-x-[60px] scale-95' 
                : 'opacity-0 -translate-x-[60px] xl:translate-x-[60px] scale-95';
            
            return (
              <div 
                key={index}
                className={`transition-all duration-700 ease-out ${animationClass}`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  willChange: 'transform, opacity'
                }}
              >
                <Card className="bg-gray-900/80 border-gray-700 p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300 flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <IconComponent className="text-brand-blue h-8 w-8" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-sm text-gray-400">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="text-brand-green h-4 w-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                  <Button 
                    onClick={() => handleServiceClick(index)} 
                    variant="secondary" 
                    className="w-full mt-auto"
                  >
                    {t('services.learnMore')} <Plus className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            onClick={handleExploreAllServices} 
            size="lg" 
            className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <span>{t('services.exploreAll')}</span>
            <Plus size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
