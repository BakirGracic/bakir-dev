import type { Metadata } from "next";

const defaultMetadataImage = `${process.env.NEXT_PUBLIC_APP_URL}/og.jpg`;

export function pageMetadata(
  title: string,
  description: string,
  url: string,
  imageUrl?: string,
  indexable?: boolean,
): Metadata {
  return {
    ...baseMetadata,
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description,
      url,
      images: [
        {
          url: imageUrl || defaultMetadataImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description,
      images: [imageUrl || defaultMetadataImage],
    },
    robots: {
      index: indexable !== false,
      follow: indexable !== false,
    },
  };
}

export async function dynamicPageMetadata(
  title: string,
  description: string,
  url: string,
  imageUrl?: string,
  indexable?: boolean,
): Promise<Metadata> {
  return {
    ...baseMetadata,
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description,
      url,
      images: [
        {
          url: imageUrl || defaultMetadataImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description,
      images: [imageUrl || defaultMetadataImage],
    },
    robots: {
      index: indexable !== false,
      follow: indexable !== false,
    },
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
  title: "bakir.dev",
  description:
    "Personal website and blog of Bakir Gracić featuring their work, blogs and credentials",
  applicationName: "bakir.dev",
  authors: [{ name: "Bakir Gracić", url: process.env.NEXT_PUBLIC_APP_URL }],
  creator: "Bakir Gracić",
  publisher: "Bakir Gracić",
  keywords: [
    "Bakir Gracić",
    "bakir",
    "gracic",
    "bakir.dev",
    "blog",
    "personal website",
    "developer blog",
    "software development",
    "programming",
    "technology",
  ],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL,
  },
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "bakir.dev",
    description:
      "Personal website and blog of Bakir Gracić featuring their work, blogs and credentials",
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
  twitter: {
    card: "summary_large_image",
    title: "bakir.dev",
    description:
      "Personal website and blog of Bakir Gracić featuring their work, blogs and credentials",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpg`],
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
