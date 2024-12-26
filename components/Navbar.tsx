import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';

const navbarLinks = [
	{ name: 'blog', title: 'Blogs Page' },
	{ name: 'projects', title: 'Projects Page' },
	{ name: 'certifications', title: 'Certifications Page' },
	{ name: 'endorsements', title: 'Endorsements Page' },
	{ name: 'links', title: 'Links Page' },
];

export default function Navbar() {
	return (
		<header className='mt-3 mb-14'>
			<nav className='flex flex-wrap items-center tracking-tighter'>
				<Link
					href='/'
					title='Home Page'
					className='py-2 pr-3 mr-3 hoverText'
				>
					<HomeIcon className='size-5' />
				</Link>
				{navbarLinks.map(({ name, title }, index) => (
					<Link
						key={index}
						href={`/${name}`}
						title={title}
						className='py-2 pr-3 mr-3 hoverText'
					>
						{name}
					</Link>
				))}
			</nav>
		</header>
	);
}
