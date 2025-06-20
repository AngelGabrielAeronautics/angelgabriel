'use client';

import React from 'react';
import Image from 'next/image';
import PageHeader from '../components/PageHeader';
import QuoteRequestForm from '../components/QuoteRequestForm';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBinoculars } from 'react-icons/fa';
import AnimatedServiceCollage from '../components/AnimatedServiceCollage';
import Head from 'next/head';

export default function RatesAndQuotesPage() {
  const pageUrl = process.env.SITE_URL + '/rates-and-quotes';
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

  return (
    <>
      <Head>
        {/* Offer structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Offer",
          "name": "Custom Private Jet Charter Quotes",
          "category": "Private Air Travel Services",
          "description": "Request a personalized quote for your private jet charter needs with Angel Gabriel Aeronautics. We tailor flights across Southern Africa to your specific requirements, considering aircraft type, distance, passenger count, and additional services.",
          "url": pageUrl,
          "offeredBy": {
            "@type": "Organization",
            "name": "Angel Gabriel Aeronautics",
            "url": process.env.SITE_URL
          },
          "availability": "https://schema.org/InStock",
          "priceCurrency": "ZAR",
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": process.env.SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Rates & Quotes", "item": pageUrl }
          ]
        })}} />
      </Head>
      <div className="min-h-screen bg-ag-cream pb-20">
        {/* Page Header */}
        <PageHeader 
          title="Rates & quotations." 
          subtitle="Request a personalized charter quote tailored to your needs"
        />

        {/* Aircraft Banner Image with Quote Form Overlay */}
        <div className="w-full relative">
          {/* Aircraft Image */}
          <div className="w-full relative h-[60vh] md:h-[700px] z-5">
            <div className="absolute inset-0"></div>
            <Image 
              src="/images/rates-and-quotes/caravan-rates.jpg"
              alt="Angel Gabriel Aeronautics Charter Aircraft"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <motion.div 
            className="max-w-7xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {/* Introduction */}
            <div className="bg-white rounded-lg p-10 mb-12 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 -mt-16 z-20 relative">
              <h2 className="text-2xl font-light text-text-black mb-6 font-heading">Charter Rate Information</h2>
              
              <p className="mb-4 font-sans">
                At Angel Gabriel Aeronautics, we provide personalized charter services with transparent pricing based on your specific requirements. Our rates are calculated considering several factors:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <h3 className="font-light text-xl text-text-black mb-3 font-heading">Aircraft Selection</h3>
                  <p className="font-sans">We offer a range of aircraft to suit your needs, from economical single-engine planes to luxurious twin-engine pressurized aircraft. The aircraft type significantly impacts the charter rate.</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <h3 className="font-light text-xl text-text-black mb-3 font-heading">Distance & Duration</h3>
                  <p className="font-sans">The distance between departure and destination points, including any technical stops required, as well as the duration of your stay for return trips, factor into our pricing.</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <h3 className="font-light text-xl text-text-black mb-3 font-heading">Passenger Count</h3>
                  <p className="font-sans">The number of passengers affects aircraft selection and can influence overall pricing. We'll help you choose the most suitable and cost-effective option.</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <h3 className="font-light text-xl text-text-black mb-3 font-heading">Additional Services</h3>
                  <p className="font-sans">Optional services such as in-flight meals, ground transportation, meet and greet services, and security services can be added to enhance your journey.</p>
                </div>
              </div>
            </div>
            
            {/* Quote Request Form */}
            <div className="bg-white rounded-lg p-10 mb-12 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 -mt-16 z-20 relative">
              <h2 className="text-2xl font-light text-text-black mb-6 font-heading text-center">Request a Quote</h2>
              <QuoteRequestForm />
            </div>
            {/* Services CTA Banner */}
            <div className="mb-12">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                {/* Animated collage of service images */}
                <AnimatedServiceCollage />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 