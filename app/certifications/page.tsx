import Link from "next/link";
import Image from "next/image";
import GitHubFoundations from "@/public/certifications/github_foundations/github-foundations.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Certifications",
    metadataBase: new URL(`${process.env.APP_URL}/certifications`),
    alternates: {
        canonical: `${process.env.APP_URL}/certifications`,
    },
    openGraph: {
        title: "Bakir the Dev | Certifications",
        url: `${process.env.APP_URL}/certifications`,
        images: [
            {
                url: `${process.env.APP_URL}/og?title=Certifications`,
                alt: "Bakir the Dev OpenGraph Image",
            },
        ],
    },
    twitter: {
        title: "Bakir the Dev | Certifications",
        images: {
            url: `${process.env.APP_URL}/og?title=Certifications`,
            alt: "Bakir the Dev OpenGraph Image",
        },
    },
};

const certificationLinks = [
    {
        link: "https://www.credly.com/badges/6e715e2b-cb75-4c1b-9a2f-aa4610e2c8fc/public_url",
        icon: GitHubFoundations,
        title: "GitHub",
    },
];

export default function Page() {
    return (
        <section className="grid grid-cols-3 gap-4">
            {certificationLinks.map((item, index) => (
                <Link
                    key={index}
                    href={item.link}
                    title={item.title}
                    target="_blank"
                    className="p-2 cursor-pointer border border-solid border-neutral-600 rounded-xl duration-[250ms] hover:bg-neutral-800 hover:shadow-inner"
                >
                    <Image
                        src={item.icon}
                        alt={item.title}
                    />
                </Link>
            ))}
        </section>
    );
}
