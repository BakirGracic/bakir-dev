import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { DocumentTextIcon, LinkIcon } from '@heroicons/react/24/solid';
import GitHub from '@/components/icons/GitHub';

export default function ProjectCard({
	imgSrc,
	title,
	description,
	webLink,
	gitLink,
	blogLink,
}: {
	imgSrc: StaticImageData | string;
	title: string;
	description: string;
	webLink?: string;
	gitLink?: string;
	blogLink?: string;
}) {
	return (
		<div className='border border-neutral-600 rounded-2xl'>
			<Image
				src={imgSrc}
				alt='How Much I Wasted'
				className='rounded-t-2xl'
				width={9999999}
				height={9999999}
			/>
			<div className='p-4'>
				<h2 className='font-semibold text-xl mb-2'>{title}</h2>
				<p className='mb-6'>{description}</p>
				<div className='flex items-baseline flex-wrap justify-end gap-3'>
					{webLink ? (
						<Link
							className='px-3 py-2 rounded-lg border border-neutral-600 flex items-center gap-2'
							href={webLink}
							target='_blank'
						>
							<LinkIcon className='size-4' />
							Website
						</Link>
					) : null}
					{gitLink ? (
						<Link
							className='px-3 py-2 rounded-lg border border-neutral-600 flex items-center gap-2'
							href={gitLink}
							target='_blank'
						>
							<GitHub className='size-4' />
							GitHub
						</Link>
					) : null}
					{blogLink ? (
						<Link
							className='px-3 py-2 rounded-lg border border-neutral-600 flex items-center gap-2'
							href={blogLink}
							target='_blank'
						>
							<DocumentTextIcon className='size-4' />
							Blog
						</Link>
					) : null}
				</div>
			</div>
		</div>
	);
}
