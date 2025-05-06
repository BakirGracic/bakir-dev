import '@/css/tailwind.css';
import { coreMetadata, coreViewport } from '@/lib/metadata';
import { InterFont, RobotoMonoFont } from '@/lib/font';
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from '@/features/navbar/components/Navbar';
import Footer from '@/features/footer/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = coreMetadata;

export const viewport = coreViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en-US'>
			<body className={`${InterFont.variable} ${RobotoMonoFont.variable}`}>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
			{<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />}
		</html>
	);
}
