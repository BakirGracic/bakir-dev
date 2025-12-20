import type { Metadata } from "next";
import { baseMetadata } from "@/lib/baseMetadata";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "xxxxxx",
  description: "xxxxxx",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "xxxxxx",
    description: "xxxxxx",
  },
};

export default function IndexPage() {
  return (
    <main>
      <h1>bakir-dev</h1>
    </main>
  );
}
