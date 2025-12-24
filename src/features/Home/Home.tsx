import { CTA } from "@/features/Home/CTA";
import { FAQ } from "@/features/Home/FAQ";
import { Hero } from "@/features/Home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-22 md:gap-28">
      <Hero />
      <FAQ />
      <CTA />
    </div>
  );
}
