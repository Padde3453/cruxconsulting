import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const STORAGE_KEY = 'newsletterPopupSeen';
const DELAY_MS = 15000;

const EXCLUDED = ['/auth', '/.lovable/oauth', '/demo/'];

const NewsletterPopup = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const isGerman = i18n.language.startsWith('de');

  const excluded = EXCLUDED.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (excluded) return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, [excluded]);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!open || excluded) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-popup-title"
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label={t('newsletter.close')}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <h2
          id="newsletter-popup-title"
          className="text-xl font-semibold text-white pr-8"
        >
          {t('newsletter.title')}
        </h2>
        <p className="mt-2 text-sm text-gray-400">{t('newsletter.subline')}</p>
        {!isGerman && (
          <p className="mt-3 text-xs text-brand-blue">{t('newsletter.germanOnly')}</p>
        )}

        <NewsletterForm className="mt-5" />
      </div>
    </div>
  );
};

export default NewsletterPopup;