import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ProcessAudit = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const heroAnimation = useScrollAnimation();

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
              {t('processAudit.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              {t('processAudit.description')}
            </p>
            
            <div className="bg-gradient-to-r from-gray-800/40 to-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/30 p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 text-lg mb-8">
                  Content coming soon...
                </p>
                <Button 
                  onClick={handleBooking}
                  size="lg" 
                  className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 mx-auto transition-all duration-300 transform hover:scale-105"
                >
                  <span>Learn More</span>
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessAudit;