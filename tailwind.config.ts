import { error } from 'console';
import type { Config } from 'tailwindcss';
import { DEFAULT_CIPHERS } from 'tls';

const config: Config = {
	content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	plugins: [require('@tailwindcss/typography')],
	theme: {
		extend: {
			fontFamily: {
				mono: ['var(--font-roboto-mono)'],
			},
			colors: {
				successGreen: {
					DEFAULT: '#00A96E',
				},
				errorRed: {
					DEFAULT: '#FF5861',
				},
			},
		},
	},
};

export default config;
