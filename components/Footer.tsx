import ArrowLink from "@/components/ArrowLink";

const footerLinks: string[] = ["links", "sitemap", "rss"];

export default function Footer() {
    return (
        <footer className="mt-16">
            <ul className="flex flex-col md:flex-row gap-2 md:gap-5">
                {footerLinks.map((path) => (
                    <li key={path}>
                        <ArrowLink
                            href={`/${path}`}
                            text={path}
                            blank
                        />
                    </li>
                ))}
            </ul>
            <p className="mt-5 darker-text">bakir.dev | {new Date().getFullYear()}</p>
        </footer>
    );
}
