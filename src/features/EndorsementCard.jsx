import Image, { StaticImageData } from 'next/image';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { BuildingOfficeIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function EndorsementCard({ img, full_name, email, role, text }) {
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex items-center gap-4'>
				{img != null ? (
					<Image
						src={img}
						alt={full_name}
						width={64}
						height={64}
						className='rounded-full'
						loading='lazy'
					/>
				) : (
					<UserCircleIcon className='h-16 w-16' />
				)}
				<div>
					<p className='mb-1 font-medium'>{full_name}</p>
					<div className='flex items-center gap-1 text-xs'>
						<BuildingOfficeIcon className='size-4' />
						<span>{role}</span>
					</div>
					<div className='flex items-center gap-1 text-xs'>
						<EnvelopeIcon className='size-4' />
						<span>{email}</span>
					</div>
				</div>
			</div>
			<p>&quot;{text}&quot;</p>
		</div>
	);
}
