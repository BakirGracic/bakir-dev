import type { Person, WebSite, WithContext } from "schema-dts";
import { CTA } from "@/features/IndexPage/CTA";
import { FAQ } from "@/features/IndexPage/FAQ";
import { Hero } from "@/features/IndexPage/Hero";

// metadata applied from layout.tsx

export default function IndexPage() {
  const personSchema: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bakir Gracić",
    jobTitle: "Web Solutions Architect",
    url: "https://bakir.dev",
    image: "https://bakir.dev/static/images/headshot.jpeg",
    sameAs: [
      process.env.NEXT_PUBLIC_CV_URL,
      process.env.NEXT_PUBLIC_GITHUB_URL,
      process.env.NEXT_PUBLIC_LINKEDIN_URL,
      process.env.NEXT_PUBLIC_WHATSAPP_URL,
      process.env.NEXT_PUBLIC_COMPANY_URL,
      process.env.NEXT_PUBLIC_BUYMEACOFFEE_URL,
    ],
  };
  const websiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "bakir.dev",
    url: "https://bakir.dev",
    author: {
      "@type": "Person",
      name: "Bakir Gracić",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="flex flex-col gap-25 md:gap-30 mt-20">
        <Hero />
        <FAQ />
        <CTA />
      </section>
    </>
  );
}
