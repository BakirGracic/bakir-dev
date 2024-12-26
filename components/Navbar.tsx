import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';

const navbarLinks = [
	{ href: '', content: <HomeIcon className='size-5' />, title: 'Home Page' },
	{ href: 'blog', content: 'blog', title: 'Blogs Page' },
	{ href: 'projects', content: 'projects', title: 'Projects Page' },
	{ href: 'certifications', content: 'certifications', title: 'Certifications Page' },
	{ href: 'endorsements', content: 'endorsements', title: 'Endorsements Page' },
	{ href: 'links', content: 'links', title: 'Links Page' },
];

export default function Navbar() {
	return (
		<header className='mt-3 mb-14'>
			<nav className='flex flex-wrap items-center tracking-tighter'>
				{navbarLinks.map(({ href, content, title }, index) => (
					<Link
						key={index}
						href={`/${href}`}
						title={title}
						className='py-2 pr-3 mr-3 hoverText'
					>
						{content}
					</Link>
				))}
			</nav>
		</header>
	);
}
