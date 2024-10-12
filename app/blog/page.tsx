import { baseUrl } from "app/sitemap";
import { BlogPosts } from "components/BlogPosts";

export const metadata = {
    title: "Blog",
    alternates: {
        canonical: `${baseUrl}/blog`,
    },
    openGraph: {
        images: [
            {
                url: `${baseUrl}/og?title=${encodeURIComponent(
                    btoa("My Blog")
                )}`,
            },
        ],
    },
};

export default function Page() {
    return (
        <section>
            <h1 className="mb-6 font-semibold text-2xl tracking-tighter">
                All Blog Posts
            </h1>
            <BlogPosts />
        </section>
    );
}
