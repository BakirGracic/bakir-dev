export default function robots() {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/og'],
			},
		],
		sitemap: `${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml`,
	};
}
