import type { Metadata } from "next";
import type { ProfilePage, WithContext } from "schema-dts";
import { Links } from "@/features/Links/Links";
import { baseMetadata } from "@/lib/baseMetadata";
import { personSchema } from "@/lib/schema";

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
  const jsonLd: WithContext<ProfilePage> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: personSchema,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Links />
    </>
  );
}
