export function escapeXml(unsafe) {
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

export function formatDatePublish(date) {
	const targetDate = new Date(date.includes('T') ? date : `${date}T00:00:00`);

	return targetDate.toLocaleString('en-us', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
}

export function slugify(str) {
	const charMap = {
		' ': '-',
	};

	return str
		.toLowerCase()
		.split('')
		.map((char) => charMap[char] || char)
		.join('')
		.replace(/[^a-z0-9\-]/g, '');
}
