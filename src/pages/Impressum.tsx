
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { useTranslation } from 'react-i18next';

const Impressum = () => {
  const { t } = useTranslation();

  const handleBooking = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      <FloatingElements />
      
      <Header onBooking={handleBooking} />

      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-center">
            {t('impressum.title')}
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('impressum.legalInfo.title')}</h2>
              <div className="text-gray-300 space-y-2">
                <p>Crux Consulting, a brand of Reverchon Consulting GmbH ({t('impressum.legalInfo.inPreparation')})</p>
                <p>Am Gasteig 6 </p>
                <p>82335 Berg</p>
                <p>Deutschland</p>
                <br />
                <p>{t('impressum.legalInfo.phone')}: +49 (0)152 04444450</p>
                <p>{t('impressum.legalInfo.email')}: contact@crux-consulting.ai</p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">{t('impressum.responsibleContent.title')}</h2>
              <div className="text-gray-300 space-y-2">
                <p>Patrick Reverchon</p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">{t('impressum.companyStatus.title')}</h2>
              <p className="text-gray-300">{t('impressum.companyStatus.description')}</p>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">{t('impressum.disclaimer.title')}</h2>
              <p className="text-gray-300">{t('impressum.disclaimer.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impressum;
