'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Partner = {
  name: string;
  category: 'agent' | 'lodge' | 'hotel' | 'transport';
};

export default function PartnerLogos() {
  // Sample partners data - this would be replaced with actual data from your CMS/backend
  const partners: Partner[] = [
    { name: "&Beyond", category: "agent" },
    { name: "Rhino Africa", category: "agent" },
    { name: "Wilderness Safaris", category: "agent" },
    { name: "The Royal Madikwe", category: "lodge" },
    { name: "Ulusaba", category: "lodge" },
    { name: "InterContinental", category: "hotel" },
    { name: "Four Seasons", category: "hotel" },
    { name: "Airport Link", category: "transport" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Trusted Partners</h2>
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {partners.map((partner) => (
          <motion.div 
            key={partner.name}
            className="bg-white rounded-lg shadow-sm overflow-hidden aspect-video flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-blue-600 text-xs uppercase font-semibold">{partner.category}</span>
              </div>
              <p className="text-gray-700 font-medium">{partner.name}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 