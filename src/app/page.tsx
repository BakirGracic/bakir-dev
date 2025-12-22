import type { Metadata } from "next";
import { baseMetadata } from "@/lib/baseMetadata";

export const metadata: Metadata = baseMetadata;

export default function IndexPage() {
  return (
    <>
      <h1>bakir.dev/</h1>
      <p>indexpage</p>
    </>
  );
}
