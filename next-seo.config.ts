import { DefaultSeoProps } from 'next-seo';

const defaultSEOConfig: DefaultSeoProps = {
  title: 'Angel Gabriel Aeronautics | Private Charter Flights in Southern Africa',
  description: 'Angel Gabriel Aeronautics offers premium private charter flights, safari packages, and specialized aviation services across Southern Africa and Botswana since 2013.',
  canonical: process.env.SITE_URL || 'https://flyangelgabriel.com',
  additionalMetaTags: [
    { name: 'keywords', content: 'private charter flights, air charter service, Southern Africa flights, Botswana air charter, lodge transfer flights, safari packages' },
  ],
  openGraph: {
    url: process.env.SITE_URL || 'https://flyangelgabriel.com',
    title: 'Angel Gabriel Aeronautics | Luxury Charter Flights in Southern Africa',
    description: 'Experience unparalleled private air charter services with Southern Africa\'s remote destination specialist.',
    images: [
      {
        url: `${process.env.SITE_URL || 'https://flyangelgabriel.com'}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Angel Gabriel Aeronautics',
      },
    ],
    site_name: 'Angel Gabriel Aeronautics',
  },
  twitter: {
    handle: '@AngelGabrielAeronautics',
    site: '@AngelGabrielAeronautics',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig; 