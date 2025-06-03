'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import QuoteRequestForm from '../components/QuoteRequestForm';
import ClientLogos from './ClientLogos';
import PageHeader from '../components/PageHeader';
import AnimatedServiceCollage from '../components/AnimatedServiceCollage';
import CallToAction from '../components/CallToAction';
import GalleryBanner from '../components/GalleryBanner';

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
      {/* YouTube Video Section */}
      <div className="container mx-auto px-4 my-16 max-w-7xl">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/_wczi6Twk7s?autoplay=1&mute=1&loop=1&playlist=_wczi6Twk7s&controls=1&modestbranding=1&rel=0"
            title="Angel Gabriel Aeronautics Promo"
            allow="autoplay; encrypted-media; fullscreen"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
      {/* Introductory Paragraph */}
      <div className="container mx-auto px-4 mb-16 max-w-4xl">
        <p className="text-text-black font-sans text-base leading-relaxed">
          Angel Gabriel, established in 2013, is a premier air charter provider specialising in lodge transfer flights and private charters across Southern Africa and Botswana. With a commitment to safety, comfort, and personalised service, we offer seamless and unforgettable air travel experiences. Whether you're exploring remote lodges or need a tailored private flight, Angel Gabriel ensures your journey is as exceptional as your destination.
        </p>
      </div>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* TODO: Add the two paragraphs of about content here, styled with text-text-black font-sans */}

        {/* Our Valued Clients */}
        <ClientLogos logos={clientLogos} />

        {/* Call To Action Section */}
        <CallToAction />

        {/* Gallery Promotion Banner */}
        <div className="my-16">
          <GalleryBanner />
        </div>

        {/* Animated Service Collage Section */}
        <div className="my-16">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md max-w-7xl mx-auto">
            <AnimatedServiceCollage />
          </div>
        </div>
      </div>
    </div>
  );
} 