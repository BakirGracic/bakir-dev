'use server';

import nodemailer from 'nodemailer';
import { revalidatePath } from 'next/cache';
import { ContactFormFormStatus } from '@/types/contact-form';

export async function contactFormSend(state: ContactFormFormStatus, formData: FormData): Promise<ContactFormFormStatus> {
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

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.NODEMAILER_USER,
			pass: process.env.NODEMAILER_PASS,
		},
	});

	try {
		if (formFields.honeyPotEmail || formFields.honeyPotName) {
			throw new Error('Bot Detected!');
		}

		const res = await transporter.sendMail({
			from: process.env.NODEMAILER_USER,
			to: 'me@bakir.dev',
			subject: formFields.subject,
			html: `<meta content="width=device-width"name=viewport><meta content="text/html; charset=UTF-8"http-equiv=Content-Type><table style="width:100%!important;height:100%;background-color:#fafafa;padding:20px;font-family:'Helvetica Neue',Helvetica,Helvetica,Arial,'Lucida Grande',sans-serif;font-size:100%;line-height:1.6"bgcolor=#fafafa><tr><td><td bgcolor=#FFFFFF style="border:1px solid #eee;background-color:#fff;border-radius:5px;display:block!important;max-width:600px!important;margin:0 auto!important;clear:both!important"><div style="padding:20px;max-width:600px;margin:0 auto;display:block"><table style=width:100%><tr><td><h1 style="font-weight:200;font-size:36px;margin:20px 0 30px 0;color:#333">bakir.dev Contact Form</h1><h2 style="font-weight:200;font-size:16px;margin:20px 0;color:#333"><strong>Name:</strong> ${formFields.name}</h2><h2 style="font-weight:200;font-size:16px;margin:20px 0;color:#333"><strong>Contact:</strong> ${formFields.contact}</h2><h2 style="font-weight:200;font-size:16px;margin:20px 0;color:#333"><strong>Subject:</strong> ${formFields.subject}</h2><h2 style="font-weight:200;font-size:16px;margin:20px 0;color:#333"><strong>Message:</strong> ${formFields.message}</h2></table></div><td></table>`,
		});

		return { msg: 'Message sent!', status: 'OK' };
	} catch (error: unknown) {
		return { msg: 'Something went wrong!', status: 'ERR' };
	} finally {
		revalidatePath('/links');
	}
}
