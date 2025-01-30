import Script from 'next/script';
import { notFound } from 'next/navigation';
import { getBlogPosts } from '@/lib/blog';
import { formatDatePublish } from '@/lib/misc';
import { marked } from 'marked';

export function generateStaticParams() {
	const blogPosts = getBlogPosts();

	return blogPosts.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({ params }) {
	const urlSlug = (await params).slug;

	const blogPost = getBlogPosts().find((post) => post.slug === urlSlug);

	if (!blogPost) {
		notFound();
	}

	return {
		title: `${blogPost.metadata.title} | Bakir Gracić`,
		description: blogPost.metadata.summary,
		alternates: {
			canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${urlSlug}`,
			languages: {
				'en-US': `${process.env.NEXT_PUBLIC_APP_URL}/blog/${urlSlug}`,
			},
		},
		openGraph: {
			title: `${blogPost.metadata.title} | Bakir Gracić`,
			description: blogPost.metadata.summary,
			url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${urlSlug}`,
			images: [
				{
					url: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURIComponent(blogPost.metadata.title)}`,
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

export default async function BlogPage({ params }) {
	const urlSlug = (await params).slug;

	const blogPost = getBlogPosts().find((post) => post.slug === urlSlug);

	if (!blogPost) {
		notFound();
	}

	const html = marked.parse(blogPost.content);

	// TODO custom blog parsing
	// make h tags be nextjs links with # link of their slug with function slugify() and to have hashtag icon visible on hover right of the h tag
	// make links have arrow to the left of them
	// pre (or code blocks) whould have 'box' css class, and have clipboard icon inside the box that when clicked copies code to clipboard ans shows check icon for few seconds after copying

	return (
		<>
			<Script
				id='blogpage-schema-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: blogPost.metadata.title,
						description: blogPost.metadata.summary,
						mainEntityOfPage: {
							'@type': 'WebPage',
							'@id': `https://bakir.dev/blog/${urlSlug}`,
						},
						datePublished: blogPost.metadata.published,
						dateModified: blogPost.metadata.published,
						author: {
							'@type': 'Person',
							name: 'Bakir Gracić',
							image: 'https://bakir.dev/bakir-gracic.jpg',
							jobTitle: 'Fullstack Web Developer',
							description: 'Bakir Gracić is a fullstack web developer who builds high-quality, robust, scalable and secure software that adds value to the world.',
							url: 'https://bakir.dev',
							sameAs: ['https://www.linkedin.com/in/bakirgracic/', 'https://github.com/BakirGracic', 'https://buymeacoffee.com/bakirgracic'],
							email: 'mailto:me@bakir.dev',
						},
						publisher: {
							'@type': 'Person',
							name: 'Bakir Gracić',
							image: 'https://bakir.dev/bakir-gracic.jpg',
							jobTitle: 'Fullstack Web Developer',
							description: 'Bakir Gracić is a fullstack web developer who builds high-quality, robust, scalable and secure software that adds value to the world.',
							url: 'https://bakir.dev',
							sameAs: ['https://www.linkedin.com/in/bakirgracic/', 'https://github.com/BakirGracic', 'https://buymeacoffee.com/bakirgracic'],
							email: 'mailto:me@bakir.dev',
						},
						image: {
							'@type': 'ImageObject',
							url: `https://bakir.dev/og?title=${encodeURIComponent(blogPost.metadata.title)}`,
							width: 1200,
							height: 630,
							caption: blogPost.metadata.title,
						},
						inLanguage: 'en',
						isPartOf: {
							'@type': 'Blog',
							name: 'The Bosnian Dev',
							url: 'https://bakir.dev/blog',
						},
					}),
				}}
			/>
			<section>
				<h1 className='heading1 tracking-tight'>{blogPost.metadata.title}</h1>
				<div className='darkerText mb-14 flex items-center gap-1'>{formatDatePublish(blogPost.metadata.published)}</div>
				<article
					className='prose dark:prose-invert'
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</section>
		</>
	);
}
