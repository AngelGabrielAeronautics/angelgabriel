'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import QuoteRequestForm from '../components/QuoteRequestForm';
import ClientLogos from './ClientLogos';
import PageHeader from '../components/PageHeader';

interface AboutContentProps {
  clientLogos: string[];
}

export default function AboutContent({ clientLogos }: AboutContentProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="min-h-screen bg-ag-cream font-sans">
      <PageHeader title="About Angel Gabriel Southern Africa" />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Main About Section */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="aspect-video bg-gray-100 rounded-lg mb-8 flex items-center justify-center">
            <p className="text-slate-500 text-center p-4 font-sans">
              Cessna Caravan lands at Madikwe Safari Lodge
            </p>
          </div>
          {/* TODO: Add the two paragraphs of about content here, styled with text-text-black font-sans */}
        </motion.div>

        {/* Our Valued Clients */}
        <ClientLogos logos={clientLogos} />

        {/* Gallery Link */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-light font-heading text-text-black mb-6 text-center">
            Check out our image gallery
          </h2>
          <div className="aspect-video bg-gray-100 rounded-lg mb-8 flex items-center justify-center mx-auto max-w-4xl">
            <p className="text-slate-500 text-center p-4 font-sans">Featured Gallery Image</p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex justify-center py-4 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black font-sans"
          >
            View Gallery
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 