import type { Metadata } from "next";
import { baseMetadata } from "@/lib/baseMetadata";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Blogs | bakir.dev",
  description: "My takes on various hot topics",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Blogs | bakir.dev",
    description: "My takes on various hot topics",
  },
};

export default function BlogPage() {
  return (
    <>
      <h1>bakir.dev/blog</h1>
      <p>blogpage</p>
    </>
  );
}
