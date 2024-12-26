export function escapeXml(unsafe: string): string {
	return unsafe.replace(/[<>&'"]/g, (c) => {
		switch (c) {
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case '&':
				return '&amp;';
			case "'":
				return '&apos;';
			case '"':
				return '&quot;';
			default:
				return c;
		}
	});
}

export function formatDateRelative(date: string) {
	const currentDate = new Date();
	const targetDate = new Date(date.includes('T') ? date : `${date}T00:00:00`);
	const diffTime = currentDate.getTime() - targetDate.getTime();
	const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

	return diffDays > 365 ? `${Math.floor(diffDays / 365)}y ago` : diffDays > 30 ? `${Math.floor(diffDays / 30)}mo ago` : diffDays > 0 ? `${diffDays}d ago` : 'Today';
}

export function formatDatePublish(date: string) {
	const targetDate = new Date(date.includes('T') ? date : `${date}T00:00:00`);

	return targetDate.toLocaleString('en-us', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
}

export function slugify(str: string): string {
	const charMap: { [key: string]: string } = {
		' ': '-',
	};

	return str
		.toLowerCase()
		.split('')
		.map((char) => charMap[char] || char)
		.join('')
		.replace(/[^a-z0-9\-]/g, '');
}
