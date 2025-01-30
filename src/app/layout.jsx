import '@/css/tailwind.css';
import { coreMetadata, coreViewport } from '@/lib/metadata';
import { InterFont, RobotoMonoFont } from '@/lib/font';
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from '@/features/Navbar';
import Footer from '@/features/Footer';

export const metadata = coreMetadata;

export const viewport = coreViewport;

export default function RootLayout({ children }) {
	return (
		<html lang='en-US'>
			<body className={`${InterFont.className} ${RobotoMonoFont.variable}`}>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
			{<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />}
		</html>
	);
}
