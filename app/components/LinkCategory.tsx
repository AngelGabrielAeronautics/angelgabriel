'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LinkItem from './LinkItem';

type LinkCategoryProps = {
  title: string;
  links: string[];
  index?: number;
};

export default function LinkCategory({ title, links, index = 0 }: LinkCategoryProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
        staggerChildren: 0.05
      }
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">{title}</h2>
      <motion.ul className="space-y-1">
        {links.map((link, idx) => (
          <LinkItem 
            key={idx} 
            name={link} 
            delay={idx * 0.05}
          />
        ))}
      </motion.ul>
    </motion.div>
  );
} 