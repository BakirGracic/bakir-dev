import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { formatDatePublish } from '@/lib/misc';

export function BlogPosts({ limit = -1 }: { limit?: number }) {
	const blogPosts = getBlogPosts(limit);

	return blogPosts.map((post) => (
		<Link
			key={post.slug}
			href={`/blog/${post.slug}`}
			tabIndex={0}
		>
			<article>
				<div className='mb-5 flex flex-col md:flex-row'>
					<p className='darkerText flex gap-1 flex-row md:flex-col text-sm min-w-full md:min-w-[130px] mb-2 md:mb-0'>
						{formatDatePublish(post.metadata.published)}
					</p>
					<p className='hoverText'>{post.metadata.title}</p>
				</div>
			</article>
		</Link>
	));
}
