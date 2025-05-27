'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const fleetImages = [
  "/images/fleetbanner/aircraft banner slide 2.png",
  "/images/fleetbanner/aircraft banner slide 3.png",
  "/images/fleetbanner/aircraft banner slide 4.png",
  "/images/fleetbanner/aircraft banner slide 5.png",
  "/images/fleetbanner/aircraft banner slide 6.png",
  "/images/fleetbanner/aircraft banner slide 7.png",
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

  // Calculate previous index for exit animation
  const prevIndex = (current - 1 + fleetImages.length) % fleetImages.length;

  return (
    <Link href="/fleet" aria-label="View our fleet of aircraft" className="block cursor-pointer hover:opacity-95 transition-opacity">
      <div className="w-full relative pb-[11.9%] overflow-hidden">
        {fleetImages.map((image, index) => {
          const isCurrent = index === current;
          const isPrev = index === prevIndex;
          // Only animate active and exiting slides
          const transitionClass = isCurrent || isPrev ? 'transition-transform duration-700 ease-in-out' : 'transition-none';
          const transformClass = isCurrent ? 'translate-x-0' : isPrev ? '-translate-x-full' : 'translate-x-full';
          const zIndexClass = isCurrent ? 'z-10' : '';
          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full ${transitionClass} ${transformClass} ${zIndexClass}`}
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
          );
        })}
      </div>
    </Link>
  );
};

export default FleetCarousel;
