import { BlogPosts } from 'app/components/posts'
import { baseUrl } from 'app/sitemap'

export const metadata = {
    title: 'Blog',
    alternates: {
        canonical: `${baseUrl}/blog`,
    },
}

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
            <BlogPosts />
        </section>
    )
}
