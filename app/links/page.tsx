import Link from "next/link";
import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";
import Twitter from "@/components/icons/Twitter";
import Discord from "@/components/icons/Discord";
import Luma from "@/components/icons/Luma";
import Meetup from "@/components/icons/Meetup";
import CV from "@/components/icons/CV";
import BuyMeACoffee from "@/components/icons/BuyMeACoffee";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Links",
    metadataBase: new URL(`${process.env.APP_URL}/links`),
    alternates: {
        canonical: `${process.env.APP_URL}/links`,
    },
    openGraph: {
        title: "Bakir the Dev | Links",
        url: `${process.env.APP_URL}/links`,
        images: [
            {
                url: `${process.env.APP_URL}/og?title=Links`,
                alt: "Bakir the Dev OpenGraph Image",
            },
        ],
    },
    twitter: {
        title: "Bakir the Dev | Projects",
        images: {
            url: `${process.env.APP_URL}/og?title=Links`,
            alt: "Bakir the Dev OpenGraph Image",
        },
    },
};

const socialLinks = [
    {
        link: "https://github.com/BakirGracic",
        icon: <GitHub />,
    },
    {
        link: "https://www.linkedin.com/in/bakirgracic/",
        icon: <LinkedIn />,
    },
    {
        link: "https://x.com/gracic_bakir",
        icon: <Twitter />,
    },
    {
        link: "https://discord.com/users/616736736277430448",
        icon: <Discord />,
    },
    {
        link: "https://lu.ma/user/bakirgracic",
        icon: <Luma />,
    },
    {
        link: "https://www.meetup.com/members/412576386/",
        icon: <Meetup />,
    },
    {
        link: "/cv/",
        icon: <CV />,
    },
    {
        link: "https://buymeacoffee.com/bakirgracic",
        icon: <BuyMeACoffee />,
    },
];

export default function Page() {
    return (
        <section className="flex items-center justify-center flex-wrap gap-4">
            {socialLinks.map((item, index) => (
                <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    className="h-[105px] w-[105px] flex items-center justify-center cursor-pointer border border-solid border-neutral-600 rounded-xl duration-[250ms] hover:bg-neutral-800 hover:shadow-inner"
                >
                    {item.icon}
                </Link>
            ))}
        </section>
    );
}
