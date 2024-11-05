import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    metadataBase: new URL(`${process.env.APP_URL}/projects`),
    alternates: {
        canonical: `${process.env.APP_URL}/projects`,
    },
    openGraph: {
        title: "Bakir the Dev | Projects",
        url: `${process.env.APP_URL}/projects`,
        images: [
            {
                url: `${process.env.APP_URL}/og?title=Projects`,
                alt: "Bakir the Dev OpenGraph Image",
            },
        ],
    },
    twitter: {
        title: "Bakir the Dev | Projects",
        images: {
            url: `${process.env.APP_URL}/og?title=Projects`,
            alt: "Bakir the Dev OpenGraph Image",
        },
    },
};

export default function Page() {
    return (
        <section>
            <h1 className="mb-6 font-semibold text-2xl">Coming Soon...!</h1>
            <p>I&apos;m currenly cooking a few awesome projects & apps</p>
            <p>Looking forward to share them with you here!</p>
        </section>
    );
}
