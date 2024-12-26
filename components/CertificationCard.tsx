import Image, { StaticImageData } from 'next/image';
import Button from '@/components/Button';
import { CheckBadgeIcon } from '@heroicons/react/16/solid';

export default function CertificationCard({ img, title, description, link }: { img: StaticImageData | string; title: string; description: string; link: string }) {
	return (
		<div className='box'>
			<Image
				src={img}
				alt={`Certification Card Image with title ${title}`}
				width={300}
				height={300}
				className='rounded-t-2xl mx-auto md:mx-none'
				loading='lazy'
			/>
			<div className='p-4'>
				<h2 className='cardHeading text-center md:text-left'>{title}</h2>
				<p className='mb-7 text-center md:text-left'>{description}</p>
				<div className='cardButtons'>
					<Button
						href={link}
						blank
						title='Verify Certification Link'
						className='px-3 py-2'
					>
						<CheckBadgeIcon className='size-4' />
						Verify
					</Button>
				</div>
			</div>
		</div>
	);
}
