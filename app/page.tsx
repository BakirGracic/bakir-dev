import ArrowLink from '@/components/ArrowLink';
import { BlogPosts } from '@/components/BlogPosts';

export default function Homepage() {
	return (
		<>
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
