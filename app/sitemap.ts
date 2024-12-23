import { getBlogPosts } from '@/lib/blog';
import type { MetadataRoute } from 'next';

const blogPosts: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
	url: `${process.env.APP_URL}/blog/${post.slug}`,
	lastModified: post.metadata.published,
	changeFrequency: 'monthly',
	priority: 0.9,
}));

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${process.env.APP_URL}`,
			lastModified: new Date().toISOString().split('T')[0],
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${process.env.APP_URL}/blog`,
			lastModified: new Date().toISOString().split('T')[0],
			changeFrequency: 'monthly',
			priority: 1,
		},
		...blogPosts,
		{
			url: `${process.env.APP_URL}/projects`,
			lastModified: new Date().toISOString().split('T')[0],
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${process.env.APP_URL}/certifications`,
			lastModified: new Date().toISOString().split('T')[0],
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${process.env.APP_URL}/links`,
			lastModified: new Date().toISOString().split('T')[0],
			changeFrequency: 'monthly',
			priority: 1,
		},
	];
}
