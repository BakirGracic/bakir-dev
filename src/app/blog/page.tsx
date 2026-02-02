import type { CollectionPage, WithContext } from "schema-dts";
import { BlogCard } from "@/features/BlogCard/BlogCard";
import { JsonLD } from "@/features/JsonLD/JsonLD";
import PageHeading from "@/features/PageHeading/PageHeading";
import { blogs } from "@/lib/blogs";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Blogs | bakir.dev",
  "My takes on various hot topics. Read about interesting subjects and uncover my perspectives",
  "/blog",
);

export default function BlogPage() {
  const collectionPageSchema: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blogs | bakir.dev",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
    description:
      "My takes on various hot topics. Read about interesting subjects and uncover my perspectives",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogs.map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${blog.slug}`,
        name: blog.title,
      })),
    },
  };

  return (
    <>
      <JsonLD code={collectionPageSchema} />

      <section>
        <PageHeading title="Blog" subtitle="My takes on various hot topics" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog, i) => (
            <BlogCard
              key={`blog-card_${blog.slug}`}
              published={blog.published}
              title={blog.title}
              description={blog.description}
              slug={blog.slug}
              style={{ animationDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
