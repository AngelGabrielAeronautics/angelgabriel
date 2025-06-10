'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

type RelatedArticle = {
  slug: string;
  title: string;
  excerpt: string;
  imageText: string;
  imageSrc?: string;
};

type RelatedArticlesProps = {
  posts: RelatedArticle[];
};

export default function RelatedArticles({ posts }: RelatedArticlesProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="max-w-7xl mx-auto mt-16">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2 className="text-3xl font-light font-heading text-text-black mb-8 text-center">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Link href={`/blog/${post.slug}`} aria-label={`Read more about ${post.title}`}>
                <div className="h-48 bg-gray-100 relative flex items-center justify-center">
                  {post.imageSrc ? (
                    <Image
                      src={post.imageSrc}
                      alt={post.imageText}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <p className="text-slate-500 p-4 text-center font-sans">{post.imageText}</p>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light font-heading mb-2 text-text-black">{post.title}</h3>
                  <p className="text-text-black mb-4 font-sans">{post.excerpt}</p>
                  <div className="inline-flex items-center text-text-black hover:text-secondary-dark font-medium font-sans transition-colors duration-300">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 