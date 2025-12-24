"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "#/static/images/logo.png";
import { navbarLinks } from "@/features/Navbar/navbarLinks";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/shadcn/components/ui/navigation-menu";

export function DesktopNavbar() {
  return (
    <div className="hidden md:flex items-center gap-6">
      <Link href="/">
        <Image src={Logo} alt="bakir.dev navbar logo" width={25} height={25} />
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          {navbarLinks.map((link) => (
            <NavigationMenuItem key={link.title}>
              <NavigationMenuLink href={link.href}>
                {link.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
