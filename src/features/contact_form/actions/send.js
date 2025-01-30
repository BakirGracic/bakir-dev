'use server';

import { sanitize } from '@/lib/misc';

export async function send(state, formData) {
	const formFields = {
		name: sanitize(formData.get('fName')),
		contact: sanitize(formData.get('fContact')),
		subject: sanitize(formData.get('fSubject')),
		message: sanitize(formData.get('fMessage')),
		honeyPotEmail: sanitize(formData.get('fmmEmail')),
		honeyPotName: sanitize(formData.get('fmmName')),
	};

	const botToken = process.env.TELEGRAM_BOT_TOKEN;
	const botChatId = process.env.TELEGRAM_CHAT_ID;
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
			throw new Error();
		}

		return { msg: 'Message sent!', status: 'OK' };
	} catch {
		return { msg: 'Something went wrong!', status: 'ERR' };
	}
}
