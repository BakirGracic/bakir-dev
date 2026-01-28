import Link from "next/link";
import PageHeading from "@/features/PageHeading/PageHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn/components/ui/accordion";

export function FAQ() {
  return (
    <section>
      <PageHeading title="FAQ" />

      <div className="max-w-prose mx-auto">
        <Accordion className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger className="hover:no-underline cursor-pointer text-base">
              What do you do?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              I specialize in creating digital products for individuals and
              businesses. I enjoy the most working on digital transformations
              and AI integrations
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2">
            <AccordionTrigger className="hover:no-underline cursor-pointer text-base">
              Are you available to work?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              I'm always open to discussing new projects and opportunities. Feel
              free to reach out!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3">
            <AccordionTrigger className="hover:no-underline cursor-pointer text-base">
              How to get in touch?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              You can contact me via your preferred platform on the{" "}
              <Link href="/links" className="underline">
                links
              </Link>{" "}
              page
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
