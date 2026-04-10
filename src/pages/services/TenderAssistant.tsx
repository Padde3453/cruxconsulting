import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, AlertTriangle, Clock, Copy, ShieldCheck, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const TenderAssistant = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language.startsWith('de') ? 'de' : 'en';

  const heroAnimation = useScrollAnimation();
  const challengesAnimation = useScrollAnimation();
  const solutionAnimation = useScrollAnimation();
  const pricingAnimation = useScrollAnimation();
  const blogAnimation = useScrollAnimation();
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

  const challenges = [
    {
      icon: Clock,
      title: t('tenderAssistant.challenges.1.title'),
      description: t('tenderAssistant.challenges.1.description'),
    },
    {
      icon: AlertTriangle,
      title: t('tenderAssistant.challenges.2.title'),
      description: t('tenderAssistant.challenges.2.description'),
    },
    {
      icon: Copy,
      title: t('tenderAssistant.challenges.3.title'),
      description: t('tenderAssistant.challenges.3.description'),
    },
  ];

  const pricingFeatures = [
    t('tenderAssistant.pricing.features.0'),
    t('tenderAssistant.pricing.features.1'),
    t('tenderAssistant.pricing.features.2'),
    t('tenderAssistant.pricing.features.3'),
    t('tenderAssistant.pricing.features.4'),
    t('tenderAssistant.pricing.features.5'),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden relative">
      <FloatingElements />
      <Header onBooking={handleBooking} />

      {/* Rotating icon keyframes */}
      <style>{`
        @keyframes rotateY {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        .icon-rotate-y {
          animation: rotateY 3s linear infinite;
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-32 pb-8 relative">
        <div
          ref={heroAnimation.elementRef}
          className={`relative z-10 w-full px-6 transition-all duration-1000 ${
            heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {t('tenderAssistant.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              {t('tenderAssistant.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 relative">
        <div
          ref={challengesAnimation.elementRef}
          className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${
            challengesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('tenderAssistant.challengesTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card key={index} className="bg-gray-800/30 border-gray-700 p-8 hover:bg-gray-800/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="icon-rotate-y mx-auto mb-6" style={{ perspective: '600px' }}>
                      <IconComponent className="w-14 h-14 text-brand-blue mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{challenge.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{challenge.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* One Solution — Two Components */}
      <section className="py-16 relative">
        <div
          ref={solutionAnimation.elementRef}
          className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${
            solutionAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              {t('tenderAssistant.solutionTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Project Management Component */}
            <Card className="bg-gray-800/30 border-gray-700 p-8 hover:bg-gray-800/50 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-blue-600 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t('tenderAssistant.projectManagement.title')}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                {t('tenderAssistant.projectManagement.description')}
              </p>
              <div className="bg-gradient-to-r from-brand-blue/10 to-brand-green/10 border border-brand-blue/30 rounded-lg p-6">
                <div className="text-center mb-3">
                  <span className="text-5xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                    93%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-green transition-all duration-1000"
                    style={{ width: '93%' }}
                  />
                </div>
                <p className="text-gray-300 mt-3 text-center">{t('tenderAssistant.projectManagement.stat')}</p>
              </div>
            </Card>

            {/* Auto-Fill Component */}
            <Card className="bg-gray-800/30 border-gray-700 p-8 hover:bg-gray-800/50 transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-green to-green-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t('tenderAssistant.autoFill.title')}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                {t('tenderAssistant.autoFill.description')}
              </p>
              <div className="bg-gradient-to-r from-brand-green/10 to-brand-blue/10 border border-brand-green/30 rounded-lg p-6">
                <div className="text-center mb-3">
                  <span className="text-5xl font-bold bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent">
                    66%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-green to-brand-blue transition-all duration-1000"
                    style={{ width: '66%' }}
                  />
                </div>
                <p className="text-gray-300 mt-3 text-center">{t('tenderAssistant.autoFill.stat')}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 relative">
        <div
          ref={pricingAnimation.elementRef}
          className={`max-w-3xl mx-auto px-6 transition-all duration-1000 ${
            pricingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              {t('tenderAssistant.pricing.title')}
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {pricingFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle className="w-7 h-7 text-brand-green flex-shrink-0" />
                <span className="text-lg text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Reference Section */}
      <section className="py-12 relative">
        <div
          ref={blogAnimation.elementRef}
          className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
            blogAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-2xl md:text-3xl font-semibold text-gray-200">
            {t('tenderAssistant.blogReference')}{' '}
            <Link
              to={`/${currentLang}/blog`}
              className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent hover:opacity-80 transition-opacity underline decoration-brand-blue"
            >
              {t('tenderAssistant.blogLink')}
            </Link>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 relative">
        <div
          ref={ctaAnimation.elementRef}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center bg-gradient-to-r from-gray-800/40 to-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('tenderAssistant.cta.title')}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('tenderAssistant.cta.description')}
            </p>
            <Button
              onClick={handleBooking}
              size="lg"
              variant="gradient"
              enableMouseGradient
              className="rounded-full px-8 py-4 text-lg flex items-center space-x-2 mx-auto"
            >
              <span>{t('tenderAssistant.cta.buttonText')}</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TenderAssistant;
