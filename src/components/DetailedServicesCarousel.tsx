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

const CARD_ANGLE = 360 / 6;

const DetailedServicesCarousel = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
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
      setProgress(0);
      return;
    }
    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = Math.max(1, (section.offsetHeight - vh) * 0.85);
      setProgress(Math.min(1, Math.max(0, -rect.top / total)));
    };
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        updateProgress();
        rafRef.current = null;
      });
    };
    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isDesktop]);

  const carouselRotation = isDesktop ? progress * CARD_ANGLE * (services.length - 1) : 0;

  return (
    <section
      ref={sectionRef}
      className="relative lg:h-[180vh]"
      aria-label={t('services.detailedServices.title')}
    >
      <div className="py-16 lg:py-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden flex flex-col justify-center">
        <div className="text-center mb-6 px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent pb-2">
            {t('services.detailedServices.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.detailedServices.subtitle')}
          </p>
        </div>

        <div className="px-6 lg:px-0 lg:h-[66vh] lg:min-h-[560px] lg:max-h-[660px] lg:[perspective:1400px] lg:[perspective-origin:center]">
          <div className="flex gap-6 flex-col lg:block lg:relative lg:w-full lg:h-full lg:[transform-style:preserve-3d]">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const angle = index * CARD_ANGLE - carouselRotation;
              const normalizedAngle = ((angle + 540) % 360) - 180;
              const angleRad = (normalizedAngle * Math.PI) / 180;
              const depth = Math.cos(angleRad);
              const sideOffset = Math.sin(angleRad) * 320;
              const scale = 0.72 + ((depth + 1) / 2) * 0.28;
              const rotateY = -normalizedAngle * 0.32;
              const opacity = 0.24 + ((depth + 1) / 2) * 0.76;
              const isFront = Math.abs(normalizedAngle) < CARD_ANGLE / 2;
              return (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-gray-800/60 to-gray-700/35 backdrop-blur-md border rounded-2xl p-8 lg:p-10 hover:border-brand-blue/50 transition-[border-color,opacity,filter] duration-300 flex flex-col w-full lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[min(880px,78vw)] lg:h-[min(620px,64vh)] lg:min-h-[540px] lg:will-change-transform ${
                    isFront
                      ? 'border-brand-blue/60 opacity-100 lg:blur-0'
                      : 'border-gray-600/30 opacity-45 lg:blur-[1px]'
                  }`}
                  style={
                    isDesktop
                      ? {
                          transform: `translate(-50%, -50%) translateX(${sideOffset}px) scale(${scale}) rotateY(${rotateY}deg)`,
                          opacity,
                          zIndex: Math.round((depth + 1) * 50),
                          pointerEvents: isFront ? 'auto' : 'none',
                        }
                      : undefined
                  }
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                      <IconComponent className="w-7 h-7 text-brand-blue" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-8 flex-grow text-base lg:text-lg leading-relaxed">
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