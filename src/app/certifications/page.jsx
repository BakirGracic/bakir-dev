import CertificationCard from '@/features/CertificationCard';
import Script from 'next/script';
import type { Metadata } from 'next';
import GitHubFoundationsPNG from '@/images/certifications/github_foundations/github-foundations.png';

export const metadata: Metadata = {
	title: 'Bakir Gracić | Certifications',
	description: "Certifications are a credible way to prove someone's skills and expertise. Here you can explore what certificates Bakir earned.",
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_URL}/certifications`,
		languages: {
			'en-US': `${process.env.NEXT_PUBLIC_APP_URL}/certifications`,
		},
	},
	openGraph: {
		title: 'Bakir Gracić | Certifications',
		description: "Certifications are a credible way to prove someone's skills and expertise. Here you can explore what certificates Bakir earned.",
		url: `${process.env.NEXT_PUBLIC_APP_URL}/certifications`,
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURIComponent('Bakir Gracić | Certifications')}`,
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

export default function Certifications() {
	return (
		<>
			<Script
				id='certifications-schema-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ItemList',
						name: "Bakir Gracić's Certifications List",
						description: 'A list of certifications achieved by Bakir Gracić, showcasing expertise in various fields.',
						itemListElement: [
							{
								'@type': 'EducationalOccupationalCredential',
								name: 'GitHub Foundations',
								credentialCategory: 'Professional Certification',
								dateIssued: '2024-10-26',
								description:
									'Passing the GitHub Foundations certification exam validates subject matter expertise by measuring entry-level skills with GitHub basics like repositories, commits, branching, markdowns, and project management.',
								recognizedBy: {
									'@type': 'Organization',
									name: 'GitHub',
									url: 'https://github.com/',
								},
								issuer: {
									'@type': 'Organization',
									name: 'GitHub',
									url: 'https://github.com/',
								},
								url: 'https://www.credly.com/badges/6e715e2b-cb75-4c1b-9a2f-aa4610e2c8fc/public_url',
								credentialId: '6e715e2b-cb75-4c1b-9a2f-aa4610e2c8fc',
								image: {
									'@type': 'ImageObject',
									url: 'https://images.credly.com/size/680x680/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png',
									width: 512,
									height: 512,
								},
							},
						],
					}),
				}}
			/>
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
		</>
	);
}
