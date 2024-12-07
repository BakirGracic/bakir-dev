import ArrowLink from '@/components/ArrowLink';
import { BlogPosts } from '@/components/BlogPosts';

export default function Page() {
	return (
		<>
			<section className='mb-14'>
				<h1 className='mb-6 text-3xl font-semibold'>Howdy 👋</h1>
				<p>
					Name&apos;s Bakir & I&apos;m a full-stack web developer. I try to work hard and build high-quality, robust, scalable and secure
					software that adds value to the world. My goal is to apply skills in profitable & real business solutions. Feel free to learn more
					about me by exploring my website. If you want to chat, HMU on any platform. Cheers!
				</p>
			</section>

			<section className='mb-14'>
				<h2 className='mb-6 text-xl font-bold'>Recent blog posts</h2>
				<BlogPosts limit={5} />
				<ArrowLink
					href='/blog'
					text='See all blog posts'
				/>
			</section>

			<section className='mb-14'>
				<h2 className='mb-6 text-xl font-bold'>Projects</h2>
				<p className='mb-4'>
					Check out some of the projects I&apos;ve worked on. Each project showcases my skills and dedication for creating awesome software.
					See what I&apos;ve been up to lately!
				</p>
				<ArrowLink
					href='/projects'
					text='See all projects'
				/>
			</section>

			<section>
				<h2 className='mb-6 text-xl font-bold'>Certifications</h2>
				<p className='mb-4'>
					Certifications validate expertise and commitment to continuous learning in the industry. Find out how certifications contribute to
					my professional growth.
				</p>
				<ArrowLink
					href='/certifications'
					text='See all certifications'
				/>
			</section>
		</>
	);
}
