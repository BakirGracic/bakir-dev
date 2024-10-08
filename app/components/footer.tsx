import Link from "next/link";
import ArrowIcon from "./ArrowIcon";

const footerItems = {
    sitemap: "/sitemap.xml",
    rss: "/rss",
};

export default function Footer() {
    return (
        <footer className="mt-14 mb-6">
            <ul className="flex flex-col text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
                {Object.entries(footerItems).map(([key, href]) => (
                    <li key={key}>
                        <Link
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-500"
                            rel="noopener noreferrer"
                            target="_blank"
                            href={href}
                        >
                            <ArrowIcon />
                            <p className="ml-2 h-7">{key}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                bakir.dev | {new Date().getFullYear()}
            </p>
        </footer>
    );
}
