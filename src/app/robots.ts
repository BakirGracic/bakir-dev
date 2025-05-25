import { type MetadataRoute } from 'next';

export default function Robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/og']
			}
		],
		sitemap: `${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml`
	};
}
