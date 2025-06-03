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

export default function ExploringTheWildBlogPost() {
  const pageUrl = process.env.SITE_URL + '/blog/exploring-the-wild';
  const publishedDate = '2024-08-27';
  const authorName = 'Dylan Coppard';
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Related posts
  const relatedPosts = [
    {
      slug: 'lubbesrust-farm',
      title: 'Lubbesrust Farm: Exclusive Wilderness Lodge in Botswana',
      excerpt: 'Lubbesrust Farm offers over 20,712 hectares of fenced wilderness and a private airstrip for an unforgettable safari experience.',
      imageText: 'Aerial view of Lubbesrust Farm reserve',
      imageSrc: '/images/blogs/lubbesrust-farm/overview.jpg'
    },
    {
      slug: 'mashatu-game-reserve',
      title: 'Mashatu Game Reserve: Land of the Giants in Botswana',
      excerpt: 'Mashatu Game Reserve spans 42,000 hectares of wilderness at the confluence of the Limpopo and Shashe rivers, featuring luxury lodges and iconic wildlife.',
      imageText: 'Panoramic view of Mashatu Game Reserve',
      imageSrc: '/images/blogs/mashatu-game-reserve/overview.jpg'
    }
  ];

  // Tags from the website
  const tags = [
    'Angel Gabriel',
    'CharterFlights',
    'SouthAfrica',
    'LuxurySafari',
    'SafariTravel',
    'AngelGabrielCharters',
    'TravelConvenience',
    'TimeEfficiency',
    'AirCharter'
  ];

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": pageUrl
          },
          "headline": "Exploring the Wild: Why Chartering an Aircraft with Angel Gabriel is Safer and Faster than Driving",
          "description": "Discover why flying with Angel Gabriel Aeronautics is safer and more efficient than long road journeys to remote safari destinations.",
          "image": "https://flyangelgabriel.com/images/blogs/OFD.png",
          "author": { "@type": "Person", "name": authorName },
          "publisher": { "@type": "Organization", "name": "Angel Gabriel Aeronautics", "logo": { "@type": "ImageObject", "url": "https://flyangelgabriel.com/icon.png" } },
          "datePublished": publishedDate,
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": process.env.SITE_URL },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": process.env.SITE_URL + '/blog' },
              { "@type": "ListItem", "position": 3, "name": "Exploring the Wild", "item": pageUrl }
            ]
          }
        }) }} />
      </Head>
      <motion.div initial="hidden" animate="visible" variants={fadeIn} role="main" className="min-h-screen bg-ag-cream font-sans">
        <PageHeader title="Exploring the Wild: Why Chartering an Aircraft with Angel Gabriel is Safer and Faster than Driving" subtitle={publishedDate} />

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
                  src="/images/blogs/OFD.png" 
                  alt="People boarding a charter aircraft" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <motion.div 
              className="prose prose-lg max-w-none"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <p>
                When planning a trip to remote destinations in Southern Africa, the journey is just as important as the destination. Many travelers face the dilemma of whether to drive long distances on challenging terrain or opt for a charter flight. At Angel Gabriel Aeronautics, we've been helping clients explore the wild beauty of Africa for over a decade, and we can confidently say that chartering an aircraft isn't just more comfortable—it's safer and faster too.
              </p>

              <h2 className="text-3xl font-light font-heading text-text-black mt-8 mb-8">The Safety Factor</h2>
              <p>
                Southern Africa's roads, particularly those leading to remote safari destinations, can present numerous challenges:
              </p>
              <ul>
                <li>Poorly maintained infrastructure in remote areas</li>
                <li>Wildlife hazards, especially during dawn and dusk</li>
                <li>Variable weather conditions that can make roads impassable</li>
                <li>Long stretches without services or assistance</li>
              </ul>

              <p>
                By contrast, flying with Angel Gabriel provides peace of mind with our rigorous safety standards:
              </p>
              <ul>
                <li>Meticulously maintained aircraft with regular inspections</li>
                <li>Experienced pilots with extensive knowledge of regional conditions</li>
                <li>Real-time weather monitoring and flight planning</li>
                <li>Modern navigation equipment and safety features</li>
              </ul>

              <h2 className="text-3xl font-light font-heading text-text-black mt-8 mb-8">Time Efficiency</h2>
              <p>
                Perhaps the most significant advantage of chartering an aircraft is the time saved. A journey that might take 8-10 hours by road can often be completed in under 2 hours by air. This means:
              </p>
              <ul>
                <li>More time enjoying your destination rather than traveling to it</li>
                <li>Reduced fatigue that comes with long road journeys</li>
                <li>The ability to visit multiple destinations in a single trip</li>
                <li>Flexibility to adjust your schedule if needed</li>
              </ul>

              <h2 className="text-3xl font-light font-heading text-text-black mt-8 mb-8">The Experience</h2>
              <p>
                Beyond safety and time considerations, flying over Southern Africa offers an unparalleled perspective on the landscape. From the air, you'll witness:
              </p>
              <ul>
                <li>Breathtaking views of diverse ecosystems</li>
                <li>Wildlife sightings impossible to see from the ground</li>
                <li>The true scale and beauty of Africa's wilderness</li>
                <li>A more comfortable journey in our climate-controlled aircraft</li>
              </ul>

              <h2 className="text-3xl font-light font-heading text-text-black mt-8 mb-8">Environmental Considerations</h2>
              <p>
                While all travel has an environmental impact, charter flights can sometimes be the more eco-friendly option when:
              </p>
              <ul>
                <li>Multiple travelers would otherwise require several vehicles</li>
                <li>Direct routes by air avoid lengthy detours necessary by road</li>
                <li>Less infrastructure impact on delicate ecosystems compared to road building</li>
              </ul>

              <h2 className="text-3xl font-light font-heading text-text-black mt-8 mb-8">Is a Charter Flight Right for You?</h2>
              <p>
                If you value your time, safety, and comfort, chartering an aircraft with Angel Gabriel Aeronautics makes perfect sense for exploring Southern Africa's remote destinations. Our experienced team can help plan your journey to maximize both enjoyment and efficiency.
              </p>
            </motion.div>
          </div>
        </article>

        {/* Related Articles Section */}
        <RelatedArticles posts={relatedPosts} />

        {/* CTA Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <CallToAction
            title="Ready to explore the wild?"
            subtitle="Contact us today to discuss your travel plans and discover how we can make your journey as memorable as your destination."
            href="/quotes"
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