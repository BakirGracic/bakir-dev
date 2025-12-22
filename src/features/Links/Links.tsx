import {
  Coffee01Icon,
  DocumentValidationIcon,
  GithubIcon,
  Linkedin02Icon,
  MailEdit01Icon,
  OfficeIcon,
  WhatsappBusinessIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { ObfuscatedEmail } from "@/features/Links/ObfuscatedEmail";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/shadcn/components/ui/item";

const links = [
  {
    title: "Curriculum Vitae",
    description: "bakir.dev/cv",
    href: "/cv",
    icon: DocumentValidationIcon,
  },
  {
    title: "GitHub",
    description: "github.com/BakirGracic",
    href: "https://github.com/BakirGracic",
    icon: GithubIcon,
  },
  {
    title: "LinkedIn",
    description: "linkedin.com/in/bakirgracic",
    href: "https://www.linkedin.com/in/bakirgracic/",
    icon: Linkedin02Icon,
  },
  {
    title: "WhatsApp Business",
    description: "wa.me/message/...",
    href: "https://wa.me/message/IOCLF6LNKAUWD1",
    icon: WhatsappBusinessIcon,
  },
  {
    title: "Company Website",
    description: "sanjacklee.digital",
    href: "https://sanjacklee.digital",
    icon: OfficeIcon,
  },
  {
    title: "Buy Me a Coffee",
    description: "buymeacoffee.com/bakirgdev",
    href: "https://buymeacoffee.com/bakirgdev",
    icon: Coffee01Icon,
  },
];

export function Links() {
  return (
    <div className="max-w-md mx-auto min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Links</h1>
        <p className="text-muted-foreground mt-2">
          Connect with me across the web
        </p>
      </div>

      <ItemGroup className="gap-3.5">
        <Item render={<ObfuscatedEmail />}>
          <ItemMedia>
            <HugeiconsIcon icon={MailEdit01Icon} />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Email</ItemTitle>
            <ItemDescription>Send me an email</ItemDescription>
          </ItemContent>
        </Item>

        {links.map((link) => (
          <Item
            key={link.title}
            render={
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              />
            }
          >
            <ItemMedia>
              <HugeiconsIcon icon={link.icon} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{link.title}</ItemTitle>
              <ItemDescription>{link.description}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}
