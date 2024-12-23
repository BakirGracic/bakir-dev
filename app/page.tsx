import ArrowLink from '@/components/ArrowLink';
import { BlogPosts } from '@/components/BlogPosts';
import Script from 'next/script';

export default function Homepage() {
	return (
		<>
			<Script
				id='homepage-schema-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Person',
						name: 'Bakir Gracić',
						image: 'https://bakir.dev/bakir-gracic.jpg',
						jobTitle: 'Fullstack Web Developer',
						description:
							'Bakir Gracić is a fullstack web developer who builds high-quality, robust, scalable and secure software that adds value to the world.',
						url: 'https://bakir.dev',
						sameAs: ['https://www.linkedin.com/in/bakirgracic/', 'https://github.com/BakirGracic', 'https://buymeacoffee.com/bakirgracic'],
						email: 'mailto:me@bakir.dev',
						address: {
							'@type': 'PostalAddress',
							addressLocality: 'Bosnia and Herzegovina',
							addressRegion: 'Federation of Bosnia and Herzegovina',
							postalCode: '71000',
							addressCountry: 'BS',
						},
						alumniOf: {
							'@type': 'EducationalOrganization',
							name: 'Fakultet Informacijskih Tehnologija',
							url: 'https://fit.ba',
						},
						knowsAbout: ['Web Development', 'DevSecOps', 'Fullstack Web', 'NextJS', 'PocketBase', 'Web for Business'],
						performerIn: {
							'@type': 'Event',
							name: 'Google Developer Group Sarajevo',
							startDate: '2025-01-10',
							location: {
								'@type': 'Place',
								name: 'Sarajevo, Bosnia and Herzegovina',
							},
						},
					}),
				}}
			/>

			<section className='mb-10'>
				<h1 className='heading1'>Howdy 👋</h1>
				<p className='tracking-tight'>
					Name&apos;s Bakir and I&apos;m a full-stack web developer. I try to work hard and build high-quality, robust, scalable and secure software that adds
					value to the world. My goal is to apply skills in profitable & real business solutions. Feel free to learn more about me by exploring my website. If
					you want to chat, HMU on any platform. Cheers!
				</p>
			</section>

			<section className='mb-10'>
				<h2 className='heading2'>Recent blog posts</h2>
				<BlogPosts limit={5} />
				<ArrowLink
					href='/blog'
					text='See all blog posts'
				/>
			</section>

			<section className='mb-10'>
				<h2 className='heading2'>Projects</h2>
				<p className='mb-4 tracking-tight'>
					Check out some of the projects I&apos;ve worked on. Each project showcases my skills and dedication for creating awesome software. See what I&apos;ve
					been up to lately!
				</p>
				<ArrowLink
					href='/projects'
					text='See all projects'
				/>
			</section>

			<section>
				<h2 className='heading2'>Certifications</h2>
				<p className='mb-4 tracking-tight'>
					Certifications validate expertise and commitment to continuous learning in the industry. Find out how certifications contribute to my professional
					growth.
				</p>
				<ArrowLink
					href='/certifications'
					text='See all certifications'
				/>
			</section>
		</>
	);
}
