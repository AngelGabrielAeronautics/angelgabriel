import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Gallery | Angel Gabriel Aeronautics',
  description: 'View our gallery of aviation images showcasing our aircraft, destinations, and operations across Southern Africa.',
};

export default function GalleryPage() {
  // Gallery items with captions
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gray-100 relative flex items-center justify-center">
                <div className="text-gray-500 p-4 text-center">
                  {item.image}
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-sm whitespace-pre-line">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mb-16">
          <button className="px-6 py-3 bg-gray-200 rounded-md text-gray-700 font-medium hover:bg-gray-300 transition-colors">
            Load More
          </button>
        </div>
        
        {/* Instagram Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow us on Instagram</h2>
          <p className="text-xl text-blue-600 mb-8">@angel_gabriel_air</p>
          <button className="px-6 py-3 bg-gray-200 rounded-md text-gray-700 font-medium hover:bg-gray-300 transition-colors">
            Load More
          </button>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mb-16">
          <Link 
            href="/quotes"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Request a charter quote
          </Link>
        </div>
        
        {/* About Image */}
        <div className="mb-12">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-center p-4">Collage of Angel Gabriel Aeronautics' business activities.</p>
          </div>
        </div>
        
        {/* About Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">More about Angel Gabriel</h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-700">
              Welcome to Angel Gabriel, your trusted air charter provider since 2013. We specialise in lodge transfer flights 
              and private charters across Southern Africa and Botswana, offering unparalleled service, safety, and convenience. 
              Whether you're travelling for business or leisure, our experienced team is committed to delivering seamless, 
              personalised aviation solutions. At Angel Gabriel, we're dedicated to making every journey as memorable as the 
              destinations we fly you to.
            </p>
          </div>
        </div>
        
        {/* Newsletter and Contact Forms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {/* Newsletter */}
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to our newsletter</h2>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact us</h2>
              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="contactFirstName" className="sr-only">First name</label>
                  <input
                    type="text"
                    id="contactFirstName"
                    name="contactFirstName"
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="contactLastName" className="sr-only">Last name</label>
                  <input
                    type="text"
                    id="contactLastName"
                    name="contactLastName"
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mt-10 text-center mb-20">
          <Link 
            href="/quotes"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Request a charter quote
          </Link>
        </div>
        
        {/* Blog Posts */}
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                <div className="text-gray-500 p-4 text-center">
                  Featured article image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Exploring the Wild: Why Chartering an Aircraft with Angel Gabriel is Safer and Faster than Driving
                </h3>
                <Link href="/blog/exploring-the-wild" className="text-blue-600 hover:underline mt-2 inline-block">
                  Read more
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                <div className="text-gray-500 p-4 text-center">
                  Featured article image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Exploring the Wild: Why Chartering an Aircraft with Angel Gabriel is Safer and Faster than Driving
                </h3>
                <Link href="/blog/exploring-the-wild" className="text-blue-600 hover:underline mt-2 inline-block">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 