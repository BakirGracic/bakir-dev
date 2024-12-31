'use client';

import { useActionState } from 'react';
import { contactFormSend } from '@/actions/contact-form';
import { CheckCircleIcon, ExclamationTriangleIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

const defaultFormState = {
	msg: '',
	status: '',
};

export default function ContactForm() {
	const [state, formAction, isPending] = useActionState(contactFormSend, defaultFormState);

	return (
		<>
			<form action={formAction}>
				<div className='mb-5'>
					<label htmlFor='fName' className='text-sm'>
						Name
					</label>
					<input
						type='text'
						className='contactInput'
						placeholder='John Doe'
						name='fName'
						autoComplete='name'
						maxLength={40}
						minLength={2}
						disabled={isPending}
					/>
				</div>

				<div className='mb-5'>
					<label htmlFor='fContact' className='text-sm'>
						Contact Detail<sup className='text-[#ff0000]'>*</sup>
					</label>
					<input
						type='text'
						className='contactInput'
						placeholder='phone/email/handle/url - anything'
						name='fContact'
						autoComplete='email'
						maxLength={60}
						minLength={2}
						required
						disabled={isPending}
					/>
				</div>

				<div className='mb-5'>
					<label htmlFor='fSubject' className='text-sm'>
						Subject
					</label>
					<input
						type='text'
						className='contactInput'
						placeholder='I Have An Awesome Idea!'
						name='fSubject'
						maxLength={100}
						minLength={2}
						disabled={isPending}
					/>
				</div>

				<div className='mb-5'>
					<label htmlFor='fMessage' className='text-sm'>
						Message<sup className='text-[#ff0000]'>*</sup>
					</label>
					<textarea
						className='contactInput'
						placeholder="Hello I'm... This... That... Bye!"
						name='fMessage'
						maxLength={3600}
						minLength={3}
						rows={5}
						required
						disabled={isPending}
					/>
				</div>

				{/* med medeni */}
				<input
					type='email'
					className='contactMEDMEDENI'
					placeholder='you@domain.com'
					autoComplete='email'
					name='fmmEmail'
					maxLength={100}
					minLength={2}
					defaultValue=''
					disabled={isPending}
				/>
				<input
					type='text'
					className='contactMEDMEDENI'
					placeholder='Name'
					autoComplete='name'
					name='fmmName'
					maxLength={40}
					minLength={2}
					defaultValue=''
					disabled={isPending}
				/>
				{/* med medeni */}

				<div className='flex items-center gap-5'>
					<button type='submit' disabled={isPending} className='button px-3 py-2 contactSubmit'>
						<PaperAirplaneIcon className='size-5' />
						<span>Send</span>
					</button>

					{state.status === 'OK' && (
						<div className='flex items-center gap-1 text-successGreen fill-successGreen'>
							<CheckCircleIcon className='size-5' />
							<p className='leading-tight'>{state.msg}</p>
						</div>
					)}
					{state.status === 'ERR' && (
						<div className='flex items-center gap-1 text-errorRed fill-errorRed'>
							<ExclamationTriangleIcon className='size-5' />
							<p className='leading-tight'>{state.msg}</p>
						</div>
					)}
				</div>
			</form>
		</>
	);
}
