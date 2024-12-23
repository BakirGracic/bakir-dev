import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/og/'],
			},
		],
		sitemap: `${process.env.APP_URL}/sitemap.xml`,
	};
}
