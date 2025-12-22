import type { Metadata } from "next";
import { baseMetadata } from "@/lib/baseMetadata";

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
  return (
    <>
      <h1>bakir.dev/links</h1>
      <p>linkspage</p>
    </>
  );
}
