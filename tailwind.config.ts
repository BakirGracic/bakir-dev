import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	plugins: [require('@tailwindcss/typography')],
	theme: {
		extend: {
			fontFamily: {
				mono: ['var(--font-roboto-mono)'],
			},
		},
	},
};

export default config;
