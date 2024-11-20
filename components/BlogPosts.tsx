import Link from "next/link";
import { formatDatePublish, getBlogPosts } from "@/app/blog/utils";
import RelativeTimeText from "./RelativeTimeText";

export async function BlogPosts({ limit = -1 }: { limit?: number }) {
    const blogPosts = getBlogPosts(limit);

    return (
        <div>
            {blogPosts.map((post) => (
                <Link
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                >
                    <div className="flex flex-col md:flex-row mb-5">
                        <p className="min-w-[140px] max-w-[140px] darker-text text-sm mb-2 md:mb-0 ">
                            {formatDatePublish(post.metadata.published)} <br /> (<RelativeTimeText date={post.metadata.published} />)
                        </p>
                        <p className="hover-text">{post.metadata.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
