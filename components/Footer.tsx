import ArrowLink from '@/components/ArrowLink';

const footerLinks = [
	{ href: '/links', text: 'links' },
	{ href: '/sitemap.xml', text: 'sitemap' },
	{ href: '/rss', text: 'rss' },
];

export default function Footer() {
	return (
		<footer className='mt-16'>
			<div className='flex flex-col gap-2 md:flex-row md:gap-5'>
				{footerLinks.map(({ href, text }, index) => (
					<ArrowLink
						key={index}
						href={href}
						text={text}
						blank
					/>
				))}
			</div>
			<p className='mt-2 mb-3'>bakir.dev | {new Date().getFullYear()}</p>
		</footer>
	);
}
