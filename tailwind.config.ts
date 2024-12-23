import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	plugins: [require('@tailwindcss/typography')],
	theme: {
		fontFamily: {
			sf_mono: ['var(--sf-mono)'],
		},
	},
};

export default config;
