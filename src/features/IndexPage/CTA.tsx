import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "@/shadcn/components/ui/button";

export function CTA() {
  return (
    <section className="text-center bg-primary text-primary-foreground rounded-3xl p-8 md:p-16 shadow-2xl intersect:motion-preset-blur-up-lg intersect-once">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
        Ready to Connect?
      </h1>

      <p className="text-lg leading-tight md:text-xl text-primary-foreground/80 mb-8 mx-auto max-w-prose text-pretty">
        Check out my links or get in touch to discuss your next project.
      </p>

      <Link href="/links">
        <Button
          variant="secondary"
          size="lg"
          className="px-5 py-6 rounded-xl cursor-pointer text-lg font-semibold"
        >
          Links & Contact
          <HugeiconsIcon icon={ArrowRight01Icon} />
        </Button>
      </Link>
    </section>
  );
}
