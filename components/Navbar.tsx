import Link from 'next/link';

const navbarLinks = ['home', 'blog', 'projects', 'certifications', 'links'];

export default function Navbar() {
	return (
		<header>
			<nav className='mb-14 flex tracking-tighter'>
				{navbarLinks.map((path, index) => (
					<Link
						key={index}
						href={`/${path === 'home' ? '' : path}`}
						className='flex py-4 pr-3 mr-3 hoverText'
					>
						{path}
					</Link>
				))}
			</nav>
		</header>
	);
}
