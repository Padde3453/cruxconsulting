import { ORGANIZATION_ID, SITE_NAME, SITE_URL, WEBSITE_ID, absoluteUrl, type Lang } from '@/data/site';

interface Crumb { name: string; path: string }

interface ServiceGraphInput {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  serviceName: string;
  serviceDescription: string;
  breadcrumbs: Crumb[];
}

/** Service + WebPage + BreadcrumbList graph. All values must mirror visible page text. */
export const buildServicePageGraph = (input: ServiceGraphInput) => {
  const url = absoluteUrl(input.path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: input.title,
        description: input.description,
        inLanguage: input.lang,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': `${url}#service` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: input.serviceName,
        description: input.serviceDescription,
        serviceType: input.serviceName,
        url,
        provider: { '@type': 'Organization', '@id': ORGANIZATION_ID, name: SITE_NAME, url: `${SITE_URL}/` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: input.breadcrumbs.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.name,
          item: absoluteUrl(c.path),
        })),
      },
    ],
  };
};
