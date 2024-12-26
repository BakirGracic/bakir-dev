import Image, { StaticImageData } from 'next/image';
import Button from '@/components/Button';
import { DocumentTextIcon, LinkIcon } from '@heroicons/react/24/solid';
import GitHub from '@/components/icons/GitHub';

export default function ProjectCard({
	img,
	title,
	description,
	webLink,
	gitLink,
	blogLink,
}: {
	img: StaticImageData | string;
	title: string;
	description: string;
	webLink?: string;
	gitLink?: string;
	blogLink?: string;
}) {
	return (
		<div className='box'>
			<Image
				src={img}
				alt={`Project Card Image with title ${title}`}
				width={640}
				height={360}
				className='rounded-t-2xl'
				loading='lazy'
			/>
			<div className='p-4'>
				<h2 className='cardHeading'>{title}</h2>
				<p className='mb-7'>{description}</p>
				<div className='cardButtons'>
					{webLink && (
						<Button
							href={webLink}
							blank
							className='px-3 py-2'
							title='Website Link'
						>
							<LinkIcon className='size-4' />
							<span>Website</span>
						</Button>
					)}
					{gitLink && (
						<Button
							href={gitLink}
							blank
							className='px-3 py-2'
							title='GitHub Link'
						>
							<GitHub className='size-4' />
							<span>GitHub</span>
						</Button>
					)}
					{blogLink && (
						<Button
							href={blogLink}
							blank
							className='px-3 py-2'
							title='Blog Post Link'
						>
							<DocumentTextIcon className='size-4' />
							<span>Blog</span>
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
