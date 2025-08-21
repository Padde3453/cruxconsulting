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
      description: "We begin by thoroughly understanding your unique business challenges, current processes, and specific goals. Through detailed consultations and assessments, we identify the areas where custom automation can deliver the most significant impact for your organization.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      number: "02", 
      title: t('process.analyze.title'),
      description: "Our experts conduct a comprehensive analysis of your existing workflows, systems, and data structures. We utilize AI-powered tools to assess inefficiencies, bottlenecks, and opportunities for automation, creating a detailed roadmap for your custom solution.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    },
    {
      number: "03",
      title: t('process.implement.title'),
      description: "We develop and deploy tailored automation solutions that seamlessly integrate with your existing infrastructure. Our implementation process includes rigorous testing, user training, and gradual rollout to ensure smooth adoption across your organization.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      number: "04",
      title: t('process.transform.title'),
      description: "Watch as your custom automation solution transforms your business operations, delivering measurable improvements in efficiency, cost reduction, and employee satisfaction. We provide ongoing support and optimization to maximize your return on investment.",
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
              {t('automation.description')}
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
              Every business is unique, with distinct challenges, processes, and goals. 
              One-size-fits-all solutions rarely deliver the transformative results that truly drive growth
              and force the business to adjust to the software. 
              AI and AI-Agents now allow software to fully work for you. That's why unique challenges require unique and customized solutions. 
              Crux Consulting is here to support businesses in creating bespoke automation solutions 
              that perfectly align with their specific needs and objectives.
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
              Our Custom Automation Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From consultation to transformation in days, not months
            </p>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
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
                  <p className="text-lg text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
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
              Custom Solutions in Action
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Three specific examples of how we've transformed businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((example) => (
              <Card 
                key={example}
                className="bg-gray-800/30 border-gray-700 p-8 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{example}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Example {example}
                  </h3>
                  <p className="text-gray-400">
                    Detailed example content coming soon...
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Button 
            onClick={handleBooking}
            size="lg"
            className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-2xl mx-auto"
          >
            <span>Start Your Automation Journey</span>
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Automation;