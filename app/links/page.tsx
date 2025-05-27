'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LinkCategory from '../components/LinkCategory';
import HeroButton from '../components/HeroButton';
import CallToAction from '../components/CallToAction';
import Image from 'next/image';
import LinkItem from '../components/LinkItem';
import Head from 'next/head';

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
        { name: "&Beyond", url: "https://www.andbeyond.com/" },
        { name: "Abercrombie & Kent", url: "https://www.abercrombiekent.com/" },
        { name: "Natural Selection", url: "https://www.naturalselection.travel/" },
        { name: "Rhino Africa", url: "https://www.rhinoafrica.com/" },
        { name: "Thompsons Holidays", url: "https://www.thompsons.co.za/" },
        { name: "Tourvest", url: "https://www.tourvestdm.com/" },
        { name: "Virgin Holidays", url: "https://www.virginholidays.co.uk/" },
        { name: "Wilderness Safaris", url: "https://www.wilderness-safaris.com/" }
      ]
    },
    {
      title: "Lodges",
      links: [
        { name: "The Royal Madikwe", url: "https://www.royalmadikwe.com/" },
        { name: "Ulusaba", url: "https://www.ulusaba.com/" },
        { name: "Royal Malewane", url: "https://www.royalmalewane.com/" },
        { name: "Madikwe Safari Lodge", url: "https://www.madikwesafarilodge.co.za/" },
        { name: "Mashatu", url: "https://www.mashatu.com/" },
        { name: "Marataba", url: "https://www.marataba.co.za/" },
        { name: "Limpopo Lipadi", url: "https://www.limpopolipadi.com/" },
        { name: "Lubbesrust", url: "https://www.lubbesrust.co.za/" }
      ]
    },
    {
      title: "Overnighting",
      links: [
        { name: "InterContinental Johannesburg O.R. Tambo Airport", url: "https://www.ihg.com/intercontinental/hotels/gb/en/johannesburg/jnbap/hoteldetail" },
        { name: "Michelangelo Hotel", url: "https://www.legacyhotels.co.za/hotels/michelangelo-hotel" },
        { name: "Four Seasons", url: "https://www.fourseasons.com/johannesburg/" },
        { name: "Fairlawns", url: "https://www.fairlawns.co.za/" }
      ]
    },
    {
      title: "Road Transport",
      links: [
        { name: "Airport Link", url: "https://www.airportlink.co.za/" },
        { name: "Copper Sun", url: "https://www.coppersun.co.za/" }
      ]
    }
  ];

  const pageUrl = process.env.SITE_URL + '/links';

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": process.env.SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Links & Endorsements", "item": pageUrl }
          ]
        })}} />
      </Head>
      <div className="min-h-screen bg-ag-cream">
        {/* Hero Banner with overlay */}
        <div className="relative h-[700px] md:h-[700px] w-full">
          <Image
            src="/images/links/LinksPage.png"
            alt="Links & endorsements network diagram"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-[#e9e2cf] mb-4 max-[375px]:text-4xl max-[320px]:text-3xl">Links & endorsements</h1>
            <p className="text-xl text-[#e9e2cf] mb-8 max-w-4xl font-sans">
              We have added a list of links that we hope may help you to plan your trip or navigate the local market. Angel Gabriel works with and can endorse each of the entities listed here.
            </p>
            <HeroButton href="/rates-and-quotes" text="Request a charter quote" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
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
          
          {/* CTA Section */}
          <CallToAction href="/rates-and-quotes" linkText="Request a charter quote" />
        </div>
      </div>
    </>
  );
} 