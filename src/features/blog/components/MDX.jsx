import { marked } from 'marked';

export default function MDX({ rawMD }) {
	const html = marked.parse(rawMD);

	return (
		<article
			className='prose dark:prose-invert'
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}

// TODO custom blog parsing
// make h tags be nextjs links with # link of their slug with function slugify() and to have hashtag icon visible on hover right of the h tag
// make all text be black on white theme and white on black theme
// make links have arrow to the left of them
// pre (or code blocks) whould have 'box' css class and have mono font text inside and have clipboard icon inside the box that when clicked copies code to clipboard ans shows check icon for few seconds after copying
