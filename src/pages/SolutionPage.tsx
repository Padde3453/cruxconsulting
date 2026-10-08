import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { SolutionPage } from '@/data/solutions';
import { ROUTE_PATHS } from '@/data/localizedRoutes';
import { X_DEFAULT_LANG } from '@/data/site';
import { buildServicePageGraph } from '@/lib/structuredData';

const UI = {
  de: {
    home: 'Startseite',
    tender: 'Ausschreibungsassistent',
    ctaTitle: 'An einer echten Ausschreibung ausprobieren?',
    ctaText: 'Buchen Sie eine kostenlose Demo. Wir zeigen Ihnen den Ausschreibungsassistenten gern an einem Beispiel aus Ihrem Alltag.',
    ctaButton: 'Demo buchen',
    breadcrumb: 'Brotkrumennavigation',
  },
  en: {
    home: 'Home',
    tender: 'Tender Assistant',
    ctaTitle: 'Want to try it on a real tender?',
    ctaText: 'Book a free demo. We are happy to show you the Tender Assistant using an example from your day-to-day work.',
    ctaButton: 'Book a demo',
    breadcrumb: 'Breadcrumb',
  },
} as const;

const SolutionPageView = ({ page }: { page: SolutionPage }) => {
  const navigate = useNavigate();
  const ui = UI[page.language];
  const tenderPath = ROUTE_PATHS.tenderAssistant[page.language];

  const handleBooking = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const dePath = page.language === 'de' ? page.path : page.translationPath;
  const enPath = page.language === 'en' ? page.path : page.translationPath;
  const crumbs = [
    { name: ui.home, path: '/' },
    { name: ui.tender, path: tenderPath },
    { name: page.breadcrumbLabel, path: page.path },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden relative">
      <SEO
        title={page.title}
        description={page.description}
        canonicalPath={page.path}
        lang={page.language}
        alternates={[
          { hrefLang: 'de', path: dePath },
          { hrefLang: 'en', path: enPath },
          { hrefLang: 'x-default', path: X_DEFAULT_LANG === 'de' ? dePath : enPath },
        ]}
        jsonLd={[
          buildServicePageGraph({
            lang: page.language,
            path: page.path,
            title: page.title,
            description: page.description,
            serviceName: page.h1,
            serviceDescription: page.summary,
            breadcrumbs: crumbs,
          }),
        ]}
      />
      <FloatingElements />
      <Header onBooking={handleBooking} />

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-16">
        <nav aria-label={ui.breadcrumb} className="mb-8 text-sm text-gray-400">
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2">
                {i < crumbs.length - 1 ? (
                  <>
                    <Link to={c.path} className="hover:text-white transition-colors">{c.name}</Link>
                    <span aria-hidden="true">/</span>
                  </>
                ) : (
                  <span aria-current="page" className="text-gray-300">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight hyphens-auto break-words bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent" lang={page.language}>
            {page.h1}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{page.summary}</p>
        </header>

        <div className="space-y-12">
          {page.sections.map((section) => {
            const ListTag = section.ordered ? 'ol' : 'ul';
            return (
              <section key={section.heading}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{section.heading}</h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed mb-4">{p}</p>
                ))}
                {section.bullets && (
                  <ListTag className={`space-y-3 text-gray-300 leading-relaxed ${section.ordered ? 'list-decimal pl-6 marker:text-brand-green' : ''}`}>
                    {section.bullets.map((b, i) => (
                      <li key={i} className={section.ordered ? 'pl-2' : 'flex gap-3'}>
                        {!section.ordered && <CheckCircle className="w-5 h-5 mt-1 text-brand-green flex-shrink-0" aria-hidden="true" />}
                        <span>{b}</span>
                      </li>
                    ))}
                  </ListTag>
                )}
              </section>
            );
          })}

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">{page.useCasesTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {page.useCases.map((u) => (
                <Card key={u.title} className="bg-gray-800/30 border-gray-700 p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{u.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{u.text}</p>
                </Card>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-brand-blue/40 bg-brand-blue/10 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-brand-blue flex-shrink-0" aria-hidden="true" />
              {page.limits.heading}
            </h2>
            <ul className="space-y-3 text-gray-200 leading-relaxed list-disc pl-6">
              {page.limits.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">{page.faqTitle}</h2>
            <div className="space-y-4">
              {page.faqs.map((f) => (
                <div key={f.question} className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{f.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">{page.relatedTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {page.related.map((r) => (
                <Link
                  key={r.path}
                  to={r.path}
                  className="group block bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:bg-gray-800/50 hover:border-brand-blue/50 transition-all"
                >
                  <span className="block text-lg font-semibold text-white mb-2 group-hover:text-brand-blue transition-colors">{r.label}</span>
                  {r.description && <span className="block text-gray-300 text-sm leading-relaxed">{r.description}</span>}
                </Link>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-gray-800/40 to-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/30 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">{ui.ctaTitle}</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{ui.ctaText}</p>
            <Button
              onClick={handleBooking}
              size="lg"
              variant="gradient"
              enableMouseGradient
              className="rounded-full px-8 py-4 text-lg flex items-center space-x-2 mx-auto"
            >
              <span>{ui.ctaButton}</span>
              <ArrowRight size={20} />
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SolutionPageView;
