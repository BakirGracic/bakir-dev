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
};

module.exports = nextConfig;
