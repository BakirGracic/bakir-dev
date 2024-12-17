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
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Links',
	metadataBase: new URL(`${process.env.APP_URL}/links`),
	alternates: {
		canonical: `${process.env.APP_URL}/links`,
	},
	openGraph: {
		title: 'Bakir the Dev | Links',
		url: `${process.env.APP_URL}/links`,
		images: [
			{
				url: `${process.env.APP_URL}/og?title=Links`,
				alt: 'Bakir the Dev OpenGraph Image',
			},
		],
	},
	twitter: {
		title: 'Bakir the Dev | Projects',
		images: {
			url: `${process.env.APP_URL}/og?title=Links`,
			alt: 'Bakir the Dev OpenGraph Image',
		},
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

export default function Page() {
	return (
		<section className='flex items-center justify-center flex-wrap gap-4'>
			{socialLinks.map((item, index) => (
				<Link
					key={index}
					href={item.link}
					title={item.title}
					target='_blank'
					className='h-[105px] w-[105px] flex items-center justify-center cursor-pointer border border-solid border-neutral-600 rounded-xl duration-[250ms] hover:bg-neutral-800 hover:shadow-inner'
				>
					{item.icon}
				</Link>
			))}
		</section>
	);
}
