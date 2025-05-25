import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Angel Gabriel Aeronautics for premium private charter flights and aviation services across Southern Africa and Botswana.',
  keywords: ['contact', 'private charter flights', 'aviation services', 'Angel Gabriel Aeronautics'],
  alternates: { canonical: '/contact' },
  openGraph: {
    url: new URL('/contact', process.env.SITE_URL || 'https://flyangelgabriel.com'),
  },
}; 