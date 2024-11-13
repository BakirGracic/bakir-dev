import ArrowLink from "@/components/ArrowLink";

const footerLinks = [
    {href: "/links", text: "links"},
    {href: "https://github.com/BakirGracic/bakir-dev", text: "github"},
    {href: "/sitemap", text: "sitemap"},
    {href: "/rss", text: "rss"}
];

export default function Footer() {
    return (
        <footer className="mt-16">
            <ul className="flex flex-col md:flex-row gap-2 md:gap-5">
                {footerLinks.map(({href, text}, index) => (
                    <li key={index}>
                        <ArrowLink
                            href={href}
                            text={text}
                            blank
                        />
                    </li>
                ))}
            </ul>
            <p className="mt-5 darker-text">bakir.dev | {new Date().getFullYear()}</p>
        </footer>
    );
}
