import type { Metadata } from "next";
import { baseMetadata } from "@/lib/baseMetadata";

export const metadata: Metadata = baseMetadata;

export default function IndexPage() {
  return (
    <main>
      <h1>bakir-dev</h1>
    </main>
  );
}
