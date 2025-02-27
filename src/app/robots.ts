import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api', '/cli'],
    },
    sitemap: 'https://www.interweb.wtf/sitemap.xml',
  };
}
