/** @type {import('next').NextConfig} */

const nextConfig = {
	async redirects() {
		return [
			{
				source: '/cv',
				destination: '/cv/Bakir-Gracic-CV.pdf',
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'opengraph.githubassets.com',
			},
		],
	},
};

export default nextConfig;
