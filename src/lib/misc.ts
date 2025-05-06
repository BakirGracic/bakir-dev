export function escapeXml(string: string) {
	return string.replace(/[<>&'"]/g, (c) => {
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

export function sanitize(string: string) {
	return string ? string.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
}

export function formatDatePublish(date: string) {
	const targetDate = new Date(date.includes('T') ? date : `${date}T00:00:00`);

	return targetDate.toLocaleString('en-us', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
}

export function slugify(string: string) {
	const charMap: { [key: string]: string } = {
		' ': '-'
	};

	return string
		.toLowerCase()
		.split('')
		.map((char) => charMap[char] || char)
		.join('')
		.replace(/[^a-z0-9\-]/g, '');
}
