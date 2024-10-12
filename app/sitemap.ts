import { getBlogPosts } from "app/blog/utils";

export const baseUrl = "https://bakir.dev";

export default async function sitemap() {
    let blogs = getBlogPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }));

    let additionalRoutes = ["/projects", "/certification", "/links"];

    let routes = ["", "/blog", ...additionalRoutes].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...routes, ...blogs];
}
