import { BlogPosts } from '@/components/BlogPosts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Bakir Gracić | Blog',
	description: 'Blogs are a medium to share knowledge and experiences and also to build them. Explore all the blogs Bakir wrote and to gain new perspectives.',
	alternates: {
		canonical: `${process.env.APP_URL}/blog`,
		languages: {
			'en-US': `${process.env.APP_URL}/blog`,
		},
	},
	openGraph: {
		title: 'Bakir Gracić | Blog',
		description: 'Blogs are a medium to share knowledge and experiences and also to build them. Explore all the blogs Bakir wrote and to gain new perspectives.',
		url: `${process.env.APP_URL}/blog`,
		images: [
			{
				url: `${process.env.APP_URL}/og?title=${encodeURIComponent('Bakir Gracić | Blog')}`,
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

export default function Page() {
	return (
		<section>
			<h1 className='heading1'>All Blog Posts</h1>
			<BlogPosts />
		</section>
	);
}
