/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    async redirects() {
        return [
            {
                source: '/cv/',
                destination: '/cv/Bakir-Gracic-CV.pdf',
                permanent: true,
            },
            {
                source: '/tags/',
                destination: '/blog/',
                permanent: true,
            },
            {
                source: '/tags/*',
                destination: '/blog/',
                permanent: true,
            },
            {
                source: '/projects/',
                destination: '/',
                permanent: true,
            },
            {
                source: '/projects/*',
                destination: '/',
                permanent: true,
            },
            {
                source: '/about/',
                destination: '/',
                permanent: true,
            },
        ]
    },
}

export default nextConfig;
