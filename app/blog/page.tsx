import { BlogPosts } from '@/components/BlogPosts';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Bakir Gracić | Blog',
	description: 'Blogs are a medium to share knowledge and experiences and also to build them. Explore all the blogs Bakir wrote and to gain new perspectives.',
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
		languages: {
			'en-US': `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
		},
	},
	openGraph: {
		title: 'Bakir Gracić | Blog',
		description: 'Blogs are a medium to share knowledge and experiences and also to build them. Explore all the blogs Bakir wrote and to gain new perspectives.',
		url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURIComponent('Bakir Gracić | Blog')}`,
				alt: 'Bakir Gracić Personal Website and Blog OpenGraph Image',
				width: 1200,
				height: 630,
			},
		],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function Blog() {
	return (
		<>
			<Script
				id='blog-schema-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Blog',
						name: 'The Bosnian Dev',
						description: 'A blog by Bakir Gracić about web development, technology, life, business, and more.',
						url: 'https://bakir.dev/blog',
						author: {
							'@type': 'Person',
							name: 'Bakir Gracić',
							image: 'https://bakir.dev/bakir-gracic.jpg',
							jobTitle: 'Fullstack Web Developer',
							description:
								'Bakir Gracić is a fullstack web developer who builds high-quality, robust, scalable and secure software that adds value to the world.',
							url: 'https://bakir.dev',
							sameAs: ['https://www.linkedin.com/in/bakirgracic/', 'https://github.com/BakirGracic', 'https://buymeacoffee.com/bakirgracic'],
							email: 'mailto:me@bakir.dev',
						},
						publisher: {
							'@type': 'Person',
							name: 'Bakir Gracić',
							image: 'https://bakir.dev/bakir-gracic.jpg',
							jobTitle: 'Fullstack Web Developer',
							description:
								'Bakir Gracić is a fullstack web developer who builds high-quality, robust, scalable and secure software that adds value to the world.',
							url: 'https://bakir.dev',
							sameAs: ['https://www.linkedin.com/in/bakirgracic/', 'https://github.com/BakirGracic', 'https://buymeacoffee.com/bakirgracic'],
							email: 'mailto:me@bakir.dev',
						},
					}),
				}}
			/>
			<section>
				<h1 className='heading1'>All Blog Posts</h1>
				<BlogPosts />
			</section>
		</>
	);
}
