import Button from '@/components/Button';
import Image, { StaticImageData } from 'next/image';
import { CheckBadgeIcon } from '@heroicons/react/16/solid';

export default function CertificationCard({ img, title, description, link }: { img: StaticImageData | string; title: string; description: string; link: string }) {
	return (
		<div className='box'>
			<Image
				src={img}
				alt='Certification Image'
				width={280}
				height={280}
				className='rounded-t-2xl'
				loading='lazy'
			/>
			<div className='p-4'>
				<h2 className='cardHeading'>{title}</h2>
				<p className='mb-7'>{description}</p>
				<div className='cardButtons'>
					<Button
						href={link}
						blank
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
