
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Plus, Minus, TrendingUp, Clock, Users, DollarSign, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

  const AnimatedIcon = ({ index, icon: IconComponent }: { index: number; icon: any }) => {
    const isOpen = openSections[index];
    
    return (
      <div className="w-16 h-16 relative overflow-hidden rounded-lg bg-gray-800/50 flex items-center justify-center">
        {/* Revenue Animation - Chart going up */}
        {index === 0 && (
          <div className="relative w-12 h-12">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polyline
                points="10,80 30,60 50,70 70,40 90,20"
                fill="none"
                stroke={isOpen ? "#10b981" : "#ef4444"}
                strokeWidth="3"
                className={`transition-all duration-1000 ${isOpen ? 'animate-pulse' : ''}`}
              />
              <circle
                cx="90"
                cy="20"
                r="3"
                fill={isOpen ? "#10b981" : "#ef4444"}
                className={`transition-all duration-500 ${isOpen ? 'animate-bounce' : ''}`}
              />
            </svg>
          </div>
        )}
        
        {/* Time Animation - Clock */}
        {index === 1 && (
          <div className="relative w-12 h-12">
            <div className="w-full h-full border-2 border-gray-400 rounded-full relative">
              <div 
                className={`absolute top-1 left-1/2 w-0.5 h-4 bg-gray-400 origin-bottom transition-transform duration-1000 ${
                  isOpen ? 'rotate-90' : 'rotate-[270deg] animate-spin'
                }`}
                style={{ transformOrigin: 'bottom center', marginLeft: '-1px' }}
              />
              <div 
                className={`absolute top-2 left-1/2 w-0.5 h-3 bg-gray-600 origin-bottom transition-transform duration-500 ${
                  isOpen ? 'rotate-180' : 'rotate-[450deg] animate-spin'
                }`}
                style={{ transformOrigin: 'bottom center', marginLeft: '-1px' }}
              />
            </div>
          </div>
        )}
        
        {/* Client Experience Animation - Smiley */}
        {index === 2 && (
          <div className="relative w-12 h-12">
            <div 
              className={`w-full h-full rounded-full border-2 transition-all duration-1000 ${
                isOpen ? 'bg-brand-green border-brand-green' : 'bg-amber-500 border-amber-500'
              }`}
            >
              <div className="flex items-center justify-center h-full">
                <div className="flex space-x-1 mb-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div 
                className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                  isOpen ? 'w-6 h-3' : 'w-4 h-0.5'
                }`}
              >
                <div 
                  className={`w-full border-b-2 border-white transition-all duration-1000 ${
                    isOpen ? 'rounded-b-full' : 'rounded-none'
                  }`}
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Cost Savings Animation - Piggy Bank */}
        {index === 3 && (
          <div className="relative w-12 h-12">
            <div className="w-full h-8 bg-pink-300 rounded-full relative mt-2">
              <div className="absolute -top-1 left-8 w-2 h-2 bg-pink-300 rounded-full"></div>
              <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
              <div className="absolute top-2 left-2 w-3 h-1 bg-pink-400 rounded-full"></div>
              <div className="absolute top-1 right-2 w-1 h-1 bg-pink-400 rounded-full"></div>
              {/* Coins animation */}
              {isOpen && (
                <>
                  <div className="absolute -top-2 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="absolute -top-1 left-6 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute -top-3 left-2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

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

          {/* Value Sections - 1x4 Layout */}
          <div className="space-y-4 w-full max-w-7xl mx-auto">
            {valueCards.map((card, index) => (
              <Collapsible
                key={index}
                open={openSections[index]}
                onOpenChange={() => toggleSection(index)}
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                  <CollapsibleTrigger asChild>
                    <div className="w-full p-6 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <AnimatedIcon index={index} icon={card.icon} />
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                            <p className="text-gray-400">{card.subtitle}</p>
                          </div>
                        </div>
                        <div className="transition-transform duration-300">
                          {openSections[index] ? <Minus size={24} /> : <Plus size={24} />}
                        </div>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="overflow-hidden transition-all duration-500">
                    <div className="px-6 pb-6 border-t border-gray-700 pt-4">
                      <h4 className="font-semibold mb-3 text-brand-blue">Services we offer:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {card.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center text-gray-300">
                            <CheckCircle size={16} className="text-brand-green mr-3 flex-shrink-0" />
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
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
