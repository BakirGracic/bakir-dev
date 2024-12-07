import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { CheckBadgeIcon } from '@heroicons/react/16/solid';

export default function CertificationCard({
	img,
	title,
	description,
	link,
}: {
	img: StaticImageData | string;
	title: string;
	description: string;
	link: string;
}) {
	return (
		<div className='border border-neutral-600 rounded-2xl'>
			<Image
				src={img}
				alt='How Much I Wasted'
				className='rounded-t-2xl'
				width={9999999}
				height={9999999}
			/>
			<div className='p-4'>
				<h2 className='font-semibold text-xl mb-2'>{title}</h2>
				<p className='mb-6'>{description}</p>
				<div className='flex items-baseline flex-wrap justify-end gap-3'>
					<Link
						className='px-3 py-2 rounded-lg border border-neutral-600 flex items-center gap-2'
						href={link}
						target='_blank'
					>
						<CheckBadgeIcon className='size-4' />
						Verify
					</Link>
				</div>
			</div>
		</div>
	);
}
