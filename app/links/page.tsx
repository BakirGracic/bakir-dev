import Button from '@/components/Button';
import type { Metadata } from 'next';
import GitHub from '@/components/icons/GitHub';
import LinkedIn from '@/components/icons/LinkedIn';
import Twitter from '@/components/icons/Twitter';
import Discord from '@/components/icons/Discord';
import Luma from '@/components/icons/Luma';
import Meetup from '@/components/icons/Meetup';
import CV from '@/components/icons/CV';
import BuyMeACoffee from '@/components/icons/BuyMeACoffee';
import GitHubSponsors from '@/components/icons/GitHubSponsors';
import Credly from '@/components/icons/Credly';

export const metadata: Metadata = {
	title: 'Bakir Gracić | Links',
	description: 'Find links to connect with Bakir Gracić on various platforms and services, and explore other links',
	alternates: {
		canonical: `${process.env.APP_URL}/links`,
		languages: {
			'en-US': `${process.env.APP_URL}/links`,
		},
	},
	openGraph: {
		title: 'Bakir Gracić | Links',
		description: 'Find links to connect with Bakir Gracić on various platforms and services, and explore other links',
		url: `${process.env.APP_URL}/links`,
		images: [
			{
				url: `${process.env.APP_URL}/og?title=${encodeURIComponent('Bakir Gracić | Links')}`,
				alt: 'Bakir Gracić Personal Website and Blog OpenGraph Image',
				width: 1200,
				height: 630,
			},
		],
	},
	robots: {
		index: true,
		follow: true,
	},
};

const socialLinks = [
	{
		link: 'https://github.com/BakirGracic',
		icon: <GitHub />,
		title: 'GitHub',
	},
	{
		link: 'https://x.com/gracic_bakir',
		icon: <Twitter />,
		title: 'Twitter',
	},
	{
		link: 'https://www.linkedin.com/in/bakirgracic/',
		icon: <LinkedIn />,
		title: 'LinkedIn',
	},
	{
		link: 'https://discord.com/users/616736736277430448',
		icon: <Discord />,
		title: 'Discord',
	},
	{
		link: 'https://www.credly.com/users/bakir-gracic/',
		icon: <Credly />,
		title: 'Credly',
	},
	{
		link: '/cv/',
		icon: <CV />,
		title: 'CV',
	},
	{
		link: 'https://buymeacoffee.com/bakirgracic',
		icon: <BuyMeACoffee />,
		title: 'Buy Me A Coffee',
	},
	{
		link: 'https://github.com/sponsors/BakirGracic',
		icon: <GitHubSponsors />,
		title: 'GitHub Sponsors',
	},
	{
		link: 'https://lu.ma/user/bake_dev',
		icon: <Luma />,
		title: 'Luma',
	},
	{
		link: 'https://www.meetup.com/members/412576386/',
		icon: <Meetup />,
		title: 'Meetup',
	},
];

export default function Links() {
	return (
		<section>
			<h1 className='heading1'>Links to Connect</h1>
			<div className='flex items-center justify-center flex-wrap gap-4'>
				{socialLinks.map((item, index) => (
					<Button
						key={index}
						href={item.link}
						blank
						className='h-[105px] w-[105px]'
					>
						{item.icon}
					</Button>
				))}
			</div>
		</section>
	);
}
