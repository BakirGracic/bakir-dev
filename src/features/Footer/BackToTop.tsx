"use client";

import { ArrowUp02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/shadcn/components/ui/button";

export function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="cursor-pointer"
    >
      <HugeiconsIcon icon={ArrowUp02Icon} />
    </Button>
  );
}
