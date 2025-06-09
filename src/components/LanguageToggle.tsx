
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = i18n.language;

  const languages = [
    { code: 'en', flag: '🇬🇧' },
    { code: 'de', flag: '🇩🇪' }
  ];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-300 hover:text-gray-400"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <ChevronDown size={16} />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg min-w-[60px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center justify-center px-3 py-2 text-left hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                currentLanguage === lang.code ? 'bg-gray-700 text-gray-300' : 'text-gray-300 hover:text-gray-400'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
