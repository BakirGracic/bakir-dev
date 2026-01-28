import type { Metadata } from "next";
import { Links } from "@/features/Links/Links";
import { baseMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Links | bakir.dev",
  description: "Links to connect with me online",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Links | bakir.dev",
    description: "Links to connect with me online",
  },
};

export default function LinksPage() {
  return <Links />;
}
