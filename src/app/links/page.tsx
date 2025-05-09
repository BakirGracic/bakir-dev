import Script from 'next/script';
import Button from '@/features/_reusable/ui/components/Button';
import GitHub from '@/features/_reusable/icons/components/GitHub';
import LinkedIn from '@/features/_reusable/icons/components/LinkedIn';
import Twitter from '@/features/_reusable/icons/components/Twitter';
import Discord from '@/features/_reusable/icons/components/Discord';
import BuyMeACoffee from '@/features/_reusable/icons/components/BuyMeACoffee';
import GitHubSponsors from '@/features/_reusable/icons/components/GitHubSponsors';

export const metadata = {
	title: 'Bakir Gracić | Links',
	description:
		'Find links to connect with Bakir Gracić on various platforms and services, and explore other links',
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_URL}/links`,
		languages: {
			'en-US': `${process.env.NEXT_PUBLIC_APP_URL}/links`
		}
	},
	openGraph: {
		title: 'Bakir Gracić | Links',
		description:
			'Find links to connect with Bakir Gracić on various platforms and services, and explore other links',
		url: `${process.env.NEXT_PUBLIC_APP_URL}/links`,
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURIComponent('Bakir Gracić | Links')}`,
				alt: 'Bakir Gracić Personal Website and Blog OpenGraph Image',
				width: 1200,
				height: 630
			}
		]
	}
};

const socialLinks = [
	{
		link: 'https://github.com/BakirGracic',
		icon: <GitHub />,
		title: 'GitHub'
	},
	{
		link: 'https://www.linkedin.com/in/bakirgracic/',
		icon: <LinkedIn />,
		title: 'LinkedIn'
	},
	{
		link: 'https://x.com/gracic_bakir',
		icon: <Twitter />,
		title: 'Twitter'
	},
	{
		link: 'https://discord.com/users/616736736277430448',
		icon: <Discord />,
		title: 'Discord'
	},
	{
		link: '/cv/',
		icon: <div className='text-4xl font-bold'>CV</div>,
		title: 'CV'
	},
	{
		link: 'https://buymeacoffee.com/bakirgracic',
		icon: <BuyMeACoffee />,
		title: 'Buy Me A Coffee'
	},
	{
		link: 'https://github.com/sponsors/BakirGracic',
		icon: <GitHubSponsors />,
		title: 'GitHub Sponsors'
	}
];

export default function Links() {
	return (
		<>
			<Script
				id='links-schema-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ItemList',
						name: 'Bakir Gracić Links to Connect',
						description:
							'A curated list of links to connect with Bakir Gracić or learn more about their work.',
						itemListElement: [
							{
								'@type': 'WebPage',
								name: 'GitHub Profile',
								url: 'https://github.com/BakirGracic',
								description:
									'Explore my open-source projects, code contributions, and repositories.',
								publisher: {
									'@type': 'Organization',
									name: 'GitHub',
									url: 'https://github.com'
								}
							},
							{
								'@type': 'WebPage',
								name: 'Twitter Profile',
								url: 'https://twitter.com/gracic_bakir',
								description:
									'Follow me on Twitter for updates, thoughts, and interactions on tech and more.',
								publisher: {
									'@type': 'Organization',
									name: 'Twitter',
									url: 'https://twitter.com'
								}
							},
							{
								'@type': 'WebPage',
								name: 'LinkedIn Profile',
								url: 'https://linkedin.com/in/bakirgracic',
								description:
									'Connect with me professionally on LinkedIn to view my work experience and endorsements.',
								publisher: {
									'@type': 'Organization',
									name: 'LinkedIn',
									url: 'https://linkedin.com'
								}
							},
							{
								'@type': 'WebPage',
								name: 'Personal Blog',
								url: 'https://bakir.dev/blog',
								description:
									'Read my latest articles, tutorials, and insights on technology and programming.',
								publisher: {
									'@type': 'Person',
									name: 'Bakir Gracić',
									image: 'https://bakir.dev/bakir-gracic.jpg',
									jobTitle: 'Fullstack Web Developer',
									description:
										'Bakir Gracić is a fullstack web developer who builds high-quality, robust, scalable and secure software that adds value to the world.',
									url: 'https://bakir.dev',
									sameAs: [
										'https://www.linkedin.com/in/bakirgracic/',
										'https://github.com/BakirGracic',
										'https://buymeacoffee.com/bakirgracic'
									],
									email: 'mailto:me@bakir.dev'
								}
							},
							{
								'@type': 'WebPage',
								name: 'Portfolio',
								url: 'https://bakir.dev',
								description:
									'View a detailed showcase of my projects, highlighting my skills and contributions.',
								publisher: {
									'@type': 'Person',
									name: 'Bakir Gracić',
									image: 'https://bakir.dev/bakir-gracic.jpg',
									jobTitle: 'Fullstack Web Developer',
									description:
										'Bakir Gracić is a fullstack web developer who builds high-quality, robust, scalable and secure software that adds value to the world.',
									url: 'https://bakir.dev',
									sameAs: [
										'https://www.linkedin.com/in/bakirgracic/',
										'https://github.com/BakirGracic',
										'https://buymeacoffee.com/bakirgracic'
									],
									email: 'mailto:me@bakir.dev'
								}
							}
						]
					})
				}}
			/>
			<section>
				<h1 className='heading1'>Links to connect</h1>
				<div className='mb-14 flex flex-wrap items-center justify-center gap-4'>
					{socialLinks.map((item, index) => (
						<Button
							key={index}
							href={item.link}
							title={item.title}
							blank
							className='h-[105px] w-[105px]'
						>
							{item.icon}
						</Button>
					))}
				</div>
				<h2 id='contact' className='heading2'>
					Contact
				</h2>
				<div className='mb-6'>
					<p>If you prefer emails, you can send me one to:&nbsp;&nbsp;&nbsp;</p>
					<span className='!font-mono'>me (at) bakir (dot) dev</span>
				</div>
			</section>
		</>
	);
}
