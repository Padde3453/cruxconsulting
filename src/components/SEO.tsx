import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_LOGO, SITE_NAME, SITE_URL, type Lang } from '@/data/site';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  type?: string;
  /** Sets <html lang> and og:locale for language-specific URLs. */
  lang?: Lang;
  /** Reciprocal hreflang alternates (paths). Include the page itself. */
  alternates?: { hrefLang: string; path: string }[];
  jsonLd?: object[];
}

const SEO = ({ title, description, canonicalPath, image, type = 'website', lang, alternates, jsonLd }: SEOProps) => {
  const location = useLocation();
  const path = canonicalPath ?? location.pathname;
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? SITE_LOGO;

  return (
    <Helmet htmlAttributes={lang ? { lang } : undefined}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {alternates?.map((a) => (
        <link key={a.hrefLang} rel="alternate" hrefLang={a.hrefLang} href={`${SITE_URL}${a.path}`} />
      ))}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      {lang && <meta property="og:locale" content={lang === 'de' ? 'de_DE' : 'en_US'} />}
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {jsonLd?.map((data, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(data)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
