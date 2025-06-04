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

export default function LubbesrustFarmBlogPost() {
  const pageUrl = process.env.SITE_URL + '/blog/lubbesrust-farm';
  const publishedDate = '2025-06-03';
  const authorName = 'Angel Gabriel Aeronautics';
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // Related posts
  const relatedPosts = [
    {
      slug: 'exploring-the-wild',
      title: 'Exploring the Wild: Why Chartering an Aircraft with Angel Gabriel is Safer and Faster than Driving',
      excerpt: 'Discover why flying with Angel Gabriel Aeronautics is the safest and most efficient way to explore remote destinations in Southern Africa.',
      imageText: 'People boarding a charter aircraft',
      imageSrc: '/images/blogs/OFD.png'
    },
    {
      slug: 'mashatu-game-reserve',
      title: 'Mashatu Game Reserve: Land of the Giants in Botswana',
      excerpt: 'Mashatu Game Reserve spans 42,000 hectares of wilderness at the confluence of the Limpopo and Shashe rivers, featuring luxury lodges and iconic wildlife.',
      imageText: 'Panoramic view of Mashatu Game Reserve',
      imageSrc: '/images/blogs/mashatu-game-reserve/overview.jpg'
    }
  ];

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
            "headline": "Lubbesrust Farm: Exclusive Wilderness Lodge in Botswana",
            "description": "Discover Lubbesrust Farm, a luxurious safari lodge in Botswana's Tuli Block with a private airstrip and exclusive lodges.",
            "image": process.env.SITE_URL + '/images/blogs/lubbesrust-farm/overview.jpg',
            "author": { "@type": "Organization", "name": authorName },
            "publisher": { "@type": "Organization", "name": "Angel Gabriel Aeronautics", "logo": { "@type": "ImageObject", "url": process.env.SITE_URL + '/icon.png' } },
            "datePublished": publishedDate,
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": process.env.SITE_URL },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": process.env.SITE_URL + '/blog' },
                { "@type": "ListItem", "position": 3, "name": "Lubbesrust Farm", "item": pageUrl }
              ]
            }
          }) }}
        />
      </Head>
      <motion.div initial="hidden" animate="visible" variants={fadeIn} role="main" className="min-h-screen bg-ag-cream font-sans">
        <PageHeader title="Lubbesrust Farm: Exclusive Wilderness Lodge in Botswana" subtitle={publishedDate} />

        <div className="container mx-auto px-4 mt-6 text-right">
          <Link href="/blog" className="text-text-black hover:text-secondary-dark font-medium font-sans inline-block mb-8">
            ← Back to Blog
          </Link>
        </div>

        <article className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 rounded-lg overflow-hidden">
              <div className="relative h-96 w-full">
                <Image
                  src="/images/blogs/lubbesrust-farm/overview.jpg"
                  alt="Aerial view of Lubbesrust Farm reserve"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <motion.div className="prose prose-lg max-w-none" initial="hidden" animate="visible" variants={fadeIn}>
              <p>
                Lubbesrust Farm is a luxurious safari lodge nestled in Botswana's Tuli Block. Covering over 20,712 hectares of fully fenced wilderness, this reserve offers unparalleled wildlife viewing and exclusive lodge accommodations.
              </p>

              <h2 className="text-3xl font-light font-heading text-text-black mt-8 mb-8">Private Airstrip</h2>
              <p>
                With its own private airstrip, Lubbesrust Farm is just a 1.5-hour charter flight from Johannesburg or Gaborone. Angel Gabriel Aeronautics provides seamless air charter services directly to the lodge, avoiding long roads and ensuring a comfortable arrival.
              </p>

              <h2 className="text-3xl font-light font-heading text-text-black mt-8 mb-8">Accommodations</h2>
              <p>
                The lodge features four private accommodations, each equipped with:
              </p>
              <ul>
                <li>Fans and air-conditioning</li>
                <li>Kitchenette and cozy lounge area</li>
                <li>Comfortable bedroom with en-suite bathroom</li>
                <li>Outdoor shower and private lookout deck overlooking the waterhole</li>
              </ul>

              <h2 className="text-3xl font-light font-heading text-text-black mt-8 mb-8">Wildlife & Activities</h2>
              <p>
                Guests can immerse themselves in the wild with a range of activities guided by expert safari rangers:
              </p>
              <ul>
                <li>On-foot wildlife tracking and rhino walks</li>
                <li>Bush camping near natural springs</li>
                <li>Hide sessions at the main waterhole for prime wildlife sightings</li>
                <li>Stargazing over the vast African sky</li>
              </ul>
            </motion.div>
          </div>
        </article>

        {/* Related Articles Section */}
        <RelatedArticles posts={relatedPosts} />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <CallToAction
            title="Ready to book your lodge experience?"
            subtitle="Contact us to schedule your private charter flight and lodge stay at Lubbesrust Farm."
            href="/rates-and-quotes"
            linkText="Request a charter quote"
          />
        </motion.div>

        {/* Service Collage Section */}
        <div className="relative max-w-7xl mx-auto w-full h-[600px] mt-12 mb-12">
          <AnimatedServiceCollage />
        </div>
      </motion.div>
    </>
  );
} 