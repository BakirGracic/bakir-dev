import fs from "fs";
import path from "path";

function getMDXData(filePath: string) {
    const mdxFiles = fs.readdirSync(filePath).filter((file) => path.extname(file) === ".mdx");

    return mdxFiles.map((file) => {
        const { metadata, content } = readAndParseMDXFile(path.join(filePath, file));
        const slug = path.basename(file, path.extname(file));

        return {
            metadata,
            content,
            slug,
        };
    });
}

function readAndParseMDXFile(path: string) {
    const rawContent = fs.readFileSync(path, "utf-8");

    const match = rawContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/) || "";

    const [, frontmatter, content] = match;

    const metadata: { [key: string]: string } = {};
    const frontmatterLines = frontmatter.split("\n");

    frontmatterLines.forEach((line) => {
        const [key, ...valueParts] = line.split(":");
        if (key && valueParts.length) {
            const value = valueParts.join(":").replace(/['"]/g, "").trim();
            metadata[key.trim()] = value;
        }
    });

    return {
        metadata,
        content: content.trim(),
    };
}

export function getBlogPosts(limit: number = -1) {
    const CWD = path.join(process.cwd(), "blog_posts");

    const posts = getMDXData(CWD).sort((a, b) => {
        return new Date(b.metadata.published).getTime() - new Date(a.metadata.published).getTime();
    });

    return limit === -1 ? posts : posts.slice(0, limit);
}

export function formatDateRelative(date: string) {
    const currentDate = new Date();
    const targetDate = new Date(date.includes("T") ? date : `${date}T00:00:00`);
    const diffTime = currentDate.getTime() - targetDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays > 365 ? `${Math.floor(diffDays / 365)}y ago` : diffDays > 30 ? `${Math.floor(diffDays / 30)}mo ago` : diffDays > 0 ? `${diffDays}d ago` : "Today";
}

export function formatDatePublish(date: string) {
    const targetDate = new Date(date.includes("T") ? date : `${date}T00:00:00`);

    return targetDate.toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}
