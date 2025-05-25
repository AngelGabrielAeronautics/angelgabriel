import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Angel Gabriel Aeronautics',
  description: 'Learn about Angel Gabriel Aeronautics, our history, mission, and team providing private charter flights in Southern Africa since 2013.',
  keywords: [
    'about Angel Gabriel Aeronautics',
    'private charter history',
    'Southern Africa air charter provider',
    'Angel Gabriel mission'
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    url: new URL('/about', process.env.SITE_URL || 'https://flyangelgabriel.com'),
  },
}; 