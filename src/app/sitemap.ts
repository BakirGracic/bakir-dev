import type { MetadataRoute } from "next";
import { blogs } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // index
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      changeFrequency: "yearly",
      priority: 1,
    },

    // blog
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ...blogs
    ...blogs.map((blog) => ({
      url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${blog.slug}`,
      changeFrequency: "yearly" as const,
      lastModified: new Date(blog.published).toISOString(),
      priority: 0.8,
    })),

    // links
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/links`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
