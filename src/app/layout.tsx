import "@/css/global.css";
import type { Metadata, Viewport } from "next";
import Footer from "@/features/Footer/Footer";
import Navbar from "@/features/Navbar/Navbar";
import { baseMetadata } from "@/lib/baseMetadata";
import { baseViewport } from "@/lib/baseViewport";
import { publicSans } from "@/lib/fonts";
import { ThemeProvider } from "@/shadcn/components/theme-provider";

export const metadata: Metadata = baseMetadata;
export const viewport: Viewport = baseViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bs-Latn-BA"
      className={publicSans.className}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto px-4">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
