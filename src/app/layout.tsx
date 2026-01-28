import "@/css/global.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/features/Footer/Footer";
import Navbar from "@/features/Navbar/Navbar";
import { publicSans } from "@/lib/fonts";
import { baseMetadata } from "@/lib/metadata";
import { baseViewport } from "@/lib/viewport";

export const metadata = baseMetadata;
export const viewport = baseViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bs-Latn-BA"
      className={`${publicSans.className} font-public-sans dark`}
      suppressHydrationWarning
    >
      <body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />

        <div className="container mx-auto p-4 min-h-dvh flex flex-col">
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
