import fs from 'fs';
import path from 'path';
import AboutContent from './AboutContent';
import Head from 'next/head';

export default function AboutPage() {
  const pageUrl = process.env.SITE_URL + '/about';
  // 1) Point to your public/images/clients folder
  const logosDirectory = path.join(process.cwd(), 'public', 'images', 'clients');

  // 2) Read & filter only images
  const clientLogos = fs
    .readdirSync(logosDirectory)
    .filter((f) => /\.(png|jpe?g|svg)$/i.test(f));

  // 3) Delegate all UI/animation to the client‐only component
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": process.env.SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "About", "item": pageUrl }
          ]
        })}} />
      </Head>
      <AboutContent clientLogos={clientLogos} />
    </>
  );
} 