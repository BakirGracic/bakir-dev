import Link from 'next/link';

export default function Button({ children, href, blank = false, className = '', title = '' }: { children: React.ReactNode; href: string; blank?: boolean; className?: string; title?: string }) {
	return (
		<Link
			href={href}
			target={blank ? '_blank' : '_self'}
			className={'button ' + className}
			title={title}
		>
			{children}
		</Link>
	);
}
