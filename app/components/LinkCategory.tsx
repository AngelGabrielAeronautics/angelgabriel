'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LinkItem from './LinkItem';
import { FaUserTie, FaHotel, FaBed, FaCar } from 'react-icons/fa';

type LinkCategoryProps = {
  title: string;
  links: { name: string; url: string }[];
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

  const iconMap: Record<string, React.ElementType> = {
    Agents: FaUserTie,
    Lodges: FaHotel,
    Overnighting: FaBed,
    'Road Transport': FaCar,
  };
  const IconComponent = iconMap[title] || FaUserTie;

  return (
    <motion.div 
      className="bg-white rounded-lg p-10 mb-12 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <h2 className="text-2xl font-light font-heading text-text-black mb-6 border-b border-gray-100 pb-3">
        <IconComponent className="inline-block mr-3 text-secondary-dark" size={24} />
        {title}
      </h2>
      <motion.ul className="space-y-1">
        {links.map((link, idx) => (
          <LinkItem 
            key={idx} 
            name={link.name}
            url={link.url}
            delay={idx * 0.05}
          />
        ))}
      </motion.ul>
    </motion.div>
  );
} 