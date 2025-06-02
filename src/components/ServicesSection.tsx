
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Plus, TrendingUp, Clock, Users, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

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
      features: t('services.moreRevenue.features', { returnObjects: true }) as string[]
    },
    {
      icon: Clock,
      title: t('services.moreFreeTime.title'),
      subtitle: t('services.moreFreeTime.subtitle'),
      description: t('services.moreFreeTime.description'),
      features: t('services.moreFreeTime.features', { returnObjects: true }) as string[]
    },
    {
      icon: Users,
      title: t('services.betterClientExperience.title'),
      subtitle: t('services.betterClientExperience.subtitle'),
      description: t('services.betterClientExperience.description'),
      features: t('services.betterClientExperience.features', { returnObjects: true }) as string[]
    },
    {
      icon: DollarSign,
      title: t('services.lessCost.title'),
      subtitle: t('services.lessCost.subtitle'),
      description: t('services.lessCost.description'),
      features: t('services.lessCost.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-center text-xl font-bold">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card key={index} className="bg-gray-900/80 border-gray-700 p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300 flex flex-col h-full">
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
