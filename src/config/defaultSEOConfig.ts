import { DefaultSeoProps } from 'next-seo';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://angelgabriel.co.za';

const defaultSEOConfig: DefaultSeoProps = {
  // 1. Titles
  title: 'Angel Gabriel Aeronautics',
  defaultTitle: 'Angel Gabriel Aeronautics | Private Charter Flights',
  titleTemplate: '%s | Angel Gabriel Aeronautics',

  // 2. Canonical & Robots
  canonical: SITE_URL,
  additionalMetaTags: [
    { name: 'description', content: 'Premium private charter flights, safari transfers & aviation services across Southern Africa since 2013.' },
    { name: 'keywords', content: 'private charter flights, air charter, Southern Africa, safari transfers, luxury air travel' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'fb:app_id', content: process.env.FB_APP_ID || '' },
    { name: 'twitter:creator', content: '@AngelGabrielAA' },
  ],

  // 3. Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: SITE_URL,
    title: 'Angel Gabriel Aeronautics | Luxury Private Charter Flights',
    description: 'Experience unparalleled private air travel & safari packages with Southern Africa\'s remote destination specialist.',
    site_name: 'Angel Gabriel Aeronautics',
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Angel Gabriel Aeronautics – Private Charter Flights',
      },
      {
        url: `${SITE_URL}/images/og-image-square.jpg`,
        width: 1500,
        height: 1500,
        alt: 'Angel Gabriel Aeronautics Logo',
      },
    ],
  },

  // 4. Twitter Card
  twitter: {
    handle: '@AngelGabrielAA',
    site: '@AngelGabrielAA',
    cardType: 'summary_large_image',
  },

  // 5. Link Tags (favicons, manifests)
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
};

export default defaultSEOConfig; 