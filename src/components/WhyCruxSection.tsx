
import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const WhyCruxSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center">
          {/* Text Content - 70% width */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent py-[5px] text-center md:text-5xl">
              {t('whyCrux.title')}
            </h2>
            <div className="text-lg text-gray-300 leading-relaxed space-y-6">
              <p>
                {t('whyCrux.subtitle')}
              </p>
            </div>
          </div>

          {/* Image - 30% width - hidden on mobile */}
          <div className="lg:col-span-3 hidden lg:flex justify-center">
            <img 
              src="/lovable-uploads/europe_flag.gif" 
              alt="European Union Flag" 
              className="w-full h-auto max-w-[434px] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCruxSection;
