import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MessageCircle, Users, Globe, Zap, Settings, HandHeart, RefreshCw, Palette } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const AiChatbot = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'clients' | 'team'>(() => (location.pathname.includes('/team') ? 'team' : 'clients'));
  
  // Scroll animations
  const heroAnimation = useScrollAnimation();
  const descriptionAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  useEffect(() => {
    setActiveTab(location.pathname.includes('/team') ? 'team' : 'clients');
  }, [location.pathname]);

  const handleBooking = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const clientsFeatures = [
    { 
      icon: RefreshCw, 
      text: t('aiChatbot.clients.features.0'),
      color: 'text-brand-blue'
    },
    { 
      icon: HandHeart, 
      text: t('aiChatbot.clients.features.1'),
      color: 'text-brand-green'
    },
    { 
      icon: Globe, 
      text: t('aiChatbot.clients.features.2'),
      color: 'text-brand-blue'
    },
    { 
      icon: MessageCircle, 
      text: t('aiChatbot.clients.features.3'),
      color: 'text-brand-green'
    },
    { 
      icon: Zap, 
      text: t('aiChatbot.clients.features.4'),
      color: 'text-brand-blue'
    },
    { 
      icon: RefreshCw, 
      text: t('aiChatbot.clients.features.5'),
      color: 'text-brand-green'
    },
    { 
      icon: Users, 
      text: t('aiChatbot.clients.features.6'),
      color: 'text-brand-blue'
    },
    { 
      icon: Palette, 
      text: t('aiChatbot.clients.features.7'),
      color: 'text-brand-green'
    }
  ];

  const teamFeatures = [
    { 
      icon: MessageCircle, 
      text: t('aiChatbot.team.features.0'),
      color: 'text-brand-blue'
    },
    { 
      icon: Users, 
      text: t('aiChatbot.team.features.1'),
      color: 'text-brand-green'
    },
    { 
      icon: HandHeart, 
      text: t('aiChatbot.team.features.2'),
      color: 'text-brand-blue'
    },
    { 
      icon: Settings, 
      text: t('aiChatbot.team.features.3'),
      color: 'text-brand-green'
    },
    { 
      icon: RefreshCw, 
      text: t('aiChatbot.team.features.4'),
      color: 'text-brand-blue'
    },
    { 
      icon: Zap, 
      text: t('aiChatbot.team.features.5'),
      color: 'text-brand-green'
    },
    { 
      icon: Users, 
      text: t('aiChatbot.team.features.6'),
      color: 'text-brand-blue'
    },
    { 
      icon: Settings, 
      text: t('aiChatbot.team.features.7'),
      color: 'text-brand-green'
    }
  ];

  const currentFeatures = activeTab === 'clients' ? clientsFeatures : teamFeatures;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden relative">
      <FloatingElements />
      
      <Header onBooking={handleBooking} />

      {/* Hero Section */}
      <section className="flex items-center justify-center pt-28 pb-0 relative">
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
          <div className="text-center mb-9 max-w-4xl mx-auto">
            {activeTab === 'team' ? (
              <>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    Turn Your Intranet to an actual{' '}
                  </span>
                  <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                    Helpful
                  </span>
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    {' '}Tool.
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Give your team all the information they need while reducing time and headache doing so.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    {t('aiChatbot.hero.title')}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                    {t('aiChatbot.hero.subtitle')}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-7">
                  {t('aiChatbot.hero.description')}
                </p>
              </>
            )}

            {/* Toggle Tabs */}
            <div className="flex justify-center mb-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-3 border border-gray-600 max-w-lg w-full">
                <div className="flex space-x-3">
                  <button
                    onClick={() => { setActiveTab('clients'); navigate('/services/ai-chatbot'); }}
                    className={`flex-1 px-12 py-4 rounded-full text-base font-medium transition-all duration-300 ${
                      activeTab === 'clients'
                        ? 'bg-gradient-to-r from-brand-blue to-brand-green text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {t('aiChatbot.forClients')}
                  </button>
                  <button
                    onClick={() => { setActiveTab('team'); navigate('/services/ai-chatbot/team'); }}
                    className={`flex-1 px-12 py-4 rounded-full text-base font-medium transition-all duration-300 ${
                      activeTab === 'team'
                        ? 'bg-gradient-to-r from-brand-blue to-brand-green text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {t('aiChatbot.forTeam')}
                  </button>
                </div>
              </div>
            </div>

            {activeTab === 'team' && (
              <p className="text-lg md:text-xl text-gray-300 mt-6">
                Do you really like to use your intranet? Do you find what you are looking for? Imagine an <span className="font-bold text-white">AI Assistant</span> that knows everything about your <span className="font-bold text-white">intranet and files</span> and gives you exactly what you need when you need it.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Description Section (clients only) */}
      {activeTab === 'clients' && (
        <section className="py-1 relative">
          <div 
            ref={descriptionAnimation.elementRef}
            className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
              descriptionAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed tracking-wider">
              We build <span className="font-bold text-white">smart Assistants</span> on your website, that provide{' '}
              <span className="font-bold text-white">tangible value</span> for your clients and prospects. No matter if for e-commerce or any other service, our AI Assistants{' '}
              <span className="font-bold text-white">increase revenue</span>,{' '}
              <span className="font-bold text-white">increase client satisfaction</span> while significantly{' '}
              <span className="font-bold text-white">decreasing strain</span> on your human service teams.
            </p>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 relative">
        <div 
          ref={featuresAnimation.elementRef}
          className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-1000 ${
            featuresAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {activeTab === 'clients' ? (
            /* For Clients - Features List and Video */
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left side - Features List */}
              <div className="space-y-6 order-1 lg:order-1">
                {currentFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`group flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-800/30 to-gray-700/20 backdrop-blur-sm rounded-lg border border-gray-600/30 hover:border-brand-blue/50 transition-all duration-1000 hover:transform hover:scale-105 ${
                        featuresAnimation.isVisible 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-10'
                      }`}
                      style={{ 
                        transitionDelay: featuresAnimation.isVisible ? `${index * 150}ms` : '0ms' 
                      }}
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center group-hover:from-brand-blue/20 group-hover:to-brand-green/20 transition-all duration-300`}>
                        <IconComponent className={`h-6 w-6 ${feature.color} transition-colors duration-300`} />
                      </div>
                      <p className="text-lg text-gray-200 group-hover:text-white transition-colors duration-300">
                        {feature.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Right side - Demo Video with 3D Effect */}
              <div className="relative order-2 lg:order-2">
                <div className="relative w-full max-w-md mx-auto">
                  {/* 3D Floating Effect Container */}
                  <div className="relative transform-gpu perspective-1000">
                    {/* Enhanced gel pillow shadow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 to-brand-green/30 rounded-2xl blur-3xl transform translate-y-8 scale-120"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/25 to-brand-green/25 rounded-2xl blur-2xl transform translate-y-6 scale-115"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/15 rounded-2xl blur-xl transform translate-y-4 scale-110"></div>
                    
                    {/* Video container with 3D effect */}
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden transform hover:translate-y-[-4px] transition-all duration-500 shadow-2xl">
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        disablePictureInPicture
                        controlsList="nodownload nofullscreen noremoteplayback"
                      >
                        <source src="/lovable-uploads/chat-demo.mp4" type="video/mp4" />
                        <source src="/lovable-uploads/chat-demo.webm" type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
                
                {/* Stats below video */}
                <div className="mt-8 bg-gradient-to-r from-gray-800/60 to-gray-700/40 backdrop-blur-sm rounded-lg p-6 border border-gray-600/30">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-brand-green">&lt; 2s</div>
                      <div className="text-sm text-gray-400">Response Time</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-brand-blue">95%</div>
                      <div className="text-sm text-gray-400">Accuracy Rate</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-brand-green">50+</div>
                      <div className="text-sm text-gray-400">Languages</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* For Team - Different Hero Section and Features Only */
            <div className="space-y-16">

               {/* Team Features - Full Width Grid */}
               <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                 {currentFeatures.map((feature, index) => {
                   const IconComponent = feature.icon;
                   return (
                     <div
                       key={index}
                       className={`group flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-800/30 to-gray-700/20 backdrop-blur-sm rounded-lg border border-gray-600/30 hover:border-brand-blue/50 transition-all duration-1000 hover:transform hover:scale-105 ${
                         featuresAnimation.isVisible 
                           ? 'opacity-100 translate-y-0' 
                           : 'opacity-0 translate-y-10'
                       }`}
                       style={{ 
                         transitionDelay: featuresAnimation.isVisible ? `${index * 100}ms` : '0ms' 
                       }}
                     >
                       <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center group-hover:from-brand-blue/20 group-hover:to-brand-green/20 transition-all duration-300`}>
                         <IconComponent className={`h-6 w-6 ${feature.color} transition-colors duration-300`} />
                       </div>
                       <p className="text-lg text-gray-200 group-hover:text-white transition-colors duration-300">
                         {feature.text}
                       </p>
                     </div>
                   );
                 })}
              </div>
            </div>
          )}
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
              Ready to Transform Your Customer Service?
            </h2>
            <p className="text-xl text-white mb-8">
              Let's discuss how AI can resolve 70% of your customer questions instantly.
            </p>
            <Button 
              onClick={handleBooking}
              size="lg" 
              className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 mx-auto transition-all duration-300 transform hover:scale-105"
            >
              <span>Book Your Demo</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiChatbot;