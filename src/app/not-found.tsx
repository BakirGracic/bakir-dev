import { Home07Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import { baseMetadata } from "@/lib/baseMetadata";
import { Button } from "@/shadcn/components/ui/button";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Page Not Found",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Page Not Found",
  },
};

export default function NotFoundPage() {
  return (
    <section className="prose mx-auto text-center text-foreground min-h-lvh flex flex-col items-center justify-center p-5">
      <span className="font-black text-7xl mb-6">404</span>
      <h1 className="text-foreground">Page Not Found</h1>
      <Link href="/">
        <Button size={"lg"}>
          <HugeiconsIcon icon={Home07Icon} />
          Back to Home
        </Button>
      </Link>
    </section>
  );
}
