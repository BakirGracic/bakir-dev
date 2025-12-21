import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: "bakir.dev",
  description: "Personal website and blog of Bakir Gracić",
  generator: "NextJS",
  applicationName: "bakir.dev",
  authors: [{ name: "Bakir Gracić", url: process.env.NEXT_PUBLIC_APP_URL }],
  creator: "Bakir Gracić",
  publisher: "Bakir Gracić",
  openGraph: {
    title: "bakir.dev",
    description: "Personal website and blog of Bakir Gracić",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "bakir.dev",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/og.jpg`,
        alt: "bakir.dev OpenGraph Image",
        width: 1200,
        height: 630,
      },
    ],
    locale: "bs-Latn-BA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    title: "bakir.dev",
  },
};
