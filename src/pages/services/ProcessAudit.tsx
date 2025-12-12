import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Target, Cog, Building, Calculator } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ProcessAuditAndAutomation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const heroAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();
  
  // Create individual scroll animations for each card
  const cardAnimations = Array.from({ length: 6 }, () => useScrollAnimation());

  const handleBooking = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const auditBenefits = [
    {
      icon: CheckCircle,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Target,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Cog,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Building,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Calculator,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: CheckCircle,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden relative">
      <FloatingElements />
      
      <Header onBooking={handleBooking} />

      {/* Hero Section */}
      <section className="pt-32 relative">
        <div 
          ref={heroAnimation.elementRef}
          className={`relative z-10 w-full px-6 transition-all duration-1000 ${
            heroAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16 max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {t('processAudit.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              {t('processAudit.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Massive Centered Background Gears */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src="/lovable-uploads/52471b51-0d8d-487a-bb90-cd8d016ad4c6.png" 
            alt="Process automation gears" 
            className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1200px] lg:h-[1200px] xl:w-[1400px] xl:h-[1400px] object-contain opacity-10"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              What You'll Get
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive process optimization that delivers measurable results across your entire organization
            </p>
          </div>

          {/* Stacked Cards */}
          <div className="space-y-8">
            {auditBenefits.map((benefit, index) => {
              const isEven = index % 2 === 0;
              const auditBenefitTexts = t('processAudit.auditBenefits', { returnObjects: true }) as Array<{title: string, description: string}>;
              
              return (
                <div
                  key={index}
                  ref={cardAnimations[index].elementRef}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 overflow-hidden hover:border-blue-500/50 transition-all duration-1000 transform hover:scale-[1.02] ${
                    cardAnimations[index].isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 h-64 lg:h-80">
                      <img
                        src={benefit.image}
                        alt={auditBenefitTexts[index]?.title || ''}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-12">
                      <h3 className="text-2xl font-semibold mb-4 text-white text-center lg:text-left">
                        {auditBenefitTexts[index]?.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-center lg:text-left">
                        {auditBenefitTexts[index]?.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div 
          ref={ctaAnimation.elementRef}
          className={`max-w-4xl mx-auto text-center px-6 transition-all duration-1000 ${
            ctaAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-gray-800/40 to-gray-700/30 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {t('processAudit.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              {t('processAudit.cta.description')}
            </p>
            <Button 
              onClick={handleBooking}
              size="lg" 
              variant="gradient"
              enableMouseGradient
              className="rounded-full px-12 py-6 text-xl flex items-center space-x-3 mx-auto shadow-lg hover:shadow-xl"
            >
              <span>{t('processAudit.cta.buttonText')}</span>
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessAuditAndAutomation;