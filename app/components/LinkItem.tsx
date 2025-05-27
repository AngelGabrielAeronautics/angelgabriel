'use client';

import React from 'react';
import { motion } from 'framer-motion';

type LinkItemProps = {
  name: string;
  description?: string;
  url?: string;
  delay?: number;
};

export default function LinkItem({ name, description, url = '#', delay = 0 }: LinkItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay
      }
    }
  };

  return (
    <motion.li
      className="py-3 border-b border-gray-100 last:border-0 overflow-hidden"
      variants={itemVariants}
    >
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group hover:bg-gray-50 rounded px-2 py-1 -mx-2 transition-colors"
      >
        <div className="flex items-start">
          <span className="flex items-center text-text-black font-medium font-sans group-hover:text-secondary-dark transition-colors">
            <span className="w-2 h-2 bg-secondary-dark rounded-full mr-3 inline-block"></span>
            {name}
          </span>
        </div>
        {description && (
          <p className="text-slate-500 text-sm mt-1 ml-5 font-sans">{description}</p>
        )}
      </a>
    </motion.li>
  );
} 