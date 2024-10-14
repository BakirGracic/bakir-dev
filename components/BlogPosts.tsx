import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts({ limit = -1 }: { limit?: number }) {
    let allBlogs = getBlogPosts(limit);

    return (
        <div>
            {allBlogs
                .sort((a, b) => {
                    if (
                        new Date(a.metadata.publishedAt) >
                        new Date(b.metadata.publishedAt)
                    ) {
                        return -1;
                    }
                    return 1;
                })
                .map((post) => (
                    <Link
                        key={post.slug}
                        className="flex flex-col space-y-1 mb-4"
                        href={`/blog/${post.slug}`}
                    >
                        <div className="w-full flex flex-col md:flex-row">
                            <p className="text-neutral-600 dark:text-neutral-400 min-w-[142px]">
                                {formatDate(post.metadata.publishedAt, false)}
                            </p>
                            <p className="text-neutral-900 dark:text-neutral-100 anim-move-r">
                                {post.metadata.title}
                            </p>
                        </div>
                    </Link>
                ))}
        </div>
    );
}
