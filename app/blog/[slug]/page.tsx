import { notFound } from 'next/navigation';
import { getBlogPosts } from '@/lib/blog';
import { formatDatePublish } from '@/lib/misc';
import RelativeTimeText from '@/components/RelativeTimeText';
import CustomMDX from '@/components/CustomMDX';

export function generateStaticParams() {
	const blogPosts = getBlogPosts();

	return blogPosts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const urlSlug = (await params).slug;

	const blogPost = getBlogPosts().find((post) => post.slug === urlSlug);

	if (!blogPost) {
		notFound();
	}

	return {
		title: `${blogPost.metadata.title} | Bakir Gracić`,
		description: blogPost.metadata.summary,
		alternates: {
			canonical: `${process.env.APP_URL}/blog/${urlSlug}`,
			languages: {
				'en-US': `${process.env.APP_URL}/blog/${urlSlug}`,
			},
		},
		openGraph: {
			title: `${blogPost.metadata.title} | Bakir Gracić`,
			description: blogPost.metadata.summary,
			url: `${process.env.APP_URL}/blog/${urlSlug}`,
			images: [
				{
					url: `${process.env.APP_URL}/og?title=${encodeURIComponent(blogPost.metadata.title)}`,
					alt: 'Bakir Gracić Personal Website and Blog OpenGraph Image',
					width: 1200,
					height: 630,
				},
			],
			type: 'article',
			publishedTime: blogPost.metadata.published,
		},
		robots: {
			index: true,
			follow: true,
		},
	};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const urlSlug = (await params).slug;

	const blogPost = getBlogPosts().find((post) => post.slug === urlSlug);

	if (!blogPost) {
		notFound();
	}

	return (
		<section>
			<script
				type='application/ld+json'
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: blogPost.metadata.title,
						author: {
							'@type': 'Person',
							name: 'BakirGracic',
						},
						datePublished: blogPost.metadata.published,
						dateModified: blogPost.metadata.published,
						image: `${process.env.APP_URL}/og?title=${encodeURIComponent(blogPost.metadata.title)}`,
						description: blogPost.metadata.summary,
						publisher: {
							'@type': 'Organization',
							name: 'Bakir the Dev',
							logo: {
								'@type': 'ImageObject',
								url: `${process.env.APP_URL}/favicon.ico`,
							},
						},
						url: `${process.env.APP_URL}/blog/${urlSlug}`,
					}),
				}}
			/>
			<h1 className='heading1 tracking-tight'>{blogPost.metadata.title}</h1>
			<div className='mb-14 darkerText flex items-center gap-1'>
				<span>{formatDatePublish(blogPost.metadata.published)}</span>
				<span>•</span>
				<RelativeTimeText date={blogPost.metadata.published} />
			</div>
			<CustomMDX rawMD={blogPost.content} />
		</section>
	);
}
