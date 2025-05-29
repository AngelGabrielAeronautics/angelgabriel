'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'

interface ClientLogosProps {
  logos: string[];
}

export default function ClientLogos({ logos }: ClientLogosProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
    >
      <h2 className="text-3xl font-light font-heading text-text-black mb-8 text-center">
        Our valued clients
      </h2>
      <div className="bg-white p-8 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="relative bg-white aspect-video rounded-lg flex items-center justify-center"
            >
              <Image
                src={encodeURI(`/images/clients/${logo}`)}
                alt={logo}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-contain"
                onError={() => console.error('Failed to load client logo', logo)}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 