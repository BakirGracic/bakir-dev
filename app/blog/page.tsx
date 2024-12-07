import { BlogPosts } from '@/components/BlogPosts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blogs',
	metadataBase: new URL(`${process.env.APP_URL}/blogs`),
	alternates: {
		canonical: `${process.env.APP_URL}/blogs`,
	},
	openGraph: {
		title: 'Bakir the Dev | Blogs',
		url: `${process.env.APP_URL}/blogs`,
		images: [
			{
				url: `${process.env.APP_URL}/og?title=Blogs`,
				alt: 'Bakir the Dev OpenGraph Image',
			},
		],
	},
	twitter: {
		title: 'Bakir the Dev | Blogs',
		images: {
			url: `${process.env.APP_URL}/og?title=Blogs`,
			alt: 'Bakir the Dev OpenGraph Image',
		},
	},
};

export default function Page() {
	return (
		<section>
			<h1 className='mb-6 font-semibold text-2xl'>All Blog Posts</h1>
			<BlogPosts />
		</section>
	);
}
