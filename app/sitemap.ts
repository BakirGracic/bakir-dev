import { getBlogPosts } from "@/app/blog/utils";

export default async function sitemap() {
    const blogPosts = getBlogPosts().map((post) => ({
        url: `${process.env.APP_URL}/blog/${post.slug}`,
        lastModified: post.metadata.published,
    }));

    const links = ["", "/blog", "/projects", "/certification", "/links"];

    const otherRoutes = links.map((route) => ({
        url: `${process.env.APP_URL}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...otherRoutes, ...blogPosts];
}
