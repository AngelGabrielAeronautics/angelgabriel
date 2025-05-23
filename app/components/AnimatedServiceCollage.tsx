'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// List of service images for collage (includes extra images beyond grid size to avoid duplicates)
const servicesImages = [
  '/images/services/Charter.jpg',
  '/images/services/Fixed Rate Charter.jpg',
  '/images/services/Travel Packages.jpg',
  '/images/services/Flying Safaris.jpg',
  '/images/services/Golf Packages.jpg',
  '/images/services/airport shuttle.jpg',
  '/images/services/Concierge.jpg',
  '/images/services/VIP Lounge.jpg',
  '/images/services/CPO.jpg',
  '/images/services/Cargo.jpg',
  '/images/services/Alliance.jpg',
  '/images/services/Recriational flights.jpg',
  '/images/services/baggage storage.jpg',
  '/images/services/Aircraft Managemnt.jpg',
  '/images/services/Aircraft Clasifieds.jpg',
];

export default function AnimatedServiceCollage() {
  const gridCount = 12; // 4 cols x 3 rows
  // Initialize with a random sample of unique image indices
  const [indices, setIndices] = useState<number[]>(() => {
    const all = servicesImages.map((_, i) => i);
    // Fisher-Yates shuffle
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }
    return all.slice(0, gridCount);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndices(prev => {
        const next = [...prev];
        // pick a random tile to change
        const tile = Math.floor(Math.random() * gridCount);
        // select image candidates not currently displayed
        const used = new Set(next);
        const candidates = servicesImages.map((_, i) => i).filter(i => !used.has(i));
        if (candidates.length === 0) return next;
        const img = candidates[Math.floor(Math.random() * candidates.length)];
        next[tile] = img;
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 grid grid-cols-4 grid-rows-3">
      {indices.map((imgIdx, idx) => (
        <div key={idx} className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={servicesImages[imgIdx]}
                alt="Service image"
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
} 