import { baseUrl } from "app/sitemap";
import { notFound } from "next/navigation";
import { CustomMDX } from "components/CustomMDX";
import { formatDate, getBlogPosts } from "app/blog/utils";

export async function generateStaticParams() {
    let posts = getBlogPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export function generateMetadata({ params }) {
    let post = getBlogPosts().find((post) => post.slug === params.slug);

    if (!post) {
        return;
    }

    let {
        title,
        publishedAt: publishedTime,
        summary: description,
        keywords: keywords,
        image = `${baseUrl}/og?title=${encodeURIComponent(btoa(title))}`,
    } = post.metadata;

    return {
        title: post.metadata.title,
        description,
        keywords: keywords,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime,
            url: `${baseUrl}/blog/${post.slug}`,
            images: [
                {
                    url: image,
                },
            ],
        },
        alternates: {
            canonical: `${baseUrl}/blog/${post.slug}`,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

export default function Blog({ params }) {
    let post = getBlogPosts().find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <section>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: post.metadata.title,
                        datePublished: post.metadata.publishedAt,
                        dateModified: post.metadata.publishedAt,
                        description: post.metadata.summary,
                        image: post.metadata.image
                            ? `${baseUrl}${post.metadata.image}`
                            : `/og?title=${encodeURIComponent(
                                  post.metadata.title
                              )}`,
                        url: `${baseUrl}/blog/${post.slug}`,
                        author: {
                            "@type": "Person",
                            name: "My Portfolio",
                        },
                    }),
                }}
            />
            <h1 className="title font-semibold text-2xl">
                {post.metadata.title}
            </h1>
            <div className="flex justify-between items-center mt-2 mb-8 text-sm">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {formatDate(post.metadata.publishedAt)}
                </p>
            </div>
            <article className="prose">
                <CustomMDX source={post.content} />
            </article>
        </section>
    );
}
