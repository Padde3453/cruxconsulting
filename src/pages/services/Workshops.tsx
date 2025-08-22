import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Workshops = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const heroAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden relative">
      <FloatingElements />
      
      <Header onBooking={handleBooking} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-24 pb-12 relative">
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
              {t('workshops.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              {t('workshops.description')}
            </p>
            
            {/* Workshop Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/lovable-uploads/1ef2cc02-9fdb-47f1-b4aa-2719978721fd.png"
                  alt="AI Innovation Lightbulb"
                  className="w-full max-w-md mx-auto animate-pulse"
                  style={{
                    animation: 'pulse 3s ease-in-out infinite'
                  }}
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  {t('workshops.hero.title')}
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  {t('workshops.hero.description')}
                </p>
                <Button 
                  onClick={handleBooking}
                  size="lg" 
                  className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 mx-auto transition-all duration-300 transform hover:scale-105"
                >
                  <span>{t('workshops.hero.buttonText')}</span>
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Benefits Section */}
      <section className="py-16 px-6 relative">
        <div 
          ref={cardsAnimation.elementRef}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            cardsAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('workshops.benefits', { returnObjects: true }) as Array<{title: string, description: string}>).map((benefit, index: number) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-700/40 backdrop-blur-sm rounded-xl border border-gray-600/30 p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-green rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 relative">
        <div 
          ref={ctaAnimation.elementRef}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            ctaAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center bg-gradient-to-r from-gray-800/40 to-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('workshops.cta.title')}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('workshops.cta.description')}
            </p>
            <Button 
              onClick={handleBooking}
              size="lg" 
              className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 mx-auto transition-all duration-300 transform hover:scale-105"
            >
              <span>{t('workshops.cta.buttonText')}</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workshops;