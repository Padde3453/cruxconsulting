
import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const WhyCruxSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent py-[5px] md:text-5xl">
          {t('whyCrux.title')}
        </h2>
        <div className="text-lg text-gray-300 leading-relaxed space-y-6">
          <p>{t('whyCrux.subtitle')}</p>
        </div>
      </div>
    </section>
  );
};

export default WhyCruxSection;
