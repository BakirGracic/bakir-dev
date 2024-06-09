import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Viewport } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: 'Bakir the Dev',
    description: 'Discover Bakir\'s personal blog for insightful tips, helpful advice, and links to connect. Your go-to source for personal growth and knowledge',
    openGraph: {
        title: 'Bakir the Dev',
        description: 'Discover Bakir\'s personal blog for insightful tips, helpful advice, and links to connect. Your go-to source for personal growth and knowledge',
        url: baseUrl,
        siteName: 'Bakir the Dev',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: `${baseUrl}/og`,
            },
        ],
    },
    alternates: {
        canonical: baseUrl,
    },
    manifest: 'https://bakir.dev/manifest.webmanifest',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
}

export const viewport: Viewport = {
    themeColor: 'black',
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            className={cx(
                'text-black bg-white dark:text-white dark:bg-black',
                GeistSans.variable,
                GeistMono.variable
            )}
        >
            <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto select-none">
                <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
            {process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
        </html>
    )
}
