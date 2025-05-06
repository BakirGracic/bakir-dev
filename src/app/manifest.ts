import { type MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Bakir Dev',
		short_name: 'Bakir Dev',
		start_url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
		scope: `${process.env.NEXT_PUBLIC_APP_URL}/`,
		display: 'standalone',
		background_color: '#000000',
		theme_color: '#000000',
		icons: [
			{
				src: '/web-app-manifest-192x192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'maskable'
			},
			{
				src: '/web-app-manifest-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable'
			}
		],
		screenshots: [
			{
				src: `${process.env.NEXT_PUBLIC_API_URL}/og.png`,
				sizes: '1200x630',
				type: 'image/png'
			}
		],
		shortcuts: [
			{
				name: 'Bakir Gracić | Blog',
				url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`
			},
			{
				name: 'Bakir Gracić | Projects',
				url: `${process.env.NEXT_PUBLIC_APP_URL}/projects`
			},
			{
				name: 'Bakir Gracić | Certifications',
				url: `${process.env.NEXT_PUBLIC_APP_URL}/certifications`
			},
			{
				name: 'Bakir Gracić | Endorsements',
				url: `${process.env.NEXT_PUBLIC_APP_URL}/endorsements`
			},
			{
				name: 'Bakir Gracić | Links',
				url: `${process.env.NEXT_PUBLIC_APP_URL}/links`
			}
		]
	};
}
