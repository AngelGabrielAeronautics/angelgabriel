'use client';

import React from 'react';
import QuoteBanner from './QuoteBanner';
import { FaImages } from 'react-icons/fa';

export default function GalleryBanner() {
  return (
    <QuoteBanner
      backgroundSrc="/images/banners/gallery-promo.jpg"
      altText="Gallery preview of Angel Gabriel Aeronautics flights and destinations"
      icon={FaImages}
      title="Explore Our Gallery"
      subtitle="Discover breathtaking images of our flights, destinations, and experiences across Southern Africa."
      ctaText="View Gallery"
      ctaHref="/gallery"
    />
  );
} 