'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlaneDeparture } from 'react-icons/fa';

type QuoteBannerProps = {
  backgroundSrc: string;
  altText: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  icon?: React.ElementType;
};

export default function QuoteBanner({
  backgroundSrc,
  altText,
  title,
  subtitle,
  ctaText,
  ctaHref,
  icon: IconComponent = FaPlaneDeparture,
}: QuoteBannerProps) {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
      <Image
        src={backgroundSrc}
        alt={altText}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="bg-black/45 text-center p-8 max-w-6xl rounded-md">
          <h2 className="text-2xl md:text-3xl font-heading text-ag-cream mb-3">{title}</h2>
          <p className="text-xl text-ag-cream mb-8 max-w-3xl mx-auto">{subtitle}</p>
          <Link href={ctaHref} className="inline-flex items-center justify-center px-7 py-2 bg-yellow-500 text-ag-text-black font-medium rounded-md hover:bg-yellow-600 transition-colors duration-300">
            <IconComponent className="w-5 h-5 mr-2" />
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
} 