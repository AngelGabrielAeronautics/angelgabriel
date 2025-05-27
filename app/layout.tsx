import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Script from 'next/script'
import { Toaster } from 'react-hot-toast'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Angel Gabriel Aeronautics - Private Charter Flights',
    template: '%s | Angel Gabriel Aeronautics'
  },
  description: 'Angel Gabriel Aeronautics offers premium private charter flights, safari packages, and specialized aviation services across Southern Africa and Botswana since 2013.',
  keywords: 'private charter flights, air charter service, Southern Africa flights, Botswana air charter, lodge transfer flights, safari packages',
  authors: [{ name: 'Angel Gabriel Aeronautics' }],
  creator: 'Angel Gabriel Aeronautics',
  publisher: 'Angel Gabriel Aeronautics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icon.png',
  },
  metadataBase: new URL(process.env.SITE_URL || 'https://flyangelgabriel.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: process.env.SITE_URL || 'https://flyangelgabriel.com',
    siteName: 'Angel Gabriel Aeronautics',
    title: 'Angel Gabriel Aeronautics | Luxury Charter Flights in Southern Africa',
    description: 'Experience unparalleled private air charter services with Southern Africa\'s remote destination specialist.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Angel Gabriel Aeronautics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angel Gabriel Aeronautics | Private Charter Flights',
    description: 'Premium private charter flights across Southern Africa and Botswana.',
    images: ['/images/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} scroll-smooth`}>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'}`} 
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'}', {
                page_path: window.location.pathname,
                send_page_view: true,
              });
            `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Angel Gabriel Aeronautics",
          "url": "https://flyangelgabriel.com",
          "logo": "https://flyangelgabriel.com/icon.png",
          "sameAs": [
            "https://www.facebook.com/AngelGabrielAeronautics",
            "https://www.instagram.com/AngelGabrielAeronautics",
            "https://www.youtube.com/@AngelGabrielAeronautics",
            "https://www.linkedin.com/company/angel-gabriel-aeronautics",
            "https://www.pinterest.com/AngelGabrielAeronautics"
          ]
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Angel Gabriel Aeronautics",
          "url": process.env.SITE_URL || "https://flyangelgabriel.com"
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          "name": "Main navigation",
          "url": process.env.SITE_URL || "https://flyangelgabriel.com",
          "hasPart": [
            { "@type": "SiteNavigationElement", "name": "Home", "url": process.env.SITE_URL || "https://flyangelgabriel.com" },
            { "@type": "SiteNavigationElement", "name": "Contact", "url": (process.env.SITE_URL || "https://flyangelgabriel.com") + "/contact" },
            { "@type": "SiteNavigationElement", "name": "Rates & Quotes", "url": (process.env.SITE_URL || "https://flyangelgabriel.com") + "/rates-and-quotes" },
            { "@type": "SiteNavigationElement", "name": "Services", "url": (process.env.SITE_URL || "https://flyangelgabriel.com") + "/services" },
            { "@type": "SiteNavigationElement", "name": "Fleet", "url": (process.env.SITE_URL || "https://flyangelgabriel.com") + "/fleet" },
            { "@type": "SiteNavigationElement", "name": "Gallery", "url": (process.env.SITE_URL || "https://flyangelgabriel.com") + "/gallery" },
            { "@type": "SiteNavigationElement", "name": "About", "url": (process.env.SITE_URL || "https://flyangelgabriel.com") + "/about" },
            { "@type": "SiteNavigationElement", "name": "Links & Endorsements", "url": (process.env.SITE_URL || "https://flyangelgabriel.com") + "/links" },
            { "@type": "SiteNavigationElement", "name": "Blog", "url": (process.env.SITE_URL || "https://flyangelgabriel.com") + "/blog" }
          ]
        })}} />
      </head>
      <body suppressHydrationWarning className="flex min-h-screen flex-col bg-ag-cream text-ag-text font-sans antialiased">
        {/* Toast notifications */}
        <Toaster position="top-right" />
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  )
} 