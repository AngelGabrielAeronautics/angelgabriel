'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageText: string;
};

type BlogPostPreviewProps = {
  post: BlogPost;
  featured?: boolean;
  delay?: number;
};

export default function BlogPostPreview({ post, featured = false, delay = 0 }: BlogPostPreviewProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        delay
      }
    }
  };

  return (
    <motion.div 
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${featured ? 'w-full' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="aspect-video bg-gray-100 relative flex items-center justify-center">
        <p className="text-gray-500 text-center p-4">{post.imageText}</p>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-3">
          <span className="text-sm text-gray-500">{post.date}</span>
          <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
            {post.category}
          </span>
        </div>
        <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-gray-900 mb-3`}>
          {post.title}
        </h3>
        <p className="text-gray-700 mb-5 line-clamp-3">
          {post.excerpt}
        </p>
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
} 