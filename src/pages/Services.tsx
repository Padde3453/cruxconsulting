
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ValueCard from "@/components/ValueCard";
import DeliveryPromise from "@/components/DeliveryPromise";

const Services = () => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});
  
  // Scroll animations
  const heroAnimation = useScrollAnimation();
  const deliveryAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

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
      title: "More Revenue",
      subtitle: "through more high value clients",
      animationType: "revenue" as const,
      services: [
        "Lead generation automation",
        "Client relationship management systems",
        "Sales funnel optimization",
        "Market analysis and targeting",
        "Revenue tracking and forecasting"
      ]
    },
    {
      title: "More Free Time",
      subtitle: "thanks to automation of manual and repetitive tasks",
      animationType: "time" as const,
      services: [
        "Process automation solutions",
        "Document management systems",
        "Workflow optimization",
        "Task scheduling and delegation",
        "Quality control automation"
      ]
    },
    {
      title: "Better Client Experience",
      subtitle: "through fast, reliable service even when you are busy",
      animationType: "experience" as const,
      services: [
        "Customer service chatbots",
        "Automated response systems",
        "Client portal development",
        "Service delivery tracking",
        "Feedback collection automation"
      ]
    },
    {
      title: "Less Cost, Better Solution",
      subtitle: "through information and offer gathering like never before",
      animationType: "cost" as const,
      services: [
        "Cost analysis and optimization",
        "Vendor comparison systems",
        "Market research automation",
        "Price monitoring tools",
        "ROI tracking and reporting"
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Value 24/7 for you, even in your sleep
            </p>
          </div>

          {/* Value Sections - 1x4 Layout */}
          <div className="space-y-4 w-full max-w-7xl mx-auto">
            {valueCards.map((card, index) => (
              <ValueCard
                key={index}
                index={index}
                title={card.title}
                subtitle={card.subtitle}
                animationType={card.animationType}
                services={card.services}
                isOpen={openSections[index]}
                onToggle={() => toggleSection(index)}
              />
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white mb-8">
              Let's explore what we could automate for you
            </p>
            <Button 
              onClick={handleBooking}
              size="lg" 
              className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 mx-auto transition-all duration-300 transform hover:scale-105"
            >
              <span>Book Your Consultation</span>
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
