import { baseUrl } from 'app/sitemap'

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/og/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
