import { redirect } from 'next/navigation';
import { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    images: ['/get-a-quote/opengraph-image.png'],
  },
  twitter: {
    images: ['/get-a-quote/twitter-image.png'],
  },
}

export default function GetAQuotePage() {
  redirect('/quotes');
} 