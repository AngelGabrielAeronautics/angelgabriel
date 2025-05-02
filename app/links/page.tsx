'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PartnerLogos from '../components/PartnerLogos';
import LinkCategory from '../components/LinkCategory';

export default function LinksPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkCategories = [
    {
      title: "Agents",
      links: [
        "&Beyond",
        "Abercrombie & Kent",
        "Natural Selection",
        "Rhino Africa",
        "Thompsons Holidays",
        "Tourvest",
        "Virgin Holidays",
        "Wilderness Safaris"
      ]
    },
    {
      title: "Lodges",
      links: [
        "The Royal Madikwe",
        "Ulusaba",
        "Royal Malewane",
        "Madikwe Safari Lodge",
        "Mashatu",
        "Marataba",
        "Limpopo Lipadi",
        "Lubbesrust"
      ]
    },
    {
      title: "Overnighting",
      links: [
        "InterContinental Johannesburg O.R. Tambo Airport",
        "Michelangelo Hotel",
        "Four Seasons",
        "Fairlawns"
      ]
    },
    {
      title: "Road Transport",
      links: [
        "Airport Link",
        "Copper Sun"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Links & endorsements</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <motion.div 
          className="mb-16 max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <p className="text-gray-700 text-lg mb-8">
            We have added a list of links that we hope may help you to plan your trip or navigate the local market. 
            Angel Gabriel works with and can endorse each of the entities listed here.
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <PartnerLogos />
        </motion.div>

        {/* Links Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {linkCategories.map((category, index) => (
            <LinkCategory 
              key={category.title}
              title={category.title}
              links={category.links}
              index={index}
            />
          ))}
        </div>
        
        {/* CTA Button */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Link 
            href="/quotes"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Request a charter quote
          </Link>
        </motion.div>

        {/* Newsletter and Contact Forms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {/* Newsletter */}
          <motion.div 
            className="bg-blue-50 p-8 rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to our newsletter</h2>
              <form className="mt-4">
                <div className="space-y-3">
                  <div>
                    <label htmlFor="newsletterEmail" className="sr-only">Email*</label>
                    <input
                      type="email"
                      id="newsletterEmail"
                      name="newsletterEmail"
                      placeholder="Email*"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-gray-50 p-8 rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact us</h2>
              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="contactFirstName" className="sr-only">First name</label>
                  <input
                    type="text"
                    id="contactFirstName"
                    name="contactFirstName"
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="contactLastName" className="sr-only">Last name</label>
                  <input
                    type="text"
                    id="contactLastName"
                    name="contactLastName"
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail" className="sr-only">Email*</label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    placeholder="Email*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="contactMessage" className="sr-only">Message*</label>
                  <textarea
                    id="contactMessage"
                    name="contactMessage"
                    placeholder="Message*"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 