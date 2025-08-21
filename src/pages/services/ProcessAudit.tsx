import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Target, Cog, Building, Calculator } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import AnimatedGears from "@/components/AnimatedGears";
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
      description: "Comprehensive analysis of your existing processes using AI-powered tools to identify bottlenecks and inefficiencies."
    },
    {
      icon: Target,
      title: "Improvement and Automation Recommendations", 
      description: "Detailed suggestions for optimizing workflows and implementing automation solutions tailored to your business needs."
    },
    {
      icon: Cog,
      title: "Implementation of AI Agents or Workflows",
      description: "Deploy intelligent automation solutions including AI agents and custom workflows to streamline your operations."
    },
    {
      icon: Building,
      title: "Processes Across the Entire Company",
      description: "Enterprise-wide process optimization covering all departments and business units for maximum efficiency gains."
    },
    {
      icon: Calculator,
      title: "Precise ROI Calculation",
      description: "Detailed financial analysis showing exact return on investment and cost savings from process improvements."
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
            
            {/* Animated Gears */}
            <div className="flex justify-center mb-16">
              <AnimatedGears />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div 
          ref={benefitsAnimation.elementRef}
          className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 p-8 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
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