import Link from 'next/link';

export default function Button({ children, href, blank = false, className = '' }: { children: React.ReactNode; href: string; blank?: boolean; className?: string }) {
	return (
		<Link
			href={href}
			target={blank ? '_blank' : '_self'}
			className={'button ' + className}
		>
			{children}
		</Link>
	);
}
