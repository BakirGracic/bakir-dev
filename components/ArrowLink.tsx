import Link from 'next/link';
import Arrow from '@/components/icons/Arrow';

export default function ArrowLink({ href, text, blank }: { href: string; text: string; blank?: boolean }) {
	return (
		<Link
			href={href}
			target={blank ? '_blank' : '_self'}
			className='flex items-center hover-text text-white/70'
		>
			<Arrow />
			<p className='ml-2'>{text}</p>
		</Link>
	);
}
