import { Marked } from "marked";

export default async function CustomMDX({ rawMD }: { rawMD: string }) {
    const marked = new Marked();

    const unsanitized = await marked.parse(rawMD);

    return <article className="prose" dangerouslySetInnerHTML={{ __html: unsanitized }}></article>;
}

// TODO customize md parsed html tags
// TODO highlight code blocks
// TODO make # links for h tags
