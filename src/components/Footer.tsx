import { Linkedin, Instagram } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isGerman = i18n.language.startsWith('de');

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="border-t border-gray-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Newsletter */}
        <div className="w-full md:max-w-md text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">{t('newsletter.title')}</h2>
          <p className="mt-2 text-sm text-gray-400">{t('newsletter.subline')}</p>
          {!isGerman && (
            <p className="mt-2 text-xs text-brand-blue">{t('newsletter.germanOnly')}</p>
          )}
          <NewsletterForm className="mt-4" />
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-end">
        <div className="flex items-center space-x-4 mb-6">
          <a 
            href="https://www.instagram.com/crux_consulting.ai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/company/crux-consulting-ai/?viewAsMember=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <div className="flex items-center space-x-4 mb-6">
          <Link 
            to="/impressum" 
            onClick={handleLinkClick}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Impressum
          </Link>
          <span className="text-gray-500">•</span>
          <Link 
            to="/privacy" 
            onClick={handleLinkClick}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {t('footer.privacyPolicy')}
          </Link>
        </div>
        <div className="flex items-center">
          <p className="text-gray-500 text-sm">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
