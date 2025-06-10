import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Angel Gabriel Aeronautics',
  description: 'Get in touch with our team for charter quotes, flight operations, and general inquiries through Angel Gabriel Aeronautics.',
  keywords: [
    'contact Angel Gabriel',
    'charter quotes',
    'contact',
    'private charter flights',
    'aviation services',
    'Angel Gabriel Aeronautics'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    url: new URL('/contact', process.env.SITE_URL || 'https://flyangelgabriel.com'),
    images: ['/contact/opengraph-image.png']
  },
  twitter:   { images: ['/contact/twitter-image.png'] },
}; 