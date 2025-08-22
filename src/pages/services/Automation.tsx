import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Card } from "@/components/ui/card";

const Automation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const heroAnimation = useScrollAnimation();
  const introAnimation = useScrollAnimation();
  const processAnimation = useScrollAnimation();
  const examplesAnimation = useScrollAnimation();

  const handleBooking = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const steps = [
    {
      number: "01",
      title: t('process.listen.title'),
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      number: "02", 
      title: t('process.analyze.title'),
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    },
    {
      number: "03",
      title: t('process.implement.title'),
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      number: "04",
      title: t('process.transform.title'),
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden relative">
      <FloatingElements />
      
      <Header onBooking={handleBooking} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div 
          ref={heroAnimation.elementRef}
          className={`relative z-10 w-full px-6 transition-all duration-1000 ${
            heroAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {t('automation.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              {t('automation.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 relative">
        <div 
          ref={introAnimation.elementRef}
          className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
            introAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              {t('automation.intro.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative">
        <div 
          ref={processAnimation.elementRef}
          className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${
            processAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('automation.process.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('automation.process.subtitle')}
            </p>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => {
              const processSteps = t('automation.process.steps', { returnObjects: true }) as Array<{description: string}>;
              
              return (
                <div 
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  <div className="flex-1">
                    <Card className="bg-gray-800/30 border-gray-700 overflow-hidden group hover:bg-gray-800/50 transition-all duration-500">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </Card>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="text-6xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent opacity-50">
                        {step.number}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">{processSteps[index]?.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-24 relative">
        <div 
          ref={examplesAnimation.elementRef}
          className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${
            examplesAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('automation.examples.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('automation.examples.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t('automation.examples.cases', { returnObjects: true }) as Array<{title: string, timeSaved: string, investment: string, roi: string, description: string}>).map((caseExample, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700 p-8 hover:bg-gray-800/50 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {caseExample.title}
                  </h3>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between items-center text-base">
                      <span className="text-gray-400">{t('automation.labels.timeSaved')}</span>
                      <span className="text-brand-green font-semibold">{caseExample.timeSaved}</span>
                    </div>
                    <div className="flex justify-between items-center text-base">
                      <span className="text-gray-400">{t('automation.labels.investment')}</span>
                      <span className="text-white">{caseExample.investment}</span>
                    </div>
                    <div className="flex justify-between items-center text-base">
                      <span className="text-gray-400">{t('automation.labels.roi')}</span>
                      <span className="text-brand-blue font-bold">{caseExample.roi}</span>
                    </div>
                    <p className="text-gray-300 text-base mt-4">
                      {caseExample.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto transition-all duration-1000">
          <div className="text-center bg-gradient-to-r from-gray-800/40 to-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('automation.cta.title')}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('automation.cta.description')}
            </p>
            <Button 
              onClick={handleBooking}
              size="lg" 
              className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 mx-auto transition-all duration-300 transform hover:scale-105"
            >
              <span>{t('automation.cta.buttonText')}</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Automation;