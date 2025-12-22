import { baseMetadata } from "@/lib/baseMetadata";
import { blogs } from "@/lib/blogs";

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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((blog) => blog.slug === slug);
  const { default: Post } = await import(`&/${slug}.mdx`);

  return (
    <article className="max-w-prose mx-auto my-8 md:my-12 prose dark:prose-invert text-pretty">
      <p>
        {blog?.published &&
          new Date(blog.published).toLocaleDateString("en-US", {
            dateStyle: "long",
          })}
      </p>

      <h1>{blog?.title}</h1>

      <Post />
    </article>
  );
}
