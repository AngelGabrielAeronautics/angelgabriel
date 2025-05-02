'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const fleetImages = [
  "/images/fleet/aircraft banner slide 2.png",
  "/images/fleet/aircraft banner slide 3.png",
  "/images/fleet/aircraft banner slide 4.png",
  "/images/fleet/aircraft banner slide 5.png",
  "/images/fleet/aircraft banner slide 6.png",
  "/images/fleet/aircraft banner slide 7.png",
];

const FleetCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % fleetImages.length);
    }, 3000); // 3000ms display time + 700ms transition time
    
    return () => {
      clearInterval(slideTimer);
    };
  }, []);

  return (
    <Link href="/fleet" className="block cursor-pointer hover:opacity-95 transition-opacity">
      <div className="w-full relative pb-[32%] overflow-hidden">
        {fleetImages.map((image, index) => (
          <div 
            key={index} 
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out ${
              index === current ? 'translate-x-0 z-10' : 
              index === (current - 1 + fleetImages.length) % fleetImages.length ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <Image
              src={image}
              alt={`Aircraft ${index + 1}`}
              fill
              className="object-contain"
              priority={index === current}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </Link>
  );
};

export default FleetCarousel;
