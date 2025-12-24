import "@/css/global.css";
import { GoogleAnalytics } from "@next/third-parties/google";
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
          disableTransitionOnChange
        >
          <div className="container mx-auto px-4">
            <Navbar />
            <main className="py-12 md:py-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
      </body>
    </html>
  );
}
