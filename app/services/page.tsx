'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import CallToAction from '../components/CallToAction';
import PageHeader from '../components/PageHeader';
import Head from 'next/head';

export default function ServicesPage() {
  const pageUrl = process.env.SITE_URL + '/services';
  // Services data with descriptions
  const services = [
    {
      id: 'private-charters',
      title: 'PRIVATE CHARTERS',
      image: '/images/services/Charter.jpg',
      description: 'Experience the ultimate in bespoke travel with our private charter services. Choose your departure time, destination, and aircraft type for a journey tailored precisely to your requirements.'
    },
    {
      id: 'fixed-rate-charters',
      title: 'FIXED RATE CHARTERS',
      image: '/images/services/Fixed Rate Charter.jpg',
      description: 'Our fixed rate charter services offer predictable pricing on popular routes, allowing you to enjoy private aviation benefits without the variable costs.'
    },
    {
      id: 'safari-packages',
      title: 'SAFARI PACKAGES',
      image: '/images/services/Travel Packages.jpg',
      description: 'Explore the untamed beauty of Southern Africa with our comprehensive safari packages, combining air travel with exceptional lodging and guided experiences.'
    },
    {
      id: 'flying-safaris',
      title: 'FLYING SAFARIS',
      image: '/images/services/Flying Safaris.jpg',
      description: 'Take in breathtaking aerial views of pristine landscapes and wildlife on our expertly guided flying safaris, reaching remote destinations inaccessible by road.'
    },
    {
      id: 'golf-safaris',
      title: 'EXCLUSIVE FLYING GOLF SAFARIS',
      image: '/images/services/Golf Packages.jpg',
      description: 'Play Southern Africa\'s most prestigious courses on a private flying golf safari, with seamless transportation between world-class golfing destinations.'
    },
    {
      id: 'airport-shuttles',
      title: 'AIRPORT SHUTTLES & ROAD TRANSFERS',
      image: '/images/services/airport shuttle.jpg',
      description: 'Enjoy door-to-door service with our premium airport shuttles and road transfers, complementing your air travel experience with comfortable ground transportation.'
    },
    {
      id: 'vip-assistance',
      title: 'VIP AIRPORT ASSISTANCE',
      image: '/images/services/meet and greet.jpg',
      description: 'Navigate airports effortlessly with our VIP assistance services, including expedited check-in, security, and immigration procedures, plus exclusive lounge access.'
    },
    {
      id: 'recreational-flights',
      title: 'RECREATIONAL FLIGHTS',
      image: '/images/services/Recriational flights.jpg',
      description: 'Experience the thrill of flight with our recreational flying experiences, perfect for special occasions or simply indulging your passion for aviation.'
    },
    {
      id: 'baggage-storage',
      title: 'BAGGAGE STORAGE',
      image: '/images/services/baggage storage.jpg',
      description: 'Travel light with our secure baggage storage solutions, perfect for those needing to store belongings between flights or during shorter excursions.'
    },
    {
      id: 'slow-lounges',
      title: 'SLOW LOUNGES',
      image: '/images/services/VIP Lounge.jpg',
      description: 'Relax in comfort before your flight in one of the slow lounges, featuring premium amenities, refreshments, and a tranquil environment away from the bustle.'
    },
    {
      id: 'concierge',
      title: 'CONCIERGE SERVICES',
      image: '/images/services/Concierge.jpg',
      description: 'Our dedicated concierge team handles every aspect of your journey, from accommodation and dining reservations to special requests and bespoke experiences.'
    },
    {
      id: 'aircraft-management',
      title: 'AIRCRAFT MANAGEMENT',
      image: '/images/services/Aircraft Managemnt.jpg',
      description: 'Maximize your aircraft investment with our comprehensive management services, handling maintenance, crewing, compliance, and operational oversight.'
    },
    {
      id: 'cargo',
      title: 'CARGO MOVEMENTS',
      image: '/images/services/Cargo.jpg',
      description: 'Trust our specialized cargo services for time-sensitive shipments, valuable items, and specialized freight requiring secure and efficient transportation.'
    },
    {
      id: 'aircraft-classifieds',
      title: 'AIRCRAFT CLASSIFIEDS',
      image: '/images/services/Aircraft Clasifieds.jpg',
      description: 'Buy or sell aircraft through our specialized classifieds service, connecting buyers and sellers in the private aviation market with expert guidance.'
    },
    {
      id: 'security',
      title: 'CLOSE PROTECTION & SECURITY',
      image: '/images/services/CPO.jpg',
      description: 'Travel with peace of mind with our professional close protection and security services, provided by trained specialists for VIP clients.'
    },
    {
      id: 'alliance-program',
      title: 'ALLIANCE PROGRAM',
      image: '/images/services/Alliance.jpg',
      description: 'Join our Alliance Program to enjoy preferred rates, priority booking, and exclusive benefits as a regular client of Angel Gabriel Aeronautics.'
    }
  ];

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

  return (
    <>
      <Head>
        {/* Breadcrumb structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": process.env.SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Our Services", "item": pageUrl }
          ]
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          "name": "Angel Gabriel Aeronautics Services Catalog",
          "itemListElement": services.map((s, i) => ({
            "@type": "Offer",
            "position": i + 1,
            "itemOffered": {
              "@type": "Service",
              "serviceType": s.title,
              "description": s.description,
              "image": (process.env.SITE_URL || 'https://flyangelgabriel.com') + s.image,
              "url": pageUrl + '#' + s.id
            }
          }))
        })}} />
      </Head>
      <div className="min-h-screen bg-ag-cream">
        <PageHeader
          title="Our Services"
          subtitle="Angel Gabriel Aeronautics offers a comprehensive range of aviation services tailored to your needs. Explore our offerings below."
        />
        <div className="container mx-auto px-4 py-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light font-heading text-text-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-black font-sans">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-16"
          >
          {/* CTA Section */}
          <CallToAction />
          </motion.div>
        </div>
      </div>
    </>
  );
} 