export default function manifest() {
	return {
		name: 'Bakir Gracić | The Bosnian Dev',
		short_name: 'bakir.dev',
		description:
			"Explore The Bosnian Developer's personal website & blog for insightful tips, helpful advice, fun & educational content on software development. Uncover his top projects, achievements, certifications, and find links to connect",
		start_url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
		scope: `${process.env.NEXT_PUBLIC_APP_URL}/`,
		display: 'standalone',
		icons: [
			{
				src: '/web-app-manifest-192x192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'maskable',
			},
			{
				src: '/web-app-manifest-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'maskable',
			},
		],
		shortcuts: [
			{
				name: 'Bakir Gracić | Blog',
				url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
			},
			{
				name: 'Bakir Gracić | Projects',
				url: `${process.env.NEXT_PUBLIC_APP_URL}/projects`,
			},
			{
				name: 'Bakir Gracić | Certifications',
				url: `${process.env.NEXT_PUBLIC_APP_URL}/certifications`,
			},
			{
				name: 'Bakir Gracić | Endorsements',
				url: `${process.env.NEXT_PUBLIC_APP_URL}/endorsements`,
			},
			{
				name: 'Bakir Gracić | Links',
				url: `${process.env.NEXT_PUBLIC_APP_URL}/links`,
			},
		],
		screenshots: [
			{
				src: `${process.env.NEXT_PUBLIC_APP_URL}/og`,
				sizes: '1200x630',
				type: 'image/png',
			},
		],
	};
}
