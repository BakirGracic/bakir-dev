import localFont from 'next/font/local';

export const SFMono = localFont({
	variable: '--sf-mono',
	display: 'swap',
	src: [
		{
			path: '../fonts/SFMono-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
	],
});

export const SFProText = localFont({
	display: 'swap',
	src: [
		// {
		// 	path: '../fonts/SFProText-Ultralight.woff2',
		// 	weight: '100',
		// 	style: 'normal',
		// },
		// {
		// 	path: '../fonts/SFProText-UltralightItalic.woff2',
		// 	weight: '100',
		// 	style: 'italic',
		// },
		// {
		// 	path: '../fonts/SFProText-Thin.woff2',
		// 	weight: '200',
		// 	style: 'normal',
		// },
		// {
		// 	path: '../fonts/SFProText-ThinItalic.woff2',
		// 	weight: '200',
		// 	style: 'italic',
		// },
		// {
		// 	path: '../fonts/SFProText-Light.woff2',
		// 	weight: '300',
		// 	style: 'normal',
		// },
		// {
		// 	path: '../fonts/SFProText-LightItalic.woff2',
		// 	weight: '300',
		// 	style: 'italic',
		// },
		{
			path: '../fonts/SFProText-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../fonts/SFProText-RegularItalic.woff2',
			weight: '400',
			style: 'italic',
		},
		// {
		// 	path: '../fonts/SFProText-Medium.woff2',
		// 	weight: '500',
		// 	style: 'normal',
		// },
		// {
		// 	path: '../fonts/SFProText-MediumItalic.woff2',
		// 	weight: '500',
		// 	style: 'italic',
		// },
		{
			path: '../fonts/SFProText-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../fonts/SFProText-SemiboldItalic.woff2',
			weight: '600',
			style: 'italic',
		},
		{
			path: '../fonts/SFProText-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../fonts/SFProText-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
		// {
		// 	path: '../fonts/SFProText-Heavy.woff2',
		// 	weight: '800',
		// 	style: 'normal',
		// },
		// {
		// 	path: '../fonts/SFProText-HeavyItalic.woff2',
		// 	weight: '800',
		// 	style: 'italic',
		// },
		// {
		// 	path: '../fonts/SFProText-Black.woff2',
		// 	weight: '900',
		// 	style: 'normal',
		// },
		// {
		// 	path: '../fonts/SFProText-BlackItalic.woff2',
		// 	weight: '900',
		// 	style: 'italic',
		// },
	],
});
