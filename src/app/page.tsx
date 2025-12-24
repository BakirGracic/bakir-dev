import type { Metadata } from "next";
import Home from "@/features/Home/Home";
import { baseMetadata } from "@/lib/baseMetadata";
import { personSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = baseMetadata;

export default function IndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Home />
    </>
  );
}
