import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: '/cv',
				destination: '/cv/Bakir-Gracic-CV.pdf',
				permanent: true
			}
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'opengraph.githubassets.com'
			},
			{
				protocol: 'https',
				hostname: 'cdn.akamai.steamstatic.com'
			}
		]
	}
};

export default nextConfig;
