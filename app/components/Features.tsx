'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SafetyIcon from './icons/SafetyIcon';
import InstructionIcon from './icons/InstructionIcon';
import FlexibilityIcon from './icons/FlexibilityIcon';

const Features: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const features = [
    {
      icon: <SafetyIcon />,
      title: 'Safety First',
      description: 'Our top priority is ensuring the safety of our students with state-of-the-art equipment and rigorous safety protocols.',
    },
    {
      icon: <InstructionIcon />,
      title: 'Expert Instruction',
      description: 'Learn from experienced instructors who are passionate about sharing their knowledge and helping you succeed.',
    },
    {
      icon: <FlexibilityIcon />,
      title: 'Flexible Learning',
      description: 'We offer flexible scheduling options to accommodate your busy lifestyle and learning preferences.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Why Choose Us
        </motion.h2>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 