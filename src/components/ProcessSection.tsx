
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from 'react-i18next';

const ProcessSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleBooking = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback toast if contact section not found
      toast({
        title: "Booking Request",
        description: "We'll contact you within 24 hours to schedule your consultation.",
      });
    }
  };

  const steps = [
    {
      number: "01",
      title: t('process.listen.title'),
      description: t('process.listen.description'),
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      number: "02", 
      title: t('process.analyze.title'),
      description: t('process.analyze.description'),
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    },
    {
      number: "03",
      title: t('process.implement.title'),
      description: t('process.implement.description'),
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      number: "04",
      title: t('process.transform.title'),
      description: t('process.transform.description'),
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('process.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="bg-gray-800/30 border-gray-700 overflow-hidden group hover:bg-gray-800/50 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent opacity-50">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleBooking}
            size="lg"
            className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-2xl mx-auto"
          >
            <span>{t('process.beginJourney')}</span>
            <Plus size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
