'use client';

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Features from './components/Features';
import PartnerLogos from './components/PartnerLogos';
import BlogPostPreview from './components/BlogPostPreview';
import HeroBackdrop from './components/HeroBackdrop';
import ServicesGrid from './components/ServicesGrid';
import FleetCarousel from './components/FleetCarousel';
import QuoteRequestForm from './components/QuoteRequestForm';

export default function Home() {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Services data
  const services = [
    { 
      title: "PRIVATE CHARTERS", 
      image: "https://placehold.co/600x400/343d3f/white?text=Private+Charters", 
      link: "/services/private-charters" 
    },
    { 
      title: "FIXED RATE CHARTERS", 
      image: "https://placehold.co/600x400/343d3f/white?text=Fixed+Rate+Charters", 
      link: "/services/fixed-rate-charters" 
    },
    { 
      title: "SAFARI PACKAGES", 
      image: "https://placehold.co/600x400/343d3f/white?text=Safari+Packages", 
      link: "/services/safari-packages" 
    },
    { 
      title: "FLYING SAFARIS", 
      image: "https://placehold.co/600x400/343d3f/white?text=Flying+Safaris", 
      link: "/services/flying-safaris" 
    },
    { 
      title: "EXCLUSIVE FLYING GOLF SAFARIS", 
      image: "https://placehold.co/600x400/343d3f/white?text=Golf+Safaris", 
      link: "/services/golf-safaris" 
    },
    { 
      title: "AIRPORT SHUTTLES & ROAD TRANSFERS", 
      image: "https://placehold.co/600x400/343d3f/white?text=Airport+Shuttles", 
      link: "/services/airport-shuttles" 
    },
    { 
      title: "VIP AIRPORT ASSISTANCE SERVICES", 
      image: "https://placehold.co/600x400/343d3f/white?text=VIP+Assistance", 
      link: "/services/vip-assistance" 
    },
    { 
      title: "RECREATIONAL FLIGHTS", 
      image: "https://placehold.co/600x400/343d3f/white?text=Recreational+Flights", 
      link: "/services/recreational-flights" 
    },
    { 
      title: "BAGGAGE STORAGE", 
      image: "https://placehold.co/600x400/343d3f/white?text=Baggage+Storage", 
      link: "/services/baggage-storage" 
    },
    { 
      title: "SLOW LOUNGES", 
      image: "https://placehold.co/600x400/343d3f/white?text=Slow+Lounges", 
      link: "/services/slow-lounges" 
    },
    { 
      title: "CONCIERGE SERVICES", 
      image: "https://placehold.co/600x400/343d3f/white?text=Concierge+Services", 
      link: "/services/concierge" 
    },
    { 
      title: "AIRCRAFT MANAGEMENT", 
      image: "https://placehold.co/600x400/343d3f/white?text=Aircraft+Management", 
      link: "/services/aircraft-management" 
    },
    { 
      title: "CARGO MOVEMENTS", 
      image: "https://placehold.co/600x400/343d3f/white?text=Cargo+Movements", 
      link: "/services/cargo" 
    },
    { 
      title: "AIRCRAFT CLASSIFIEDS", 
      image: "https://placehold.co/600x400/343d3f/white?text=Aircraft+Classifieds", 
      link: "/services/aircraft-classifieds" 
    },
    { 
      title: "CLOSE PROTECTION & SECURITY", 
      image: "https://placehold.co/600x400/343d3f/white?text=Security", 
      link: "/services/security" 
    },
    { 
      title: "ALLIANCE PROGRAM", 
      image: "https://placehold.co/600x400/343d3f/white?text=Alliance+Program", 
      link: "/services/alliance" 
    },
    { 
      title: "PRESS RELEASES", 
      image: "https://placehold.co/600x400/343d3f/white?text=Press+Releases",
      link: "/press" 
    }
  ];

  // Fleet carousel images
  const fleetImages = [
    "https://placehold.co/800x500/343d3f/white?text=Aircraft+1",
    "https://placehold.co/800x500/343d3f/white?text=Aircraft+2",
    "https://placehold.co/800x500/343d3f/white?text=Aircraft+3",
    "https://placehold.co/800x500/343d3f/white?text=Aircraft+4",
    "https://placehold.co/800x500/343d3f/white?text=Aircraft+5",
    "https://placehold.co/800x500/343d3f/white?text=Aircraft+6"
  ];

  return (
    <div className="min-h-screen bg-ag-cream">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-screen w-full flex items-start sm:items-center pt-16 sm:pt-0 text-[#e7e0cf]">
        {/* Video backdrop component - no overlay */}
        <HeroBackdrop />
        
        {/* Hero content - extreme left aligned */}
        <div className="relative z-20 w-full px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-6xl ml-0 md:ml-28 max-[375px]:mt-32 max-[320px]:mt-32"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-light font-heading mb-7 leading-tight">
              Southern Africa's Remote<br />Destination Specialist.
            </h1>
            <p className="text-base sm:text-xl md:text-2xl xl:text-3xl mb-8">
              Mashatu, Madikwe, Lubbesrust, and more...
            </p>
            <Link 
              href="/rates-and-quotes" 
              className="inline-flex items-center justify-center px-8 py-3 max-[320px]:px-4 max-[320px]:py-2 max-[320px]:text-sm border-2 border-[#e7e0cf] text-lg font-medium rounded-md text-[#e7e0cf] bg-transparent hover:bg-[#e7e0cf]/10 transition-colors duration-300 md:px-10 md:py-4 md:text-xl xl:px-8 xl:py-3 xl:text-lg font-heading"
            >
              Request a charter quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="w-full"
      >
        <div className="container mx-auto px-4 pb-12">
          <ServicesGrid />
        </div>
      </motion.section>

      {/* Fleet Carousel */}
      <motion.section 
        className="py-11 bg-ag-cream overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-1 mb-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-left font-heading mb-2">Available Fleet</h2>
        </div>
        <div className="w-screen relative overflow-hidden">
          <FleetCarousel />
        </div>
      </motion.section>

      {/* Quote Request Form Section - Accordion Style */}
      <section className="pt-8 pb-16 bg-ag-cream">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <QuoteRequestForm isAccordion={true} initialOpen={false} />
          </motion.div>
        </div>
      </section>

    </div>
  );
}