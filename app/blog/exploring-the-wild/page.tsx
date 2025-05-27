'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';
import PageHeader from '../../components/PageHeader';

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

  // Sample related posts
  const relatedPosts = [
    {
      slug: 'luxury-lodge-hopping',
      title: 'Luxury Lodge Hopping: The Ultimate Safari Experience',
      excerpt: 'Experience multiple premium safari lodges in a single trip with our efficient air charter services.',
      imageText: 'Lodge with infinity pool'
    },
    {
      slug: 'south-africas-hidden-gems',
      title: 'South Africa\'s Hidden Gems: Remote Destinations',
      excerpt: 'Explore off-the-beaten-path locations throughout Southern Africa.',
      imageText: 'Aerial view of landscape'
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

        <div className="container mx-auto px-4 py-12">
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

              <h2>The Safety Factor</h2>
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

              <h2>Time Efficiency</h2>
              <p>
                Perhaps the most significant advantage of chartering an aircraft is the time saved. A journey that might take 8-10 hours by road can often be completed in under 2 hours by air. This means:
              </p>
              <ul>
                <li>More time enjoying your destination rather than traveling to it</li>
                <li>Reduced fatigue that comes with long road journeys</li>
                <li>The ability to visit multiple destinations in a single trip</li>
                <li>Flexibility to adjust your schedule if needed</li>
              </ul>

              <h2>The Experience</h2>
              <p>
                Beyond safety and time considerations, flying over Southern Africa offers an unparalleled perspective on the landscape. From the air, you'll witness:
              </p>
              <ul>
                <li>Breathtaking views of diverse ecosystems</li>
                <li>Wildlife sightings impossible to see from the ground</li>
                <li>The true scale and beauty of Africa's wilderness</li>
                <li>A more comfortable journey in our climate-controlled aircraft</li>
              </ul>

              <h2>Environmental Considerations</h2>
              <p>
                While all travel has an environmental impact, charter flights can sometimes be the more eco-friendly option when:
              </p>
              <ul>
                <li>Multiple travelers would otherwise require several vehicles</li>
                <li>Direct routes by air avoid lengthy detours necessary by road</li>
                <li>Less infrastructure impact on delicate ecosystems compared to road building</li>
              </ul>

              <h2>Is a Charter Flight Right for You?</h2>
              <p>
                If you value your time, safety, and comfort, chartering an aircraft with Angel Gabriel Aeronautics makes perfect sense for exploring Southern Africa's remote destinations. Our experienced team can help plan your journey to maximize both enjoyment and efficiency.
              </p>

              <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <p className="font-bold">Ready to explore the wild? Contact us today to discuss your travel plans and discover how we can make your journey as memorable as your destination.</p>
                <Link 
                  href="/quotes" 
                  className="px-8 py-4 shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-300 font-sans inline-block mt-4"
                >
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="max-w-5xl mx-auto mt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((post, index) => (
                <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-video bg-gray-100 relative flex items-center justify-center">
                    <p className="text-gray-500 text-center p-4">{post.imageText}</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-5">
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      aria-label={`Read more about ${post.title}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* CTA Section */}
        <motion.div 
          className="max-w-4xl mx-auto mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the Angel Gabriel Difference?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your travel needs and discover how our charter services can elevate your Southern African adventure.
          </p>
          <Link 
            href="/quotes"
            className="inline-flex items-center justify-center px-8 py-4 shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-300 font-sans"
          >
            Request a charter quote
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
} 