import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Bot,
  Lightbulb,
  ClipboardList,
  Settings,
  Scale,
  FileSearch,
  Plus,
} from 'lucide-react';

const DetailedServicesCarousel = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );

  const services = [
    {
      title: t('tenderAssistant.title'),
      description: t('tenderAssistant.shortDescription'),
      path: '/services/tender-assistant',
      icon: FileSearch,
    },
    {
      title: t('aiChatbot.title'),
      description: t('aiChatbot.hero.description'),
      path: '/services/ai-chatbot',
      icon: Bot,
    },
    {
      title: t('workshops.title'),
      description: t('workshops.description'),
      path: '/services/workshops',
      icon: Lightbulb,
    },
    {
      title: t('processAudit.title'),
      description: t('processAudit.description'),
      path: '/services/process-audit',
      icon: ClipboardList,
    },
    {
      title: t('automation.title'),
      description: t('automation.description'),
      path: '/services/automation',
      icon: Settings,
    },
    {
      title: t('aiCompliance.title'),
      description: t('aiCompliance.description'),
      path: '/services/ai-compliance',
      icon: Scale,
    },
  ];

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setTranslate(0);
      return;
    }
    const onScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = section.offsetHeight - vh;
      const progress = Math.min(1, Math.max(0, -rect.top / total));
      const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth);
      setTranslate(progress * maxTranslate);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      className="relative lg:h-[260vh]"
      aria-label={t('services.detailedServices.title')}
    >
      <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden flex flex-col justify-center py-20">
        <div className="text-center mb-10 px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent pb-2">
            {t('services.detailedServices.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.detailedServices.subtitle')}
          </p>
        </div>

        <div className="lg:overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 px-6 lg:pl-[8vw] lg:pr-[8vw] flex-col lg:flex-row lg:will-change-transform"
            style={
              isDesktop
                ? { transform: `translate3d(-${translate}px, 0, 0)` }
                : undefined
            }
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/40 to-gray-700/30 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8 hover:border-brand-blue/50 transition-colors duration-300 flex flex-col w-full lg:w-[360px] lg:min-w-[360px] lg:h-[440px] shrink-0"
                >
                  <div className="w-14 h-14 flex items-center justify-center mb-5 rounded-xl bg-white/5 border border-white/10">
                    <IconComponent className="w-7 h-7 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 flex-grow text-[15px] leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full mt-auto"
                  >
                    <Link to={service.path}>
                      {t('services.learnMore')}{' '}
                      <Plus className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesCarousel;