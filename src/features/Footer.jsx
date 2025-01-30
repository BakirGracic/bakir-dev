import Button from '@/features/Button';
import ArrowLink from '@/features/ArrowLink';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

const footerLinks = [
	{ href: 'links', text: 'links', title: 'Links Page' },
	{ href: 'sitemap.xml', text: 'sitemap', title: 'sitemap.xml' },
	{ href: 'rss', text: 'rss', title: 'RSS Feed' },
];

export default function Footer() {
	return (
		<footer className='mt-16'>
			<div className='flex flex-col gap-2 md:flex-row md:gap-5'>
				{footerLinks.map(({ href, text, title }, index) => (
					<ArrowLink
						key={index}
						href={`/${href}`}
						text={text}
						title={title}
						blank
					/>
				))}
				<Button
					href='/links#contact'
					className='mr-auto !gap-1 px-2 py-1 text-xs'
					title='Links Contact Page'
					blank
				>
					<EnvelopeIcon className='size-3' />
					<p>Contact</p>
				</Button>
			</div>
			<p className='mt-4 mb-3'>bakir.dev | {new Date().getFullYear()}</p>
		</footer>
	);
}
