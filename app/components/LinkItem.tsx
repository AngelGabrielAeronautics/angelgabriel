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
      className="py-3 border-b border-gray-100 last:border-0"
      variants={itemVariants}
    >
      <a 
        href={url}
        className="block group hover:bg-blue-50 rounded px-2 py-1 -mx-2 transition-colors"
      >
        <div className="flex items-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
          <div>
            <h3 className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
              {name}
            </h3>
            {description && (
              <p className="text-gray-500 text-sm mt-1">{description}</p>
            )}
          </div>
        </div>
      </a>
    </motion.li>
  );
} 