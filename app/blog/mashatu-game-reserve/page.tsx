'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';
import PageHeader from '../../components/PageHeader';
import CallToAction from '../../components/CallToAction';
import AnimatedServiceCollage from '../../components/AnimatedServiceCollage';
import RelatedArticles from '../../components/RelatedArticles';

export default function MashatuGameReserveBlogPost() {
  const pageUrl = process.env.SITE_URL + '/blog/mashatu-game-reserve';
  const publishedDate = 'June 25, 2025';
  const authorName = 'Angel Gabriel Aeronautics';
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const relatedPosts = [
    { slug: 'lubbesrust-farm', title: 'Lubbesrust Farm: Exclusive Wilderness Lodge in Botswana', excerpt: 'Lubbesrust Farm offers over 20,712 hectares of fenced wilderness and a private airstrip for an unforgettable safari experience.', imageText: 'Aerial view of Lubbesrust Farm reserve', imageSrc: '/images/blogs/lubbesrust-farm/overview.jpg' },
    { slug: 'exploring-the-wild', title: 'Exploring the Wild: Why Chartering an Aircraft with Angel Gabriel is Safer and Faster than Driving', excerpt: 'Discover why flying with Angel Gabriel Aeronautics is the safest way to explore remote destinations in Southern Africa.', imageText: 'People boarding a charter aircraft', imageSrc: '/images/blogs/OFD.png' }
  ];

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
          "headline": "Mashatu Game Reserve: Land of the Giants in Botswana",
          "description": "Explore Mashatu Game Reserve, Botswana's 42,000-hectare wilderness in the Northern Tuli Game Reserve, with luxury lodges and private air travel.",
          "image": process.env.SITE_URL + '/images/blogs/mashatu-game-reserve/overview.jpg',
          "author": { "@type": "Organization", "name": authorName },
          "publisher": { "@type": "Organization", "name": "Angel Gabriel Aeronautics", "logo": { "@type": "ImageObject", "url": process.env.SITE_URL + '/icon.png' } },
          "datePublished": "2025-06-25",
          "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": process.env.SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": process.env.SITE_URL + '/blog' },
            { "@type": "ListItem", "position": 3, "name": "Mashatu Game Reserve", "item": pageUrl }
          ] }
        })}} />
      </Head>
      <motion.div initial="hidden" animate="visible" variants={fadeIn} role="main" className="min-h-screen bg-ag-cream font-sans">
        <PageHeader title="Mashatu Game Reserve: Land of the Giants in Botswana" subtitle={publishedDate} />

        <div className="container mx-auto px-4 mt-6 text-right">
          <Link href="/blog" className="text-text-black hover:text-secondary-dark font-medium font-sans inline-block mb-8">
            ← Back to Blog
          </Link>
        </div>

        <article className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 rounded-lg overflow-hidden">
              <div className="relative h-96 w-full">
                <Image src="/images/blogs/mashatu-game-reserve/overview.jpg" alt="Panoramic view of Mashatu Game Reserve" fill className="object-cover" />
              </div>
            </div>

            <motion.div className="prose prose-lg max-w-none" initial="hidden" animate="visible" variants={fadeIn}>
              <p>
                Mashatu Game Reserve occupies 42,000 hectares of privately owned land at the confluence of the Limpopo and Shashe rivers. This remote wilderness in Botswana's Northern Tuli Game Reserve is home to towering sandstone ridges, riverine forests, and the largest herds of elephants on private land in Africa.
              </p>

              <h2 className="text-3xl font-light font-heading text-text-black mt-8 mb-8">Luxury Lodges</h2>
              <p>
                Guests can choose from six distinct accommodations, including 5-star villas at Euphorbia Mashatu, family suites at Mashatu Lodge, and exclusive-use safari homes like Kolokolo and Shalimpo. Each lodge features air-conditioning, elegant furnishings, and private decks overlooking waterholes.
              </p>

              <h2 className="text-3xl font-light font-heading text-text-black mt-8 mb-8">Getting There</h2>
              <p>
                Angel Gabriel Aeronautics offers direct charters to Limpopo Valley Airfield inside the reserve, ensuring quick access without border delays. Alternatively, a scenic road transfer from Johannesburg or Polokwane takes guests across the Limpopo River via cable car or vehicle.
              </p>

              <h2 className="text-3xl font-light font-heading text-text-black mt-8 mb-8">Safari Experiences</h2>
              <p>
                From on-foot rhino tracking and sleep-out camps near natural springs to early-morning game drives and photographic hides, Mashatu's expert guides craft personalized wildlife encounters. The reserve's diverse ecosystems support big cats, elephants, rhinos, and over 350 bird species.
              </p>
            </motion.div>
          </div>
        </article>

        {/* Related Articles Section */}
        <RelatedArticles posts={relatedPosts} />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <CallToAction title="Ready for your Mashatu adventure?" subtitle="Contact us to book your private charter flight and safari stay at Mashatu Game Reserve." href="/rates-and-quotes" linkText="Request a charter quote" />
        </motion.div>

        {/* Service Collage Section */}
        <div className="relative max-w-7xl mx-auto w-full h-[600px] mt-12 mb-12">
          <AnimatedServiceCollage />
        </div>
      </motion.div>
    </>
  );
} 