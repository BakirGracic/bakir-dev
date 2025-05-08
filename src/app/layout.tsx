import '@/css/tailwind.css';
import { coreMetadata } from '@/lib/metadata';
import { coreViewport } from '@/lib/viewport';
import { InterFont, RobotoMonoFont } from '@/lib/font';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from '@/features/navbar/components/Navbar';
import Footer from '@/features/footer/components/Footer';

export const metadata = coreMetadata;

export const viewport = coreViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en-US'>
			<body className={`${InterFont.variable} ${RobotoMonoFont.variable}`}>
				<Navbar />
				<main>
					{children}
					<Analytics />
					<SpeedInsights />
					<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
				</main>
				<Footer />
			</body>
		</html>
	);
}
