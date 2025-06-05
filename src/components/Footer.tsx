
import { Linkedin, Instagram } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="border-t border-gray-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center space-x-4 mb-6">
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
        <div className="flex justify-center items-center space-x-4 mb-6">
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
        <div className="flex justify-center items-center">
          <p className="text-gray-500">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
