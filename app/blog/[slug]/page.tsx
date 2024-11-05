import { notFound } from "next/navigation";
import { formatDatePublish, formatDateRelative, getBlogPosts } from "@/app/blog/utils";
import CustomMDX from "@/components/CustomMDX";

export async function generateStaticParams() {
    const blogPosts = getBlogPosts();

    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const urlSlug = (await params).slug;

    const blogPost = getBlogPosts().find((post) => post.slug === urlSlug);

    if (!blogPost) {
        return;
    }

    const Btitle = blogPost.metadata.title;
    const Bpublished = blogPost.metadata.published;
    const Bsummary = blogPost.metadata.summary;
    const Bkeywords = blogPost.metadata.keywords;
    const Bimage = `${process.env.APP_URL}/og?title=${encodeURIComponent(Btitle)}`;

    return {
        title: {
            absolute: Btitle,
        },
        description: Bsummary,
        keywords: Bkeywords,
        metadataBase: new URL(`${process.env.APP_URL}/blog/${urlSlug}`),
        alternates: {
            canonical: `${process.env.APP_URL}/blog/${urlSlug}`,
        },
        openGraph: {
            title: Btitle,
            description: Bsummary,
            type: "article",
            publishedTime: Bpublished,
            url: `${process.env.APP_URL}/blog/${urlSlug}`,
            images: [
                {
                    url: Bimage,
                    alt: "Bakir the Dev OpenGraph Image",
                },
            ],
        },
        twitter: {
            title: Btitle,
            description: Bsummary,
            images: {
                url: Bimage,
                alt: "Bakir the Dev OpenGraph Image",
            },
        },
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const urlSlug = (await params).slug;

    const blogPost = getBlogPosts().find((post) => post.slug === urlSlug);

    if (!blogPost) {
        notFound();
    }

    const Btitle = blogPost.metadata.title;
    const Bpublished = blogPost.metadata.published;
    const Bsummary = blogPost.metadata.summary;
    const Bimage = `${process.env.APP_URL}/og?title=${encodeURIComponent(Btitle)}`;

    return (
        <section>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: Btitle,
                        author: {
                            "@type": "Person",
                            name: "BakirGracic",
                        },
                        datePublished: Bpublished,
                        dateModified: Bpublished,
                        image: Bimage,
                        description: Bsummary,
                        publisher: {
                            "@type": "Organization",
                            name: "Bakir the Dev",
                            logo: {
                                "@type": "ImageObject",
                                url: `${process.env.APP_URL}/favicon.ico`,
                            },
                        },
                        url: `${process.env.APP_URL}/blog/${urlSlug}`,
                    }),
                }}
            />
            <h1 className="font-semibold text-3xl mb-2">{Btitle}</h1>
            <div className="mb-16 darker-text">
                {formatDatePublish(Bpublished)} ({formatDateRelative(Bpublished)})
            </div>
            <CustomMDX rawMD={blogPost.content} />
        </section>
    );
}
