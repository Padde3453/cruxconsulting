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
  const benefitsAnimation = useScrollAnimation();
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

  const auditBenefits = [
    {
      icon: CheckCircle,
      title: "Automated Process Collection and Review",
      description: "Comprehensive analysis of your existing processes using AI-powered tools to identify bottlenecks and inefficiencies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Target,
      title: "Improvement and Automation Recommendations", 
      description: "Detailed suggestions for optimizing workflows and implementing automation solutions tailored to your business needs.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Cog,
      title: "Implementation of AI Agents or Workflows",
      description: "Deploy intelligent automation solutions including AI agents and custom workflows to streamline your operations.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Building,
      title: "Processes Across the Entire Company",
      description: "Enterprise-wide process optimization covering all departments and business units for maximum efficiency gains.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Calculator,
      title: "Precise ROI Calculation",
      description: "Detailed financial analysis showing exact return on investment and cost savings from process improvements.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Implementation Support",
      description: "End-to-end guidance and support throughout your automation journey, from planning to full deployment and optimization.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

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
          <div className="text-center mb-16 max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Process Audit & Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Transform your business operations with comprehensive process analysis and intelligent automation solutions
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
        
        <div 
          ref={benefitsAnimation.elementRef}
          className={`max-w-4xl mx-auto px-6 transition-all duration-1000 relative z-10 ${
            benefitsAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
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
              const Icon = benefit.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 overflow-hidden hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 h-64 lg:h-80">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-12">
                      <div className="flex items-center justify-center lg:justify-start w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl mb-6 mx-auto lg:mx-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-white text-center lg:text-left">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-center lg:text-left">
                        {benefit.description}
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
              Ready to Optimize Your Processes?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's analyze your current operations and implement automation solutions that deliver real ROI
            </p>
            <Button 
              onClick={handleBooking}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-full px-12 py-6 text-xl flex items-center space-x-3 mx-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Start Your Process Audit</span>
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