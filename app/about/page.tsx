'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import QuoteRequestForm from '../components/QuoteRequestForm';

export default function AboutPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-ag-cream py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-ag-text-black mb-4">About Angel Gabriel Southern Africa</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main About Section */}
        <motion.div 
          className="mb-16 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="aspect-video bg-gray-100 rounded-lg mb-8 flex items-center justify-center">
            <p className="text-gray-500 text-center p-4">Cessna Caravan lands at Madikwe Safari Lodge</p>
          </div>
          
          <p className="text-gray-700 text-lg mb-8">
            Angel Gabriel, established in 2013, is a premier air charter provider specialising in lodge transfer flights 
            and private charters across Southern Africa and Botswana. With a commitment to safety, comfort, and personalised 
            service, we offer seamless and unforgettable air travel experiences. Whether you&apos;re exploring remote lodges 
            or need a tailored private flight, Angel Gabriel ensures your journey is as exceptional as your destination.
          </p>

          <p className="text-gray-700 text-lg mb-8">
            Welcome to Angel Gabriel, your trusted air charter provider since 2013. We specialise in lodge transfer flights 
            and private charters across Southern Africa and Botswana, offering unparalleled service, safety, and convenience. 
            Whether you&apos;re travelling for business or leisure, our experienced team is committed to delivering seamless, 
            personalised aviation solutions. At Angel Gabriel, we&apos;re dedicated to making every journey as memorable as the 
            destinations we fly you to.
          </p>
        </motion.div>

        {/* Our Valued Clients Section */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-light text-ag-text-black mb-8 text-center">Our valued clients</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Client logos would go here - using placeholders */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Client Logo</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Charter Quote Form Section */}
        <motion.div 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-light text-ag-text-black mb-8 text-center">Angel Gabriel&apos;s charter operations</h2>
          <div className="max-w-4xl mx-auto">
            <QuoteRequestForm />
          </div>
        </motion.div>
        
        {/* Gallery Link */}
        <motion.div 
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-light text-ag-text-black mb-6">Check out our image gallery</h2>
          <div className="aspect-video bg-gray-100 rounded-lg mb-8 flex items-center justify-center mx-auto max-w-4xl">
            <p className="text-gray-500 text-center p-4">Featured Gallery Image</p>
          </div>
          <Link 
            href="/gallery"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            View Gallery
          </Link>
        </motion.div>
        
        {/* Newsletter and Contact Forms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {/* Newsletter */}
          <motion.div 
            className="bg-gray-50 p-8 rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-center">
              <h2 className="text-2xl font-light text-gray-900 mb-4">Subscribe to our newsletter</h2>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
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
              <h2 className="text-2xl font-light text-gray-900 mb-4">Contact us</h2>
              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="contactFirstName" className="sr-only">First name</label>
                  <input
                    type="text"
                    id="contactFirstName"
                    name="contactFirstName"
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label htmlFor="contactLastName" className="sr-only">Last name</label>
                  <input
                    type="text"
                    id="contactLastName"
                    name="contactLastName"
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* CTA Button */}
        <div className="mt-10 text-center mb-20">
          <Link 
            href="/quotes"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Request a charter quote
          </Link>
        </div>
      </div>
    </div>
  );
} 