import { useEffect, useState } from 'react';
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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const DetailedServicesCarousel = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('de') ? 'de' : 'en';
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);

  const services = [
    {
      title: t('tenderAssistant.title'),
      description: t('tenderAssistant.shortDescription'),
      path: '/services/tender-assistant',
      icon: FileSearch,
    },
    {
      title: t('automation.title'),
      description: t('automation.description'),
      path: '/services/automation',
      icon: Settings,
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
      title: t('aiCompliance.title'),
      description: t('aiCompliance.description'),
      path: '/services/ai-compliance',
      icon: Scale,
    },
  ];

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 2 : w >= 640 ? 2 : 1);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const maxIndex = Math.max(0, services.length - perView);
  const safeIndex = Math.min(index, maxIndex);
  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="py-16" aria-label={t('services.detailedServices.title')}>
      <div className="text-center mb-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent pb-2">
          {t('services.detailedServices.title')}
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          {t('services.detailedServices.subtitle')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(safeIndex * 100) / perView}%)`,
            }}
          >
            {services.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={i}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / perView}%` }}
                >
                  <div className="group bg-gradient-to-br from-gray-800/60 to-gray-700/35 backdrop-blur-md border border-gray-600/40 hover:border-brand-blue/60 rounded-2xl p-8 lg:p-10 flex flex-col h-full min-h-[420px] transition-colors duration-300">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                        <IconComponent className="w-7 h-7 text-brand-blue" />
                      </div>
                      <h3
                        className="text-2xl lg:text-3xl font-bold text-white leading-tight hyphens-auto break-words"
                        lang={currentLang}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-8 flex-grow text-base lg:text-lg leading-relaxed">
                      {service.description}
                    </p>
                    <Button asChild variant="secondary" className="w-full mt-auto">
                      <Link to={service.path}>
                        {t('services.learnMore')}{' '}
                        <Plus className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={safeIndex === 0}
              aria-label={t('common.previous', 'Previous')}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={safeIndex >= maxIndex}
              aria-label={t('common.next', 'Next')}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === safeIndex ? 'w-8 bg-brand-blue' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesCarousel;