import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Felix Tran - Fullstack Developer',
    template: '%s | Felix Tran - Fullstack Developer',
  },
  description: 'Welcome to Felix Tran\'s Portfolio. Discover my projects, skills, and experiences as a Fullstack Developer.',
  openGraph: {
    title: 'Felix Tran - Fullstack Developer',
    description: 'Explore Felix Tran\'s Portfolio, showcasing a range of web and mobile development projects, design sensibilities, and technical expertise.',
    url: baseUrl,
    siteName: `Felix Tran's Portfolio`,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/opengraph.webp`,
        width: 1200,
        height: 630,
        alt: 'Felix Tran Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:  'Felix Tran - Fullstack Developer',
    description: 'Check out my portfolio for an in-depth look at my work as a Fullstack Developer.',
    images: [`${baseUrl}/opengraph.webp`],
    creator: "@tphuc",
  },
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
  },
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
        'text-black bg-white',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
