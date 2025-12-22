import Link from "next/link";
import { BackToTop } from "@/features/Footer/BackToTop";
import { CopyrightYear } from "@/features/Footer/CopyrightYear";

export default function Footer() {
  return (
    <footer className="py-4 flex items-center justify-between text-sm text-muted-foreground">
      <div className="flex items-center gap-3 md:gap-5">
        <p>
          © <CopyrightYear /> bakir.dev
        </p>

        <Link
          href="https://github.com/BakirGracic/bakir-dev/blob/main/LICENSES/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-all"
        >
          Licenses
        </Link>

        <Link
          href="https://sanjacklee.digital"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-all"
        >
          Company
        </Link>
      </div>

      <BackToTop />
    </footer>
  );
}
