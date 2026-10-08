import { useEffect, useLayoutEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TenderAssistant from '@/pages/services/TenderAssistant';
import SolutionPageView from '@/pages/SolutionPage';
import NotFound from '@/pages/NotFound';
import { getSolutionPage } from '@/data/solutions';
import { ROUTE_PATHS } from '@/data/localizedRoutes';
import { normalizeLang, type Lang } from '@/data/site';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/** Keeps i18next in sync with the language encoded in the URL (runs before paint). */
export const useUrlLanguage = (lang: Lang) => {
  const { i18n } = useTranslation();
  useIsoLayoutEffect(() => {
    if (normalizeLang(i18n.language) !== lang) i18n.changeLanguage(lang);
  }, [lang, i18n]);
};

export const TenderAssistantRoute = ({ lang }: { lang: Lang }) => {
  useUrlLanguage(lang);
  return <TenderAssistant lang={lang} />;
};

export const SolutionRoute = ({ lang }: { lang: Lang }) => {
  const { slug } = useParams();
  useUrlLanguage(lang);
  const page = getSolutionPage(lang, slug);
  if (!page) return <NotFound />;
  return <SolutionPageView page={page} />;
};

/**
 * Legacy /services/tender-assistant: redirects to the visitor's explicitly
 * stored language, otherwise to the English (x-default) URL. No browser/bot sniffing.
 */
export const LegacyTenderRedirect = () => {
  const { search, hash } = useLocation();
  let stored: string | null = null;
  try {
    stored = localStorage.getItem('i18nextLng');
  } catch {
    stored = null;
  }
  const lang: Lang = stored ? normalizeLang(stored) : 'en';
  return <Navigate to={`${ROUTE_PATHS.tenderAssistant[lang]}${search}${hash}`} replace />;
};
