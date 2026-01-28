import { Home07Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import Non200Pages from "@/features/Non200Pages/Non200Pages";
import { pageMetadata } from "@/lib/metadata";
import { Button } from "@/shadcn/components/ui/button";

export const metadata = pageMetadata(
  "Page Not Found (404)",
  "The page you are looking for does not exist. Return to the homepage and try to find it again.",
  "/",
);

export default function NotFoundPage() {
  return (
    <Non200Pages code="404" title="Page Not Found">
      <Link href="/">
        <Button size="lg">
          <HugeiconsIcon className="size-5" icon={Home07Icon} />
          Back to Home
        </Button>
      </Link>
    </Non200Pages>
  );
}
