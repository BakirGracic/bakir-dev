import '@/css/tailwind.css';
import '@/css/global.css';
import '@/css/utils.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { InterFont } from '@/lib/font';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import type { Viewport } from 'next';

export const metadata: Metadata = {
	title: 'Bakir Gracić | The Bosnian Dev',
	description:
		"Explore The Bosnian Developer's personal website & blog for insightful tips, helpful advice, fun & educational content on software development. Uncover his top projects, achievements, certifications, and find links to connect",
	generator: 'Next.js 15',
	applicationName: 'Bakir Gracić | The Bosnian Dev',
	authors: [{ name: 'Bakir Gracić', url: 'https://bakir.dev/' }],
	creator: 'Bakir Gracić',
	publisher: 'Bakir Gracić',
	alternates: {
		canonical: `${process.env.APP_URL}/`,
		languages: {
			'en-US': `${process.env.APP_URL}/`,
		},
	},
	openGraph: {
		title: 'Bakir Gracić | The Bosnian Dev',
		description:
			"Explore The Bosnian Developer's personal website & blog for insightful tips, helpful advice, fun & educational content on software development. Uncover his top projects, achievements, certifications, and find links to connect",
		url: `${process.env.APP_URL}/`,
		siteName: 'Bakir Gracić | The Bosnian Dev',
		images: [
			{
				url: `${process.env.APP_URL}/og.png`,
				alt: 'Bakir Gracić Personal Website and Blog OpenGraph Image',
				width: 1200,
				height: 630,
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: [
			{ url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
			{ url: '/favicon.svg', type: 'image/svg+xml' },
		],
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: dark)', color: '#000000' },
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
	],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en-US'>
			<body className={`${InterFont.className}`}>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
			{process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />}
		</html>
	);
}
