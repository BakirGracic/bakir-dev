import { getBlogPosts } from '@/lib/blog';
import { type MetadataRoute } from 'next';

export default function Sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'monthly',
			priority: 1
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'monthly',
			priority: 0.9
		},
		...(getBlogPosts().map((post) => ({
			url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slug}`,
			lastModified: post.metadata.published,
			changeFrequency: 'monthly',
			priority: 0.8
		})) as MetadataRoute.Sitemap),
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/projects`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'monthly',
			priority: 0.7
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/certifications`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'monthly',
			priority: 0.7
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/endorsements`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'monthly',
			priority: 0.7
		},
		{
			url: `${process.env.NEXT_PUBLIC_APP_URL}/links`,
			lastModified: new Date().toISOString(),
			changeFrequency: 'monthly',
			priority: 0.7
		}
	];
}
