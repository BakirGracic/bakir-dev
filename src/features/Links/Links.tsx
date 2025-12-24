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
import PageHeading from "@/shadcn/components/page-heading";
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
    href: process.env.NEXT_PUBLIC_CV_URL!,
    icon: DocumentValidationIcon,
  },
  {
    title: "GitHub",
    description: "github.com/BakirGracic",
    href: process.env.NEXT_PUBLIC_GITHUB_URL!,
    icon: GithubIcon,
  },
  {
    title: "LinkedIn",
    description: "linkedin.com/in/bakirgracic",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL!,
    icon: Linkedin02Icon,
  },
  {
    title: "WhatsApp Business",
    description: "wa.me/message/...",
    href: process.env.NEXT_PUBLIC_WHATSAPP_URL!,
    icon: WhatsappBusinessIcon,
  },
  {
    title: "Company Website",
    description: "sanjacklee.digital",
    href: process.env.NEXT_PUBLIC_COMPANY_URL!,
    icon: OfficeIcon,
  },
  {
    title: "Buy Me a Coffee",
    description: "buymeacoffee.com/bakirgdev",
    href: process.env.NEXT_PUBLIC_BUYMEACOFFEE_URL!,
    icon: Coffee01Icon,
  },
];

export function Links() {
  return (
    <div className="max-w-md mx-auto flex flex-col justify-center">
      <PageHeading title="Links" subtitle="Connect with me across the web" />

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
