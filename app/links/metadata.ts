import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Links & Endorsements | Angel Gabriel Aeronautics',
  description: 'A curated collection of partners, lodges, and services endorsed by Angel Gabriel Aeronautics.',
  keywords: ['Angel Gabriel Aeronautics links', 'endorsements', 'agents', 'lodges', 'transport'],
  alternates: {
    canonical: '/links',
  },
  openGraph: {
    title: 'Links & Endorsements | Angel Gabriel Aeronautics',
    description: 'Browse our curated list of trusted partners including agents, lodges, accommodations, and transport services across Southern Africa.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'Angel Gabriel Aeronautics',
    images: ['/links/opengraph-image.png']
  },
  twitter: { images: ['/links/twitter-image.png'] }
}; 