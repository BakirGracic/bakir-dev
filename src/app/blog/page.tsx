import type { Metadata } from "next";
import type { CollectionPage, WithContext } from "schema-dts";
import Blog from "@/features/Blog/Blog";
import { blogs } from "@/lib/blogs";
import { baseMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Blogs | bakir.dev",
  description: "My takes on various hot topics",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Blogs | bakir.dev",
    description: "My takes on various hot topics",
  },
};

export default function BlogPage() {
  const jsonLd: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blogs | bakir.dev",
    description: "My takes on various hot topics",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogs.map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://bakir.dev/blog/${blog.slug}`,
        name: blog.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Blog />
    </>
  );
}
