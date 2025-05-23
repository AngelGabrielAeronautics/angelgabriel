'use client';

import React from 'react';
import Image from 'next/image';
import PageHeader from '../components/PageHeader';
import QuoteRequestForm from '../components/QuoteRequestForm';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBinoculars } from 'react-icons/fa';
import AnimatedServiceCollage from '../components/AnimatedServiceCollage';

export default function RatesAndQuotesPage() {
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
    <div className="min-h-screen bg-ag-cream pb-20">
      {/* Page Header */}
      <PageHeader 
        title="Rates & quotations." 
        subtitle="Request a personalized charter quote tailored to your needs"
      />

      {/* Aircraft Banner Image with Quote Form Overlay */}
      <div className="w-full relative">
        {/* Aircraft Image */}
        <div className="w-full relative h-full md:h-[700px] z-5">
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
              {/* Overlay text and CTA */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="bg-black/60 text-center p-7 w-full">
                  <h2 className="text-4xl md:text-5xl font-light font-heading text-hero-text mb-4">Explore Our Services</h2>
                  <p className="text-xl text-hero-text mb-8 max-w-3xl mx-auto font-sans">From private charters to cargo movements, discover how we can elevate your travel experience.</p>
                  <Link href="/services" className="inline-flex items-center justify-center px-7 py-2 bg-yellow-500 text-text-black font-medium font-sans rounded-md hover:bg-yellow-600 transition-colors duration-300">
                    <FaBinoculars className="w-5 h-5 mr-2" />
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 