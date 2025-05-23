'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ServiceItem = {
  id: string
  title: string
  image: string
  isVideo?: boolean
  isLarge?: boolean
}

export default function ServicesGrid() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set up video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay was prevented:', err);
      });
    }
  }, []);

  // Services data - using the actual uploaded images but all linking to the same page
  const services: ServiceItem[] = [
    {
      id: 'taxi-route-map',
      title: 'TAXI ROUTE MAP',
      image: '/images/services/Taxi Route Map Animation - 666x350px.mp4',
      isVideo: true,
      isLarge: true
    },
    { 
      id: 'private-charters', 
      title: 'PRIVATE CHARTERS', 
      image: '/images/services/Charter.jpg',
      isLarge: true
    },
    { 
      id: 'fixed-rate', 
      title: 'FIXED RATE CHARTERS', 
      image: '/images/services/Fixed Rate Charter.jpg'
    },
    { 
      id: 'safari-packages', 
      title: 'SAFARI PACKAGES', 
      image: '/images/services/Travel Packages.jpg'
    },
    { 
      id: 'flying-safaris', 
      title: 'FLYING SAFARIS', 
      image: '/images/services/Flying Safaris.jpg'
    },
    { 
      id: 'recreational-flights', 
      title: 'RECREATIONAL FLIGHTS', 
      image: '/images/services/Recriational flights.jpg'
    },
    {
      id: 'golf-safaris', 
      title: 'EXCLUSIVE FLYING GOLF SAFARIS', 
      image: '/images/services/Golf Packages.jpg'
    },
    { 
      id: 'airport-shuttles', 
      title: 'AIRPORT SHUTTLES & ROAD TRANSFERS', 
      image: '/images/services/airport shuttle.jpg'
    },
    { 
      id: 'vip-assistance', 
      title: 'VIP AIRPORT ASSISTANCE', 
      image: '/images/services/meet and greet.jpg'
    },
    { 
      id: 'baggage-storage', 
      title: 'BAGGAGE STORAGE', 
      image: '/images/services/baggage storage.jpg'
    },
    { 
      id: 'slow-lounges', 
      title: 'SLOW LOUNGES', 
      image: '/images/services/VIP Lounge.jpg'
    },
    { 
      id: 'concierge', 
      title: 'CONCIERGE SERVICES', 
      image: '/images/services/Concierge.jpg'
    },
    { 
      id: 'aircraft-management', 
      title: 'AIRCRAFT MANAGEMENT', 
      image: '/images/services/Aircraft Managemnt.jpg'
    },
    { 
      id: 'cargo', 
      title: 'CARGO MOVEMENTS', 
      image: '/images/services/Cargo.jpg'
    },
    { 
      id: 'aircraft-classifieds', 
      title: 'AIRCRAFT CLASSIFIEDS', 
      image: '/images/services/Aircraft Clasifieds.jpg'
    },
    { 
      id: 'security', 
      title: 'CLOSE PROTECTION & SECURITY', 
      image: '/images/services/CPO.jpg'
    },
    { 
      id: 'alliance-program', 
      title: 'ALLIANCE PROGRAM', 
      image: '/images/services/Alliance.jpg'
    },
    { 
      id: 'press-releases', 
      title: 'PRESS RELEASES', 
      image: '/images/services/press releases.jpg'
    },

  ]

  return (
    <section className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`relative group overflow-hidden ${
              service.isLarge 
                ? 'col-span-2 row-span-2 aspect-[16/9]' 
                : 'col-span-1 aspect-[4/2.7]'
            }`}
          >
            <div className="w-full h-full relative">
              {service.isVideo ? (
                <div className="w-full h-full relative shadow-md">
                  <video 
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full transition-all duration-300 group-hover:brightness-50"
                  >
                    <source src={service.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes={service.isLarge 
                    ? "(max-width: 640px) 100vw, 50vw" 
                    : "(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  }
                  className="object-cover transition-all duration-300 group-hover:brightness-50"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 text-center w-full">
                  <h3 className={`text-white font-light font-heading tracking-wide drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 break-words hyphens-auto ${
                    service.isLarge ? 'text-6xl md:text-6xl lg:text-6xl' : 'text-xl md:text-3xl lg:text-4xl'
                  }`}>
                    {service.title}
                  </h3>
                </div>
              </div>
              <Link href="/services" className="absolute inset-0 z-10">
                <span className="sr-only">{service.title}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 