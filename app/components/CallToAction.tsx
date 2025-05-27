'use client';

import React from 'react';
import Link from 'next/link';
import { FaPlaneDeparture } from 'react-icons/fa';

export default function CallToAction({
  title = 'Ready to take flight?',
  subtitle = 'Experience the comfort and convenience of flying with Angel Gabriel Aeronautics.',
  href = '/rates-and-quotes',
  linkText = 'Request a charter quote',
}: {
  title?: string;
  subtitle?: string;
  href?: string;
  linkText?: string;
}) {
  return (
    <div className="max-w-7xl mx-auto mt-10 mb-20 print:hidden">
      <div className="bg-black/45 p-8 text-center shadow-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold font-heading text-[#e9e2cf] mb-4">{title}</h2>
          <p className="text-xl text-[#e9e2cf] mb-8 font-sans">{subtitle}</p>
        </div>
        <Link
          href={href}
          className="inline-flex items-center justify-center px-4 py-2 text-sm max-[320px]:px-2 max-[320px]:py-1 max-[320px]:text-xs sm:px-8 sm:py-3 sm:text-lg border-2 border-[#e7e0cf] font-medium font-sans rounded-md text-[#e7e0cf] bg-transparent hover:bg-[#e7e0cf]/10 transition-colors duration-300 md:py-4 md:text-xl md:px-10"
        >
          <FaPlaneDeparture className="w-5 h-5 mr-2" />
          {linkText}
        </Link>
      </div>
    </div>
  );
} 