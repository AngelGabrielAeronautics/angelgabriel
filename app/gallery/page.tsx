import React from 'react';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';
import QuoteBanner from '../components/QuoteBanner';
import AnimatedServiceCollage from '../components/AnimatedServiceCollage';
import Head from 'next/head';

export const metadata = {
  title: 'Gallery | Angel Gabriel Aeronautics',
  description: 'View our gallery of aviation images showcasing our aircraft, destinations, and operations across Southern Africa.',
};

export default function GalleryPage() {
  const pageUrl = process.env.SITE_URL + '/gallery';

  // Gallery items with captions - This array will be removed
  /*
  const galleryItems = [
    {
      image: "New Rates Sheets",
      caption: "New Rates Sheets\nNow in a convenient one-pager format!"
    },
    {
      image: "COVID-19 Reminder",
      caption: "Whenever I find myself sulking in the corner about how badly COVID-19 has affected our lives and livelihoods - I remind myself how grateful I am that no one in my family has been made ill by the virus - because that's really what matters..."
    },
    {
      image: "Stormy Flying",
      caption: "Stormy flying today. Well done to our skilled pilots."
    },
    {
      image: "Madikwe Special",
      caption: "Fly to Madikwe for the cost of a road transfer!"
    },
    {
      image: "Waterberg Mountain Range",
      caption: "Waterberg Mountain Range looking beautiful en-route to Lanseria ✈ ⛰\n.\n.\n.\n.\n.\n #aviation #avgeek #aviationlovers #airplane #aircraft #aviationphotography #pilot #plane #instagramaviation #instaaviation #airport #planespotting #aviationdaily #instaplane #aviationgeek #pilotlife #flight #flying #fly #travel #planes #planespotter #planelovers #safari #photography #southafrica #cessna #C208"
    },
    {
      image: "Mandela Day Initiative",
      caption: "Special delivery for our brave anti-poachers at Madikwe for Angel Gabriel's #MandelaDay initiative. A massive thank you to all those who risk their lives to protect these beautiful creatures.\n.\n.\n.\n.\n.\n#stoprhinopoaching #conservation #southafrica #unitethefuture #togetherpossible #antipoaching #aviationdaily #c208 #thankyou #aviation #avgeek #aviationlovers #aircraft #aviationphotography #pilot #plane"
    },
    {
      image: "Landing at Madikwe",
      caption: "Landing at Madikwe ✈\n. . . . . \n#aviation #avgeek #aviationlovers #airplane #aircraft #aviationphotography #pilot #plane #instagramaviation #instaaviation #airport #planespotting #aviationdaily #instaplane #aviationgeek #pilotlife #flight #flying #fly #travel #planes #planespotter #planelovers #safari #photography #southafrica #cessna #C208"
    },
    {
      image: "Rhino Africa",
      caption: "Thank you to @rhinoafrica for hosting us today."
    },
    {
      image: "Good Things Come",
      caption: "Good things come to those who fly ✈ ☀ . . . . . \n#aviation #avgeek #aviationlovers #airplane #aircraft #aviationphotography #pilot #plane #instagramaviation #instaaviation #limpopovalleyairtaxi #planespotting #aviationdaily #instaplane #aviationgeek #pilotlife #flight #flying #fly #travel #planes #planespotter #planelovers #safari #photography #southafrica #pilatus #pc12"
    },
    {
      image: "Our Little Engine",
      caption: "Our Little Engine That Could...\n. . . . . \n#aviation #avgeek #aviationlovers #airplane #aircraft #aviationphotography #pilot #plane #instagramaviation #instaaviation #airport #planespotting #aviationdaily #instaplane #aviationgeek #pilotlife #flight #flying #fly #travel #planes #planespotter #planelovers #safari #photography #southafrica #cessna #C210"
    },
    {
      image: "MackAir M2",
      caption: "Congratulations MackAir on your out the box M2, we are looking forward to putting her to work. . . . . . \n#mackair #aviation #avgeek #aviationlovers #airplane #aircraft #aviationphotography #pilot #plane #instagramaviation #instaaviation #airport #planespotting #aviationdaily #instaplane #aviationgeek #pilotlife #flight #flying #fly #travel #planes #planespotter #planelovers #safari #photography #southafrica #cessna #citation"
    },
    {
      image: "Next Stop Madikwe",
      caption: "Next stop, Madikwe 🐘 🦏 🐆 . . . . . \n#aviation #avgeek #aviationlovers #airplane #aircraft #aviationphotography #pilot #plane #instagramaviation #instaaviation #airport #planespotting #aviationdaily #instaplane #aviationgeek #pilotlife #flight #flying #fly #travel #planes #planespotter #planelovers #safari #photography #southafrica #cessna #C402"
    },
    {
      image: "Sunny Madikwe",
      caption: "Sunny Madikwe ☀\n📸: @duanzerwick\n. . . . . \n#aviation #avgeek #cessna #aviationlovers #airplane #aircraft #aviationphotography #pilot #plane #instagramaviation #instaaviation #airport #planespotting #aviationdaily #instaplane #aviationgeek #pilotlife #flight #flying #fly #travel #planes #210 #planespotter #lovers #photography #southafrica"
    },
    {
      image: "Beautiful Day for Flying",
      caption: "Beautiful day for flying ✈ 🛩️\n. . . . . \n#aviation #avgeek #beechcraft #aviationlovers #airplane #aircraft #aviationphotography #pilot #plane #instagramaviation #instaaviation #airport #planespotting #aviationdaily #instaplane #aviationgeek #pilotlife #flight #flying #fly #travel #planes #be20 #planespotter #lovers #photography #southafrica"
    },
    {
      image: "Clouds",
      caption: "☁️⛅☁️\n.\n.\n.\n.\n.\n#aviation #avgeek #aviationlovers #airplane #aircraft #aviationphotography #pilot #plane #instagramaviation #instaaviation #airport #planespotting #aviationdaily #instaplane #aviationgeek #pilotlife #flight #flying #fly #travel #planes #sky #clouds #planespotter #lovers #photography #southafrica"
    },
    {
      image: "Onwards and Upwards",
      caption: "Onwards and upwards ✈ ✈\n. . . . . . \n#aviation #avgeek #cessna #aviationlovers #airplane #aircraft #aviationphotography #pilot #plane #instagramaviation #instaaviation #airport #planespotting #aviationdaily #instaplane #aviationgeek #pilotlife #flight #flying #fly #travel #planes #210 #planespotter #lovers #photography #southafrica"
    },
    {
      image: "Madikwe Hills",
      caption: "Madikwe Hills ☀ . . . . . \n#aviation #avgeek #cessna #aviationlovers #airplane #aircraft #aviationphotography #pilot #plane #instagramaviation #instaaviation #airport #planespotting #aviationdaily #instaplane #aviationgeek #pilotlife #flight #flying #fly #travel #planes #210 #planespotter #lovers #photography #southafrica"
    },
    {
      image: "ZS-SWR",
      caption: "ZS-SWR on her way to Madikwe ✈\n.\n.\n.\n.\n.\n#aviation #avgeek #aviationlovers #airplane #aircraft #aviationphotography #pilot #plane  #instaaviation #airport #planespotting #aviationdaily #instaplane #aviationgeek #pilotlife #flight #flying #fly #planes #kingair #kingair200 #be20 #planespotter #southafrica"
    },
    {
      image: "✈ ✈ ✈",
      caption: "✈ ✈ ✈"
    },
    {
      image: "C210 Views",
      caption: "C210 soaking in the views\n. . . . .\n\n#aviation #avgeek #cessna #aviationlovers #airplane #aircraft #aviationphotography #pilot #airbus #plane #instagramaviation #instaaviation #airport #planespotting #aviationdaily #instaplane #aviationgeek #pilotlife #flight #flying #fly #travel #planes #b #f #planespotter #lovers #photography #bhfyp"
    },
    {
      image: "Not Limpopo Taxi",
      caption: "This is not the Limpopo Valley Air Taxi"
    },
    {
      image: "Mala-Mala",
      caption: "Angel Gabriel passengers on their way @ Mala-Mala"
    },
    {
      image: "Returning Home",
      caption: "Limpopo Valley Air Taxi returning home."
    },
    {
      image: "New Office",
      caption: "We have moved! You can now find us at - Office 12, 1st Floor, Terminal Building, Lanseria International Airport."
    },
    {
      image: "Check-in Counter",
      caption: "Pax check-in at Angel Gabriel's counter"
    },
    {
      image: "Multi-aircraft",
      caption: "Multi-aircraft flight on the Limpopo Valley Air Taxi"
    }
  ];
  */

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": process.env.SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Gallery", "item": pageUrl }
          ]
        })}} />
      </Head>
      <div className="min-h-screen bg-ag-cream font-sans">
        <PageHeader title="Gallery" />

        {/* Instagram Section - Moved to top */}
        <div className="container mx-auto px-4 pt-12 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light font-heading text-text-black mb-4">Follow us on Instagram</h2>
            <p className="text-xl text-text-black mb-8">@angel_gabriel_air</p>
            <Link 
              href="https://www.instagram.com/angel_gabriel_air"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black font-sans"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit our Instagram
            </Link>
            <div className="mt-8">
              <img
                src="/images/gallery/Angel%20Gabriel%20Gallery.png"
                alt="Angel Gabriel Aeronautics gallery"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12 max-w-7xl">
          {/* Gallery Grid - This section will be removed */}
          {/*
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {galleryItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square bg-gray-100 relative flex items-center justify-center">
                  <div className="text-slate-500 p-4 text-center font-sans">
                    {item.image}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-text-black text-sm whitespace-pre-line font-sans">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
          */}
          
          {/* Inserted QuoteBanner Section */}
          <div className="my-16">
            <QuoteBanner 
              backgroundSrc="/images/gallery/caravan.jpg"
              altText="Scenic flight over African landscapes"
              title="Ready for Your Next Adventure?"
              subtitle="Let Angel Gabriel Aeronautics take you there. Experience seamless travel and breathtaking views."
              ctaText="Request Your Custom Quote"
              ctaHref="/rates-and-quotes"
            />
          </div>
          
          {/* Banner linking to About Page - REPLACING the old About Section */}
          <div className="mb-16">
            <QuoteBanner
              backgroundSrc="/images/banners/about-us-gallery-promo.jpg" // Placeholder - Update with relevant image for gallery context
              altText="Angel Gabriel Aeronautics aircraft fleet or scenic view related to company information"
              title="Learn More About Us"
              subtitle="Discover our history, our fleet, and what makes Angel Gabriel Aeronautics your premier choice for air charter."
              ctaText="Explore Our About Page"
              ctaHref="/about"
            />
          </div>
        </div>

        {/* Animated Service Collage Section */}
        <div className="mt-20 mb-12">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md max-w-7xl mx-auto">
            <AnimatedServiceCollage />
          </div>
        </div>

      </div>
    </>
  );
} 