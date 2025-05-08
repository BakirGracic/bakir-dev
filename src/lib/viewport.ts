import { type Viewport } from 'next';

export const coreViewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: dark)', color: '#000000' },
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' }
	],
	colorScheme: 'dark light',
	maximumScale: 1,
	initialScale: 1
};
