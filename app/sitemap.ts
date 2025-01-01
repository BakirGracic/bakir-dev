import { getBlogPosts } from '@/lib/blog';
import type { MetadataRoute } from 'next';

const blogPosts: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
	url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slug}`,
	lastModified: post.metadata.published,
	changeFrequency: 'monthly',
	priority: 0.9,
}));

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}`,
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
			changeFrequency: 'monthly',
			priority: 1,
		},
		...blogPosts,
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/projects`,
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/certifications`,
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/endorsements`,
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/links`,
			changeFrequency: 'monthly',
			priority: 1,
		},
	];
}
