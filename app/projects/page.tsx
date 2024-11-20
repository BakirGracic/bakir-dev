import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";
import HowMuchIWastedImg from "@/public/projects/howmuchiwasted.png";
import DaisyUIThemePreviewImg from "@/public/projects/daisyuithemepreview.png";

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
        <section className="flex flex-col gap-5">
            {/* daisyui theme preview */}
            <ProjectCard
                imgSrc={DaisyUIThemePreviewImg}
                title="How Much I Wasted?"
                description="Check how much of your life you have wasted"
                webLink="https://daisyui-theme-preview.bakir.dev/"
                gitLink="https://github.com/BakirGracic/daisyui-theme-preview"
                blogLink="https://bakir.dev/blog/tailwind-and-component-libraries-write-frontends-fast"
            />

            {/* how much i wasted */}
            <ProjectCard
                imgSrc={HowMuchIWastedImg}
                title="DaisyUI Theme Preview"
                description="Preview DaisyUI preset and custom themes"
                webLink="https://howmuchiwasted.bakir.dev/"
                gitLink="https://github.com/BakirGracic/how-much-i-wasted"
                blogLink="https://bakir.dev/blog/how-time-flies-reality-lifes-countdown"
            />

            {/* cs2 dedicated server in 2024 */}
            <ProjectCard
                imgSrc="https://opengraph.githubassets.com/1/BakirGracic/cs2-dedicated-server-in-2024"
                title="CS2 Dedicated Server in 2024"
                description="Guide on how to host a CS2 server in 2024"
                gitLink="https://github.com/BakirGracic/cs2-dedicated-server-in-2024"
                blogLink="https://bakir.dev/blog/cs2-dedicated-server-in-2024"
            />

            {/* bih registration plates */}
            <ProjectCard
                imgSrc="https://opengraph.githubassets.com/1/BakirGracic/bih-registration-plates/"
                title="BiH Registration Plates"
                description="Comprensive list of BiH registration plates with a C++ project"
                gitLink="https://github.com/BakirGracic/bih-registration-plates/"
                blogLink="https://bakir.dev/blog/exploring-bosnian-car-registration-plates-structure-variations-unique-cpp-project"
            />

            {/* windows font installer */}
            <ProjectCard
                imgSrc="https://opengraph.githubassets.com/1/BakirGracic/windows-font-installer/"
                title="Windows Font Installer"
                description="PowerShell script to install bulk fonts on Windows"
                gitLink="https://github.com/BakirGracic/windows-font-installer/"
            />

            {/* curl get request spammer */}
            <ProjectCard
                imgSrc="https://opengraph.githubassets.com/1/BakirGracic/curl-get-request-spammer/"
                title="Web Request Spammer"
                description="Spam GET requests to a web URL using CURL"
                gitLink="https://github.com/BakirGracic/curl-get-request-spammer/"
            />
        </section>
    );
}
