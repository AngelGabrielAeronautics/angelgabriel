import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View our gallery of aviation images showcasing our aircraft, destinations, and operations across Southern Africa and Botswana.',
  keywords: ['gallery', 'aviation images', 'aircraft', 'Southern Africa', 'Angel Gabriel Aeronautics'],
  alternates: { canonical: '/gallery' },
  openGraph: {
    url: new URL('/gallery', process.env.SITE_URL || 'https://flyangelgabriel.com'),
  },
}; 