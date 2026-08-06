import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const STORAGE_KEY = 'newsletterPopupSeen';
const DELAY_MS = 15000;
// TEMPORARY: show the popup on every page load for review.
// Set back to true to only show it once per visitor.
const SHOW_ONCE = false;

const EXCLUDED = ['/auth', '/.lovable/oauth', '/demo/'];

const NewsletterPopup = () => {
  const { t, i18n } = useTranslation();
  const { pathname, search } = useLocation();
  const [open, setOpen] = useState(false);
  const isGerman = i18n.language.startsWith('de');

  const excluded = EXCLUDED.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (excluded) return;
    const forced = new URLSearchParams(search).get('newsletter') === '1';
    if (forced) {
      setOpen(true);
      return;
    }
    if (SHOW_ONCE && localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, [excluded, search]);

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
        className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-12 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label={t('newsletter.close')}
          className="absolute right-5 top-5 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2
          id="newsletter-popup-title"
          className="text-2xl sm:text-3xl font-semibold text-white pr-10 leading-tight"
        >
          {t('newsletter.title')}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">{t('newsletter.subline')}</p>
        {!isGerman && (
          <p className="mt-4 text-sm text-brand-blue">{t('newsletter.germanOnly')}</p>
        )}

        <NewsletterForm className="mt-8" size="lg" />
      </div>
    </div>
  );
};

export default NewsletterPopup;