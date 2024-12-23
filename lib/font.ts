import { Inter, Roboto_Mono } from 'next/font/google';

export const InterFont = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export const RobotoMonoFont = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-mono',
});
