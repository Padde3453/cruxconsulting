/**
 * Build-time prerender entry (loaded by the Vite plugin in vite.config.ts via ssrLoadModule).
 * Renders the same React components the browser renders for the language-specific
 * tender/solution URLs, so their initial HTML contains real H1, copy and metadata.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { TooltipProvider } from '@/components/ui/tooltip';
import i18n from '@/i18n/config';
import { TenderAssistantRoute, SolutionRoute } from '@/routes/LocalizedPages';
import { prerenderPaths } from '@/data/localizedRoutes';
import { normalizeLang } from '@/data/site';

export { prerenderPaths };

export async function render(url: string) {
  const lang = normalizeLang(url.split('/')[1]);
  await i18n.changeLanguage(lang);
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <I18nextProvider i18n={i18n}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <Routes>
              <Route path="/de/services/tender-assistant" element={<TenderAssistantRoute lang="de" />} />
              <Route path="/en/services/tender-assistant" element={<TenderAssistantRoute lang="en" />} />
              <Route path="/de/loesungen/:slug" element={<SolutionRoute lang="de" />} />
              <Route path="/en/solutions/:slug" element={<SolutionRoute lang="en" />} />
            </Routes>
          </StaticRouter>
        </TooltipProvider>
      </I18nextProvider>
    </HelmetProvider>,
  );
  const h = helmetContext.helmet!;
  return {
    html,
    lang,
    head: [h.title.toString(), h.meta.toString(), h.link.toString(), h.script.toString()].join('\n'),
  };
}
