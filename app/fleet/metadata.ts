import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Fleet',
  description: 'Explore the Angel Gabriel Aeronautics fleet with a variety of aircraft available for private charter flights across Southern Africa and Botswana.',
  keywords: ['fleet', 'aircraft', 'private charter flights', 'Southern Africa', 'Angel Gabriel Aeronautics'],
  alternates: { canonical: '/fleet' },
  openGraph: {
    url: new URL('/fleet', process.env.SITE_URL || 'https://flyangelgabriel.com'),
  },
}; 