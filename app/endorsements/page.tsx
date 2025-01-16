import EndorsementCard from '@/components/EndorsementCard';
import Script from 'next/script';
import type { Metadata } from 'next';
import JasminHasancevicHeadshotJPG from '@/images/endorsements/jasmin-hasancevic-headshot.jpeg';

export const metadata: Metadata = {
	title: 'Bakir Gracić | Endorsements',
	description: 'Word of mouth is the best form of marketing. Check out what others have to say about Bakir Gracić and their work',
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_URL}/endorsements`,
		languages: {
			'en-US': `${process.env.NEXT_PUBLIC_APP_URL}/endorsements`,
		},
	},
	openGraph: {
		title: 'Bakir Gracić | Endorsements',
		description: 'Word of mouth is the best form of marketing. Check out what others have to say about Bakir Gracić and their work',
		url: `${process.env.NEXT_PUBLIC_APP_URL}/endorsements`,
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURIComponent('Bakir Gracić | Endorsements')}`,
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

const endorsements = [
	{
		img: JasminHasancevicHeadshotJPG,
		full_name: 'Jasmin Hasančević',
		email: 'management (at) icc (dot) ba',
		role: 'CEO of ICC.ba Tuzla',
		text: 'I am pleased to recommend Bakir. As CEO of a business consulting firm, I worked with Bakir during educational meetings on CV writing, interviews, business management, and public relations. Bakir was assertive, clever, and skilled in these areas. He communicated complex concepts clearly and engaged diverse audiences effectively. His proactive approach greatly contributed to our meeting. Bakir will be a valuable asset to any team, and I recommend him without reservation!',
	},
];

export default function Endorsements() {
	return (
		<>
			<Script
				id='endorsements-schema-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ItemList',
						itemListElement: endorsements.map((endorsement, index) => ({
							'@type': 'ListItem',
							position: index + 1,
							review: {
								'@type': 'Review',
								reviewBody: endorsement.text,
								author: {
									'@type': 'Person',
									name: endorsement.full_name,
									jobTitle: endorsement.role,
								},
								itemReviewed: {
									'@type': 'Person',
									name: 'Bakir Gracić',
									image: 'https://bakir.dev/bakir-gracic.jpg',
									jobTitle: 'Fullstack Web Developer',
									description: 'Bakir Gracić is a fullstack web developer who builds high-quality, robust, scalable and secure software that adds value to the world.',
									url: 'https://bakir.dev',
									sameAs: ['https://www.linkedin.com/in/bakirgracic/', 'https://github.com/BakirGracic', 'https://buymeacoffee.com/bakirgracic'],
									email: 'mailto:me@bakir.dev',
								},
							},
						})),
					}),
				}}
			/>
			<section>
				<h1 className='heading1'>My Endorsements</h1>
				<section className='flex flex-col gap-10'>
					{endorsements.map(({ img, full_name, email, role, text }, index) => (
						<EndorsementCard
							key={index}
							img={img}
							full_name={full_name}
							email={email}
							role={role}
							text={text}
						/>
					))}
				</section>
			</section>
		</>
	);
}
