import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Angel Gabriel Aeronautics',
  description: 'Explore our blog for insights into aviation, travel tips, luxury safaris, and the unique experience of air charter services in Southern Africa.',
  alternates: {
    canonical: '/blog',
  },
  keywords: [
    'aviation blog',
    'safari travel',
    'air charter blog',
    'luxury travel tips',
    'Southern Africa flights',
    'private flight experiences',
    'Botswana safari',
    'South Africa travel',
    'lodge transfers',
    'wildlife destinations'
  ],
  openGraph: {
    title: 'Aviation Insights & Travel Stories | Angel Gabriel Aeronautics Blog',
    description: 'Dive into our collection of stories, travel tips, and insights about luxury air charter experiences across Southern Africa.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'Angel Gabriel Aeronautics',
    images: ['/blog/opengraph-image.png'],
  },
  twitter: { images: ['/blog/twitter-image.png'] },
}; 