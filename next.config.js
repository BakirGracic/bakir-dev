/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/cv',
                destination: '/cv/Bakir-Gracic-CV.pdf',
                permanent: true,
            },
            {
                source: '/tags',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/tags/:slug',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/projects',
                destination: '/',
                permanent: true,
            },
            {
                source: '/projects/:slug',
                destination: '/',
                permanent: true,
            },
            {
                source: '/about',
                destination: '/',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
