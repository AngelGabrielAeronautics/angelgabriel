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
    <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-lg overflow-hidden">
      <Image
        src={backgroundSrc}
        alt={altText}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-4">
        <div className="bg-black/45 text-center p-2 sm:p-4 md:p-2 lg:p-4 max-w-6xl rounded-md">
          <h2 className="text-base sm:text-lg md:text-base lg:text-xl xl:text-2xl font-heading text-ag-cream mb-3">{title}</h2>
          <p className="text-sm sm:text-base md:text-xs lg:text-base xl:text-lg text-ag-cream mb-8 max-w-3xl mx-auto">{subtitle}</p>
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center px-3 sm:px-5 md:px-2 lg:px-5 xl:px-7 py-1 sm:py-2 md:py-1 lg:py-2.5 text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base bg-yellow-500 text-ag-text-black font-medium rounded-md hover:bg-yellow-600 transition-colors duration-300"
          >
            <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 mr-1 sm:mr-2" />
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
} 