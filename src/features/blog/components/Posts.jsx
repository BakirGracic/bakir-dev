import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { formatDatePublish } from '@/lib/misc';

export default function Posts({ limit = -1 }) {
	const blogPosts = getBlogPosts(limit);

	return blogPosts.map((post) => (
		<Link
			key={post.slug}
			href={`/blog/${post.slug}`}
			tabIndex={0}
		>
			<article>
				<div className='mb-5 flex flex-col md:flex-row'>
					<p className='darkerText mb-2 flex min-w-full flex-row gap-1 text-sm md:mb-0 md:min-w-[130px] md:flex-col'>{formatDatePublish(post.metadata.published)}</p>
					<p className='hoverText'>{post.metadata.title}</p>
				</div>
			</article>
		</Link>
	));
}
