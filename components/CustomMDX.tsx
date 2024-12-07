import { Marked } from 'marked';

export default function CustomMDX({ rawMD }: { rawMD: string }) {
	const marked = new Marked();

	const unsanitized = marked.parse(rawMD);

	return (
		<article
			className='prose'
			dangerouslySetInnerHTML={{ __html: unsanitized }}
		></article>
	);
}

// TODO customize md parsed html tags
// TODO highlight code blocks
// TODO make # links for h tags
