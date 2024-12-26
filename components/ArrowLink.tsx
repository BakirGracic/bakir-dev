import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

export default function ArrowLink({ href, text, blank, title = '' }: { href: string; text: string; blank?: boolean; title?: string }) {
	return (
		<Link
			href={href}
			target={blank ? '_blank' : '_self'}
			className='flex items-center hoverText'
			title={title}
		>
			<ArrowUpRightIcon className='size-4' />
			<p className='ml-2'>{text}</p>
		</Link>
	);
}
