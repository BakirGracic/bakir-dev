import type { BlogPosting, WithContext } from "schema-dts";
import { JsonLD } from "@/features/JsonLD/JsonLD";
import { blogs } from "@/lib/blogs";
import { dynamicPageMetadata } from "@/lib/metadata";

interface BlogSlugPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false; // disable runtime generation, only allow pre-generated slug pages

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: BlogSlugPageProps) {
  const { slug } = await params;
  const blog = blogs.find((blog) => blog.slug === slug);

  return dynamicPageMetadata(
    `${blog?.title} | TriDe`,
    blog?.description || "",
    `/blog/${slug}`,
  );
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = await params;
  const blog = blogs.find((blog) => blog.slug === slug);
  const { default: PostContents } = await import(`&/${slug}.mdx`);

  const blogPostingSchema: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog?.title,
    description: blog?.description,
    datePublished: new Date(blog?.published ?? "").toISOString(),
    dateModified: new Date(blog?.published ?? "").toISOString(),
    url: `https://bakir.dev/blog/${slug}`,
    image: "https://bakir.dev/og.jpg",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bakir.dev/blog/${slug}`,
    },
    author: {
      "@type": "Person",
      name: "Bakir Gracić",
      url: "https://bakir.dev",
    },
    publisher: {
      "@type": "Organization",
      name: "bakir.dev",
      logo: {
        "@type": "ImageObject",
        url: "https://bakir.dev/static/images/headshot.jpeg",
      },
    },
  };

  return (
    <>
      <JsonLD code={blogPostingSchema} />

      <article className="max-w-prose mx-auto wrap-break-word prose dark:prose-invert text-pretty">
        <p>
          {blog?.published &&
            new Date(blog.published).toLocaleDateString("en-US", {
              dateStyle: "long",
            })}
        </p>

        <h1>{blog?.title}</h1>

        <PostContents />
      </article>
    </>
  );
}
