
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Minus, TrendingUp, Clock, Users, DollarSign, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
  // Scroll animations
  const heroAnimation = useScrollAnimation();
  const deliveryAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const handleBooking = () => {
    window.location.href = '/#contact';
  };

  const toggleCard = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  const valueCards = [
    {
      icon: TrendingUp,
      title: "More Revenue",
      subtitle: "through more high value clients",
      color: "from-brand-blue to-blue-600",
      services: [
        "Lead generation automation",
        "Client relationship management systems",
        "Sales funnel optimization",
        "Market analysis and targeting",
        "Revenue tracking and forecasting"
      ]
    },
    {
      icon: Clock,
      title: "More Free Time",
      subtitle: "thanks to automation of manual and repetitive tasks",
      color: "from-brand-green to-green-600",
      services: [
        "Process automation solutions",
        "Document management systems",
        "Workflow optimization",
        "Task scheduling and delegation",
        "Quality control automation"
      ]
    },
    {
      icon: Users,
      title: "Better Client Experience",
      subtitle: "through fast, reliable service even when you are busy",
      color: "from-purple-500 to-purple-700",
      services: [
        "Customer service chatbots",
        "Automated response systems",
        "Client portal development",
        "Service delivery tracking",
        "Feedback collection automation"
      ]
    },
    {
      icon: DollarSign,
      title: "Less Cost, Better Solution",
      subtitle: "through information and offer gathering like never before",
      color: "from-orange-500 to-red-600",
      services: [
        "Cost analysis and optimization",
        "Vendor comparison systems",
        "Market research automation",
        "Price monitoring tools",
        "ROI tracking and reporting"
      ]
    }
  ];

  const deliveryPromises = [
    {
      icon: CheckCircle,
      title: "Fast Development",
      description: "Rapid prototyping and deployment"
    },
    {
      icon: TrendingUp,
      title: "Clients Always First",
      description: "Aiming for 300% ROI on every solution"
    },
    {
      icon: Users,
      title: "Measured Performance",
      description: "Clear metrics for each delivered solution"
    },
    {
      icon: Clock,
      title: "Seamless Integration",
      description: "Little effort required from your team"
    },
    {
      icon: DollarSign,
      title: "Pay for Results",
      description: "You only pay for what works"
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
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Value 24/7 for you, even in your sleep
            </p>
          </div>

          {/* Value Cards Grid - Full Width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-none">
            {valueCards.map((card, index) => {
              const IconComponent = card.icon;
              const isExpanded = expandedCard === index;
              
              return (
                <Card 
                  key={index}
                  className={`bg-gray-800/50 border-gray-700 cursor-pointer transition-all duration-500 hover:bg-gray-800/70 ${
                    isExpanded ? 'ring-2 ring-brand-blue/50' : ''
                  }`}
                  onClick={() => toggleCard(index)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${card.color}`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div className="transition-transform duration-300">
                        {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                    <p className="text-gray-400 mb-4">{card.subtitle}</p>
                    
                    {/* Expandable Services */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-gray-700 pt-4 mt-4">
                        <h4 className="font-semibold mb-3 text-brand-blue">Services we offer:</h4>
                        <ul className="space-y-2">
                          {card.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-center text-gray-300">
                              <CheckCircle size={16} className="text-brand-green mr-2 flex-shrink-0" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
        <div 
          ref={deliveryAnimation.elementRef}
          className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-1000 ${
            deliveryAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              Our Delivery Promise
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How we ensure your success with every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliveryPromises.map((promise, index) => {
              const IconComponent = promise.icon;
              
              return (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
                  <div className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-green group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={24} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{promise.title}</h3>
                    <p className="text-gray-400">{promise.description}</p>
                  </div>
                </Card>
              );
            })}
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
          <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
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
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
