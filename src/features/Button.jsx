import Link from 'next/link';

export default function Button({ children, href, blank = false, className = '', title = '' }) {
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
