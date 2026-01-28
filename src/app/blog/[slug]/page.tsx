import type { BlogPosting, WithContext } from "schema-dts";
import { blogs } from "@/lib/blogs";
import { baseMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((blog) => blog.slug === slug);

  return {
    ...baseMetadata,
    title: blog?.title,
    description: blog?.description,
    openGraph: {
      ...baseMetadata.openGraph,
      title: blog?.title,
      description: blog?.description,
    },
  };
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((blog) => blog.slug === slug);
  const { default: Post } = await import(`&/${slug}.mdx`);

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog?.title,
    description: blog?.description,
    datePublished: blog?.published,
    url: `https://bakir.dev/blog/${slug}`,
    image: "https://bakir.dev/og.jpg",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bakir.dev/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-prose mx-auto wrap-break-word prose dark:prose-invert text-pretty">
        <p>
          {blog?.published &&
            new Date(blog.published).toLocaleDateString("en-US", {
              dateStyle: "long",
            })}
        </p>

        <h1>{blog?.title}</h1>

        <Post />
      </article>
    </>
  );
}
