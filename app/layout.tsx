import '@/css/tailwind-base.css';
import '@/css/global.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import type { Viewport } from 'next';

export const metadata: Metadata = {
	title: {
		default: 'Bakir the Dev',
		template: 'Bakir the Dev | %s',
	},
	description:
		"Discover Bakir's personal website & blog for insightful tips, helpful advice, fun & educational content on software development. Explore my top projects, achievements, certifications, and find links to connect",
	generator: 'Next.js 15',
	applicationName: 'Bakir the Dev',
	referrer: 'origin',
	keywords:
		'bakir, gracic, bakir gracic, blog, personal website, full stack web developer, bosnia, bosnia it, programming, coding, web development, technology, tutorials, projects, achievements, certifications',
	authors: [{ name: 'BakirGracic', url: 'https://bakir.dev' }],
	creator: 'BakirGracic',
	publisher: 'Bakir the Dev',
	metadataBase: new URL(process.env.APP_URL || ''),
	alternates: {
		canonical: `${process.env.APP_URL}/`,
		languages: {
			'en-US': `${process.env.APP_URL}/`,
		},
	},
	openGraph: {
		title: 'Bakir the Dev',
		description:
			"Discover Bakir's personal website & blog for insightful tips, helpful advice, fun & educational content on software development. Explore my top projects, achievements, certifications, and find links to connect",
		url: process.env.APP_URL,
		siteName: 'Bakir the Dev',
		images: [
			{
				url: `${process.env.APP_URL}/og.png`,
				alt: 'Bakir the Dev OpenGraph Image',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
	},
	icons: {
		icon: [
			{ url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
			{ url: '/favicon.svg', type: 'image/svg+xml' },
		],
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	manifest: `${process.env.APP_URL}/site.webmanifest`,
	twitter: {
		card: 'app',
		title: 'Bakir the Dev',
		description:
			"Discover Bakir's personal website & blog for insightful tips, helpful advice, fun & educational content on software development. Explore my top projects, achievements, certifications, and find links to connect",
		siteId: '1704851009380704256',
		creator: '@gracic_bakir',
		creatorId: '1704851009380704256',
		images: {
			url: `${process.env.APP_URL || ''}/og.png`,
			alt: 'Bakir the Dev OpenGraph Image',
		},
		app: {
			name: 'twitter_app',
			id: {
				iphone: 'twitter_app://iphone',
				ipad: 'twitter_app://ipad',
				googleplay: 'twitter_app://googleplay',
			},
			url: {
				iphone: 'https://iphone_url',
				ipad: 'https://ipad_url',
			},
		},
	},
	appleWebApp: {
		title: 'Bakir the Dev',
	},
	appLinks: {
		web: {
			url: process.env.APP_URL || '',
			should_fallback: true,
		},
	},
	category:
		'technology, web development, blog, blogging, it, software, programming, coding, tutorials, projects, achievements, certifications, self-improvement',
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: dark)', color: '#000000' },
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
	],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang='en-US'
			className='min-w-[360px]'
		>
			<body className='text-black bg-white dark:text-white dark:bg-black antialiased my-6 select-none max-w-xl md:w-xl mx-4 md:mx-auto'>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
			{process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
		</html>
	);
}
