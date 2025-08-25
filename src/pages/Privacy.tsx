
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { useTranslation } from 'react-i18next';

const Privacy = () => {
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
            {t('privacy.title')}
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.introduction.title')}</h2>
              <div className="text-gray-300 space-y-4">
                <p>{t('privacy.introduction.paragraph1')}</p>
                <p>{t('privacy.introduction.paragraph2')}</p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.responsible.title')}</h2>
              <div className="text-gray-300 space-y-2">
                <p>{t('privacy.responsible.paragraph1')}</p>
                <br />
                <p>Crux Consulting, a brand of Reverchon Consulting GmbH </p>
                <p>CEOs and founders, Guenther Reverchon and Patrick Reverchon</p>
                <p>Patrick Reverchon</p>
                <p>Am Gasteig 6</p>
                <p>82335 Berg</p>
                <p>{t('impressum.legalInfo.phone')}: +49 (0)152 04444450</p>
                <p>{t('impressum.legalInfo.email')}: contact@crux-consulting.ai</p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.accessData.title')}</h2>
              <div className="text-gray-300 space-y-4">
                <p>{t('privacy.accessData.paragraph1')}</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>{t('privacy.accessData.items.browserType')}</li>
                  <li>{t('privacy.accessData.items.operatingSystem')}</li>
                  <li>{t('privacy.accessData.items.referrerUrl')}</li>
                  <li>{t('privacy.accessData.items.hostname')}</li>
                  <li>{t('privacy.accessData.items.requestTime')}</li>
                  <li>{t('privacy.accessData.items.ipAddress')}</li>
                </ul>
                <p>{t('privacy.accessData.paragraph2')}</p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.contact.title')}</h2>
              <div className="text-gray-300 space-y-4">
                <p>{t('privacy.contact.paragraph1')}</p>
                <p>{t('privacy.contact.paragraph2')}</p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.rights.title')}</h2>
              <div className="text-gray-300 space-y-4">
                <p>{t('privacy.rights.paragraph1')}</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>{t('privacy.rights.items.dataAccess')}</li>
                  <li>{t('privacy.rights.items.dataCorrection')}</li>
                  <li>{t('privacy.rights.items.dataDeletion')}</li>
                  <li>{t('privacy.rights.items.processingRestriction')}</li>
                  <li>{t('privacy.rights.items.dataPortability')}</li>
                  <li>{t('privacy.rights.items.processingObjection')}</li>
                </ul>
                <p>{t('privacy.rights.paragraph2')}</p>
                <p>{t('privacy.rights.paragraph3')}</p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.changes.title')}</h2>
              <p className="text-gray-300">{t('privacy.changes.paragraph1')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
