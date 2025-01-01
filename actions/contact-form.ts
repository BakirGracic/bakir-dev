'use server';

import { revalidatePath } from 'next/cache';
import { ContactFormFormStatus } from '@/types/contact-form';

export async function contactFormSend(
	state: ContactFormFormStatus,
	formData: FormData
): Promise<ContactFormFormStatus> {
	const sanitize = (str: FormDataEntryValue | null) => {
		return str ? str.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
	};

	const formFields = {
		name: sanitize(formData.get('fName')),
		contact: sanitize(formData.get('fContact')),
		subject: sanitize(formData.get('fSubject')),
		message: sanitize(formData.get('fMessage')),
		honeyPotEmail: sanitize(formData.get('fmmEmail')),
		honeyPotName: sanitize(formData.get('fmmName')),
	};

	const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || 'Bot token not found!';
	const botChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || 'Chat ID not found!';
	const botApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
	const botMessage = `
        📩 *[bakir.dev] New Contact Form Submission*:
        - *Name*: ${formFields.name}
        - *Contact*: ${formFields.contact}
        - *Subject*: ${formFields.subject}
        - *Message*: ${formFields.message}
    `;

	try {
		const response = await fetch(botApiUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: botChatId,
				text: botMessage,
				parse_mode: 'Markdown',
			}),
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(errorText);
		}

		return { msg: 'Message sent!', status: 'OK' };
	} catch (error: unknown) {
		return { msg: 'Something went wrong!', status: 'ERR' };
	} finally {
		revalidatePath('/links');
	}
}
