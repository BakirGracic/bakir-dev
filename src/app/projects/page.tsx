import Script from 'next/script';
import Card from '@/features/projects/components/Card';
import HowMuchIWastedPNG from '@/features/projects/images/howmuchiwasted.png';
import DaisyUIThemePreviewPNG from '@/features/projects/images/daisyuithemepreview.png';
import EuroparkPNG from '@/features/projects/images/europark.png';

export const metadata = {
	title: 'Bakir Gracić | Projects',
	description:
		'Projects are a great way to showcase your skills and knowledge. Explore some of projects showcasing my skills and knowledge in various domains.',
	alternates: {
		canonical: `${process.env.NEXT_PUBLIC_APP_URL}/projects`,
		languages: {
			'en-US': `${process.env.NEXT_PUBLIC_APP_URL}/projects`
		}
	},
	openGraph: {
		title: 'Bakir Gracić | Projects',
		description:
			'Projects are a great way to showcase your skills and knowledge. Explore some of projects showcasing my skills and knowledge in various domains.',
		url: `${process.env.NEXT_PUBLIC_APP_URL}/projects`,
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_APP_URL}/og?title=${encodeURIComponent('Bakir Gracić | Projects')}`,
				alt: 'Bakir Gracić Personal Website and Blog OpenGraph Image',
				width: 1200,
				height: 630
			}
		]
	}
};

export default function Projects() {
	return (
		<>
			<Script
				id='projects-schema-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ItemList',
						name: "Bakir Gracić's Projects and Work",
						description:
							'A list of projects completed by Bakir Gracić, showcasing various skills and technologies.',
						itemListElement: [
							{
								'@type': 'CreativeWork',
								name: 'DaisyUI Theme Preview',
								url: 'https://daisyui-theme-preview.bakir.dev/',
								description: 'Preview DaisyUI preset and custom themes',
								dateCreated: '2024-08-01',
								author: {
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
								},
								keywords: 'Web Application, NextJS, JavaScript, React, DaisyUI, TailwindCSS',
								license: 'https://opensource.org/licenses/MIT',
								programmingLanguage: 'JavaScript',
								softwareRequirements: 'Node.js, React, Next.js'
							},
							{
								'@type': 'CreativeWork',
								name: 'How Much I Wasted?',
								url: 'https://howmuchiwasted.bakir.dev/',
								description: 'Check how much of your life you have wasted',
								dateCreated: '2024-08-01',
								author: {
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
								},
								keywords: 'Web Application, NextJS, JavaScript, React',
								license: 'https://opensource.org/licenses/MIT',
								programmingLanguage: 'JavaScript',
								softwareRequirements: 'Node.js, React, Next.js'
							},
							{
								'@type': 'CreativeWork',
								name: 'CS2 Dedicated Server in 2024',
								url: 'https://github.com/BakirGracic/cs2-dedicated-server-in-2024',
								description: 'Guide on how to host a CS2 server in 2024',
								dateCreated: '2024-08-01',
								author: {
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
								},
								keywords: 'Guide, CS2, Server, Hosting',
								license: 'https://opensource.org/licenses/MIT',
								programmingLanguage: 'Markdown',
								softwareRequirements: 'Markdown, VPS, Cloud, Linux'
							},
							{
								'@type': 'CreativeWork',
								name: 'BiH Registration Plates',
								url: 'https://github.com/BakirGracic/bih-registration-plates/',
								description: 'Comprensive list of BiH registration plates with a C++ project',
								dateCreated: '2024-08-01',
								author: {
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
								},
								keywords: 'C++, Registration Plates, Bosnia',
								license: 'https://opensource.org/licenses/MIT',
								programmingLanguage: 'C++',
								softwareRequirements: 'CNU GCC Compiler, C++, Terminal'
							},
							{
								'@type': 'CreativeWork',
								name: 'Windows Font Installer',
								url: 'https://github.com/BakirGracic/windows-font-installer/',
								description: 'PowerShell script to install bulk fonts on Windows',
								dateCreated: '2024-08-01',
								author: {
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
								},
								keywords: 'PowerShell, Windows, Fonts',
								license: 'https://opensource.org/licenses/MIT',
								programmingLanguage: 'PowerShell',
								softwareRequirements: 'Windows, PowerShell, Administrator, Fonts'
							},
							{
								'@type': 'CreativeWork',
								name: 'Web Request Spammer',
								url: 'https://github.com/BakirGracic/curl-get-request-spammer/',
								description: 'Spam GET requests to a web URL using CURL',
								dateCreated: '2024-08-01',
								author: {
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
								},
								keywords: 'CURL, Web Requests, Spammer',
								license: 'https://opensource.org/licenses/MIT',
								programmingLanguage: 'Bash',
								softwareRequirements: 'Linux, Terminal, CURL, URL'
							}
						]
					})
				}}
			/>
			<section>
				<h1 className='heading1'>Some of my projects</h1>
				<div className='flex flex-col gap-5'>
					{/* europark */}
					<Card
						img={EuroparkPNG}
						title='EuroPark'
						description='Private Airport Parking Business Website'
						webLink='https://europark.ba'
						gitLink='https://github.com/BakirGracic/europark/'
					/>

					{/* daisyui theme preview */}
					<Card
						img={DaisyUIThemePreviewPNG}
						title='DaisyUI Theme Preview'
						description='Preview DaisyUI preset and custom themes'
						gitLink='https://github.com/BakirGracic/daisyui-theme-preview'
						blogLink='https://bakir.dev/blog/tailwind-and-component-libraries-write-frontends-fast'
					/>

					{/* how much i wasted */}
					<Card
						img={HowMuchIWastedPNG}
						title='How Much I Wasted?'
						description='Check how much of your life you have wasted'
						gitLink='https://github.com/BakirGracic/how-much-i-wasted'
						blogLink='https://bakir.dev/blog/how-time-flies-reality-lifes-countdown'
					/>

					{/* cs2 dedicated server in 2024 */}
					<Card
						img='https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/cs2/bumper.png'
						title='CS2 Dedicated Server in 2024'
						description='Guide on how to host a CS2 server in 2024'
						blogLink='https://bakir.dev/blog/cs2-dedicated-server-in-2024'
					/>

					{/* bih registration plates */}
					<Card
						img='https://opengraph.githubassets.com/1/BakirGracic/bih-registration-plates/'
						title='BiH Registration Plates'
						description='Comprensive list of BiH registration plates with a C++ project'
						gitLink='https://github.com/BakirGracic/bih-registration-plates/'
						blogLink='https://bakir.dev/blog/exploring-bosnian-car-registration-plates-structure-variations-unique-cpp-project'
					/>

					{/* windows font installer */}
					<Card
						img='https://opengraph.githubassets.com/1/BakirGracic/windows-font-installer/'
						title='Windows Font Installer'
						description='PowerShell script to install bulk fonts on Windows'
						gitLink='https://github.com/BakirGracic/windows-font-installer/'
					/>

					{/* curl get request spammer */}
					<Card
						img='https://opengraph.githubassets.com/1/BakirGracic/curl-get-request-spammer/'
						title='Web Request Spammer'
						description='Spam GET requests to a web URL using CURL'
						gitLink='https://github.com/BakirGracic/curl-get-request-spammer/'
					/>
				</div>
			</section>
		</>
	);
}
