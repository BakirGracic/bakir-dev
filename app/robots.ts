export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/og/"],
            },
        ],
        sitemap: `${process.env.APP_URL}/sitemap.xml`,
    };
}
