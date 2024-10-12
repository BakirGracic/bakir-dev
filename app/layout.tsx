import "styles/global.css";
import type { Metadata } from "next";
import type { Viewport } from "next";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { baseUrl } from "app/sitemap";
import { GoogleAnalytics } from "@next/third-parties/google";

export const viewport: Viewport = {
    themeColor: "#000000",
};

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: "Bakir the Dev",
    authors: [{ name: "Bakir the Dev", url: baseUrl }],
    description:
        "Discover Bakir's personal website & blog for insightful tips, helpful advice, fun & educational content on software development. Explore his top projects, achievements, certifications, and find links to connect",
    manifest: "https://bakir.dev/manifest.webmanifest",
    creator: "Bakir the Dev",
    publisher: "Bakir the Dev",
    category: "technology",
    openGraph: {
        title: "Bakir the Dev",
        description:
            "Discover Bakir's personal website & blog for insightful tips, helpful advice, fun & educational content on software development. Explore his top projects, achievements, certifications, and find links to connect",
        url: baseUrl,
        siteName: "Bakir the Dev",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: `${baseUrl}/og`,
            },
        ],
    },
    alternates: {
        canonical: baseUrl,
    },
    icons: {
        icon: [
            {
                url: `${baseUrl}/favicon.ico`,
                type: "image/icon",
                sizes: "48x48",
            },
            {
                url: `${baseUrl}/favicon-32x32.png`,
                type: "image/png",
                sizes: "32x32",
            },
            {
                url: `${baseUrl}/favicon-16x16.png`,
                type: "image/png",
                sizes: "16x16",
            },
        ],
        other: [
            {
                rel: "apple-touch-icon",
                url: `${baseUrl}/apple-touch-icon.png`,
                sizes: "180x180",
            },
            {
                rel: "apple-touch-icon-precomposed",
                url: `${baseUrl}/apple-touch-icon-precomposed.png`,
                sizes: "180x180",
            },
            {
                rel: "mask-icon",
                url: `${baseUrl}/safari-pinned-tab.svg`,
                color: "#1eb854",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html
            lang="en-US"
            className="text-black bg-white dark:text-white dark:bg-black"
        >
            <body className="antialiased select-none max-w-xl mx-4 md:mx-auto md:w-xl">
                <main className="flex flex-col flex-auto min-w-0">
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
            {process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
        </html>
    );
}
