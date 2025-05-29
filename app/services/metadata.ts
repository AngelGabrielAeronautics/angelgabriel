import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Angel Gabriel Aeronautics',
  description: 'Explore Angel Gabriel Aeronautics services including private charters, fixed rate charters, safari packages, flying safaris, VIP assistance, and more.',
  keywords: [
    'private charters',
    'fixed rate charters',
    'safari packages',
    'flying safaris',
    'VIP assistance',
    'aircraft management',
    'cargo movements',
    'Angel Gabriel Aeronautics'
  ],
  alternates: { canonical: '/services' },
  openGraph: {
    url: new URL('/services', process.env.SITE_URL || 'https://flyangelgabriel.com'),
    images: ['/services/opengraph-image.png']
  },
  twitter:   { images: ['/services/twitter-image.png'] },
}; 