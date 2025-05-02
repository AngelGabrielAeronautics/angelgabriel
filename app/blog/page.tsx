'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageText: string;
}

export default function BlogPage() {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const blogPosts: BlogPost[] = [
    {
      slug: 'exploring-the-wild',
      title: 'Exploring the Wild: Why Chartering an Aircraft with Angel Gabriel is Safer and Faster than Driving',
      excerpt: 'Discover why flying with Angel Gabriel Aeronautics is the safest and most efficient way to explore remote destinations in Southern Africa.',
      date: 'August 27, 2024',
      category: 'Travel Tips',
      imageText: 'People boarding a charter aircraft'
    },
    {
      slug: 'top-safari-destinations',
      title: 'Top 5 Safari Destinations Accessible Only by Charter Flight',
      excerpt: 'Explore these exclusive safari destinations that are only accessible by private charter flights, offering untouched wilderness and ultimate privacy.',
      date: 'July 15, 2024',
      category: 'Destinations',
      imageText: 'Aerial view of remote safari lodge'
    },
    {
      slug: 'business-travel-solutions',
      title: 'Business Travel Solutions: How Private Charters Save Time and Increase Productivity',
      excerpt: 'Learn how executives and business teams maximize productivity by choosing private charter flights for their corporate travel needs.',
      date: 'June 8, 2024',
      category: 'Business',
      imageText: 'Business executive boarding private jet'
    },
    {
      slug: 'south-africas-hidden-gems',
      title: `South Africa's Hidden Gems: Remote Destinations Accessible Only by Air`,
      excerpt: 'Explore the exclusive, off-the-beaten-path locations throughout Southern Africa that are best reached through private air charter.',
      date: 'March 12, 2023',
      category: 'Destinations',
      imageText: 'Aerial view of remote South African landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Insights, updates, and stories from Angel Gabriel Aeronautics
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {blogPosts.map((post) => (
            <motion.div 
              key={post.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={fadeIn}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="h-48 bg-gray-100 relative flex items-center justify-center">
                  {post.slug === 'exploring-the-wild' ? (
                    <Image 
                      src="/images/services/Flying Safaris.jpg" 
                      alt={post.imageText}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-gray-500 p-4 text-center">
                      {post.imageText}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="text-blue-600 font-semibold">Read more</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 