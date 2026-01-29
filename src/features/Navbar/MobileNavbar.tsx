"use client";

import { Menu09Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "#/static/images/logo.png";
import { navbarLinks } from "@/features/Navbar/lib";
import { Button } from "@/shadcn/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemTitle,
} from "@/shadcn/components/ui/item";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shadcn/components/ui/sheet";

export function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center justify-between">
      <Link href="/">
        <Image src={Logo} alt="bakir.dev navbar logo" width={25} height={25} />
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button variant="ghost" size="icon-lg" className="h-9 w-9">
              <HugeiconsIcon icon={Menu09Icon} size={24} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          }
        />
        <SheetContent side="right" className="w-full sm:w-full">
          <SheetHeader>
            <SheetTitle className="text-lg font-medium">Menu</SheetTitle>
          </SheetHeader>
          <ItemGroup className="px-2.5 gap-2">
            {navbarLinks.map((link) => (
              <Item
                key={`mobile-nav-link_${link.title}`}
                className="motion-preset-slide-left"
                variant="outline"
                render={
                  <Link href={link.href} onClick={() => setOpen(false)} />
                }
              >
                <ItemContent>
                  <ItemTitle>{link.title}</ItemTitle>
                </ItemContent>
                <ItemActions>
                  <HugeiconsIcon icon={link.icon} />
                </ItemActions>
              </Item>
            ))}
          </ItemGroup>
        </SheetContent>
      </Sheet>
    </div>
  );
}
