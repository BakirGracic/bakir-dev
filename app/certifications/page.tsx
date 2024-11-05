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

export default function Page() {
    return (
        <section>
            <h1 className="mb-6 font-semibold text-2xl">Coming Soon...!</h1>
            <p>Currenly acquiring few awesome certifications, and a masters degree!</p>
            <p>Can&apos;t wait to share them with you here!</p>
        </section>
    );
}
