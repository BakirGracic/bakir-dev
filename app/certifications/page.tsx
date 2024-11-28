import CertificationCard from "@/components/CertificationCard";
import type { Metadata } from "next";
import GitHubFoundations from "@/public/certifications/github_foundations/github-foundations.png";

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
        img: GitHubFoundations,
        title: "GitHub Foundations",
        description: "Learn GitHub and Git",
        link: "https://www.credly.com/badges/6e715e2b-cb75-4c1b-9a2f-aa4610e2c8fc/public_url",
    },
];

export default function Page() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certificationLinks.map((item, index) => (
                <CertificationCard
                    key={index}
                    img={item.img}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                />
            ))}
        </section>
    );
}
