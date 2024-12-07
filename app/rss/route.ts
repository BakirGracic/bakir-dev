import { getBlogPosts } from '@/lib/blog_utils';

function escapeXml(unsafe: string): string {
	return unsafe.replace(/[<>&'"]/g, (c) => {
		switch (c) {
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '&':
				return '&amp;';
			case "'":
				return '&apos;';
			case '"':
				return '&quot;';
			default:
				return c;
		}
	});
}

export function GET() {
	const blogPosts = getBlogPosts();

	const itemsXml = blogPosts
		.map(
			(post) =>
				`<item>
                    <title>${escapeXml(post.metadata.title)}</title>
                    <link>${process.env.APP_URL}/blog/${post.slug}</link>
                    <description>${escapeXml(post.metadata.summary || '')}</description>
                    <pubDate>${new Date(post.metadata.published).toUTCString()}</pubDate>
                </item>`,
		)
		.join('\n');

	const rssFeedBody = `<?xml version="1.0" encoding="UTF-8" ?>
                    <rss version="2.0">
                        <channel>
                            <title>Bakir the Dev</title>
                            <link>${process.env.APP_URL}</link>
                            <description>Bakir's personal website and blog RSS feed</description>
                            ${itemsXml}
                        </channel>
                    </rss>`;

	return new Response(rssFeedBody, { headers: { 'Content-Type': 'text/xml' } });
}
