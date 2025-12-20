"use client";

import { Refresh01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/shadcn/components/ui/button";

export default function ErrorPage() {
  return (
    <section className="prose mx-auto text-center text-foreground min-h-lvh flex flex-col items-center justify-center p-5">
      <span className="font-black text-7xl mb-6">505</span>
      <h1 className="text-foreground">Server Error</h1>
      <Button size={"lg"} onClick={() => window.location.reload()}>
        <HugeiconsIcon icon={Refresh01Icon} />
        Refresh
      </Button>
    </section>
  );
}
