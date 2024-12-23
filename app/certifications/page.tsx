import CertificationCard from '@/components/CertificationCard';
import type { Metadata } from 'next';
import GitHubFoundationsPNG from '@/images/certifications/github_foundations/github-foundations.png';

export const metadata: Metadata = {
	title: 'Bakir Gracić | Certifications',
	description: "Certifications are a credible way to prove someone's skills and expertise. Here you can explore what certificates Bakir earned.",
	alternates: {
		canonical: `${process.env.APP_URL}/certifications`,
		languages: {
			'en-US': `${process.env.APP_URL}/certifications`,
		},
	},
	openGraph: {
		title: 'Bakir Gracić | Certifications',
		description: "Certifications are a credible way to prove someone's skills and expertise. Here you can explore what certificates Bakir earned.",
		url: `${process.env.APP_URL}/certifications`,
		images: [
			{
				url: `${process.env.APP_URL}/og?title=${encodeURIComponent('Bakir Gracić | Certifications')}`,
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

const certificationLinks = [
	{
		img: GitHubFoundationsPNG,
		title: 'GitHub Foundations',
		description: 'Learn GitHub and Git',
		link: 'https://www.credly.com/badges/6e715e2b-cb75-4c1b-9a2f-aa4610e2c8fc/public_url',
	},
];

export default function Page() {
	return (
		<section>
			<h1 className='heading1'>My Certifications</h1>
			<section className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
				{certificationLinks.map((item, index) => (
					<CertificationCard
						key={index}
						img={item.img}
						title={item.title}
						description={item.description}
						link={item.link}
					/>
				))}
			</section>
		</section>
	);
}
