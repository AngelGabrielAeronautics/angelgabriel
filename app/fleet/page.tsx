import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Southern African Fleet | Angel Gabriel Aeronautics',
  description: 'Explore our fleet of over 30 vetted aircraft ranging from two-seaters to large jet airliners. Angel Gabriel provides a variety of aircraft across Southern Africa.',
};

export default function FleetPage() {
  // Aircraft banner images (placeholders)
  const bannerImages = [
    "aircraft banner slide 7.png",
    "aircraft banner slide 6.png",
    "aircraft banner slide 5.png",
    "aircraft banner slide 4.png",
    "aircraft banner slide 3.png",
    "aircraft banner slide 2.png",
  ];
  
  // Define all aircraft data
  const aircraftList = [
    {
      name: "EMBRAER 145",
      image: "EMB145.png",
      specs: [
        "SEATING - 40/50",
        "CARGO CAPACITY - X LARGE",
        "CABIN ROOM - X LARGE",
        "POWERPLANT - TWIN JET",
        "CRUISE SPEED - FAST",
        "LAVATORY - YES",
        "CABIN PRESSURE - PRESSURISED",
        "CREW - TWO",
        "RANGE - LONG",
        "MANUFACTURER - BRAZIL",
        "OTHER - NIL"
      ]
    },
    {
      name: "EMBRAER 120",
      image: "EMB120.png",
      specs: [
        "SEATING - 24/30",
        "CARGO CAPACITY - X LARGE",
        "CABIN ROOM - LARGE",
        "POWERPLANT - TWIN TURBOPROP",
        "CRUISE SPEED - FAST",
        "LAVATORY - YES",
        "CABIN PRESSURE - PRESSURISED",
        "CREW - TWO",
        "RANGE - LONG",
        "MANUFACTURER - BRAZIL",
        "OTHER - NIL"
      ]
    },
    {
      name: "KING AIR 1900(D)",
      image: "B1900D.png",
      specs: [
        "SEATING - 17/19",
        "CARGO CAPACITY - MEDIUM",
        "CABIN ROOM - MEDIUM",
        "POWERPLANT - TWIN TURBOPROP",
        "CRUISE SPEED - MEDIUM/FAST",
        "LAVATORY - NO",
        "CABIN PRESSURE - PRESSURISED",
        "CREW - TWO",
        "RANGE - MEDIUM",
        "MANUFACTURER - U.S.A.",
        "OTHER - NOT SUITABLE FOR UNMANNED FIELDS"
      ]
    },
    {
      name: "CESSNA CARAVAN",
      image: "Caravan.png",
      specs: [
        "SEATING - 8/10",
        "CARGO CAPACITY - MEDIUM",
        "CABIN ROOM - MEDIUM",
        "POWERPLANT - SINGLE TURBOPROP",
        "CRUISE SPEED - SLOW",
        "LAVATORY - NO",
        "CABIN PRESSURE - UNPRESSURISED",
        "CREW - TWO",
        "RANGE - SHORT/MEDIUM",
        "MANUFACTURER - U.S.A.",
        "OTHER - IDEAL FOR DIRT STRIPS"
      ]
    },
    {
      name: "KING AIR 350",
      image: "B350.png",
      specs: [
        "SEATING - 8/10",
        "CARGO CAPACITY - MEDIUM",
        "CABIN ROOM - MEDIUM",
        "POWERPLANT - TWIN TURBOPROP",
        "CRUISE SPEED - MEDIUM/FAST",
        "LAVATORY - NO",
        "CABIN PRESSURE - PRESSURISED",
        "CREW - TWO",
        "RANGE - MEDIUM/LONG",
        "MANUFACTURER - U.S.A.",
        "OTHER - NIL"
      ]
    },
    {
      name: "KING AIR 200",
      image: "B200.png",
      specs: [
        "SEATING - 6/8",
        "CARGO CAPACITY - MEDIUM",
        "CABIN ROOM - MEDIUM",
        "POWERPLANT - TWIN TURBOPROP",
        "CRUISE SPEED - MEDIUM/FAST",
        "LAVATORY - YES",
        "CABIN PRESSURE - PRESSURISED",
        "CREW - TWO",
        "RANGE - MEDIUM/LONG",
        "MANUFACTURER - U.S.A.",
        "OTHER - NIL"
      ]
    },
    {
      name: "PILATUS PC12",
      image: "PC12.png",
      specs: [
        "SEATING - 6/8",
        "CARGO CAPACITY - MEDIUM",
        "CABIN ROOM - MEDIUM",
        "POWERPLANT - SINGLE TURBOPROP",
        "CRUISE SPEED - MEDIUM/FAST",
        "LAVATORY - NO",
        "CABIN PRESSURE - PRESSURISED",
        "CREW - ONE/TWO",
        "RANGE - MEDIUM/LONG",
        "MANUFACTURER - SWISS",
        "OTHER - SHORT TAKE OFF AND LANDING"
      ]
    },
    {
      name: "CESSNA CITATION M2",
      image: "CM2.png",
      specs: [
        "SEATING - 5/6",
        "CARGO CAPACITY - SMALL",
        "CABIN ROOM - MEDIUM",
        "POWERPLANT - TWIN JET",
        "CRUISE SPEED - X FAST",
        "LAVATORY - NO",
        "CABIN PRESSURE - PRESSURISED",
        "CREW - ONE/TWO",
        "RANGE - MEDIUM/LONG",
        "MANUFACTURER - U.S.A.",
        "OTHER - NIL"
      ]
    },
    {
      name: "KING AIR 90",
      image: "C90.png",
      specs: [
        "SEATING - 4/6",
        "CARGO CAPACITY - MEDIUM",
        "CABIN ROOM - MEDIUM",
        "POWERPLANT - TWIN TURBOPROP",
        "CRUISE SPEED - MEDIUM/FAST",
        "LAVATORY - NO",
        "CABIN PRESSURE - PRESSURISED",
        "CREW - ONE/TWO",
        "RANGE - SHORT/MEDIUM",
        "MANUFACTURER - U.S.A.",
        "OTHER - NIL"
      ]
    },
    {
      name: "CESSNA 402",
      image: "C402.png",
      specs: [
        "SEATING - 4/6",
        "CARGO CAPACITY - SMALL",
        "CABIN ROOM - SMALL",
        "POWERPLANT - TWIN PISTON",
        "CRUISE SPEED - SLOW/MEDIUM",
        "LAVATORY - NO",
        "CABIN PRESSURE - UNPRESSURISED",
        "CREW - ONE/TWO ON REQUEST",
        "RANGE - SHORT/MEDIUM",
        "MANUFACTURER - U.S.A.",
        "OTHER - NIL"
      ]
    },
    {
      name: "BELL 505",
      image: "BELL 505.png",
      specs: [
        "SEATING - 2/5",
        "CARGO CAPACITY - X SMALL",
        "CABIN ROOM - X SMALL",
        "POWERPLANT - SINGLE TURBINE",
        "CRUISE SPEED - SLOW",
        "LAVATORY - NO",
        "CABIN PRESSURE - UNPRESSURISED",
        "CREW - ONE/TWO ON REQUEST",
        "RANGE - SHORT",
        "MANUFACTURER - U.S.A.",
        "OTHER - NIL"
      ]
    },
    {
      name: "BELL 407",
      image: "407.png",
      specs: [
        "SEATING - 2/5",
        "CARGO CAPACITY - SMALL",
        "CABIN ROOM - SMALL",
        "POWERPLANT - SINGLE TURBINE",
        "CRUISE SPEED - SLOW",
        "LAVATORY - NO",
        "CABIN PRESSURE - UNPRESSURISED",
        "CREW - ONE/TWO ON REQUEST",
        "RANGE - SHORT",
        "MANUFACTURER - U.S.A.",
        "OTHER - NIL"
      ]
    },
    {
      name: "BELL LONGRANGER",
      image: "BELL LONG.png",
      specs: [
        "SEATING - 2/5",
        "CARGO CAPACITY - SMALL",
        "CABIN ROOM - SMALL",
        "POWERPLANT - SINGLE TURBINE",
        "CRUISE SPEED - SLOW",
        "LAVATORY - NO",
        "CABIN PRESSURE - UNPRESSURISED",
        "CREW - ONE/TWO ON REQUEST",
        "RANGE - SHORT",
        "MANUFACTURER - U.S.A.",
        "OTHER - NIL"
      ]
    },
    {
      name: "EUROCOPTER B3E",
      image: "B3E.png",
      specs: [
        "SEATING - 2/5",
        "CARGO CAPACITY - X SMALL",
        "CABIN ROOM - X SMALL",
        "POWERPLANT - SINGLE TURBINE",
        "CRUISE SPEED - SLOW",
        "LAVATORY - NO",
        "CABIN PRESSURE - UNPRESSURISED",
        "CREW - ONE/TWO ON REQUEST",
        "RANGE - MEDIUM/LONG",
        "MANUFACTURER - FRANCE",
        "OTHER - NIL"
      ]
    },
    {
      name: "BEECHCRAFT BARON 58",
      image: "B58.png",
      specs: [
        "SEATING - 3/4",
        "CARGO CAPACITY - SMALL",
        "CABIN ROOM - SMALL",
        "POWERPLANT - TWIN PISTON",
        "CRUISE SPEED - SLOW",
        "LAVATORY - NO",
        "CABIN PRESSURE - UNPRESSURISED",
        "CREW - ONE/TWO ON REQUEST",
        "RANGE - SHORT/MEDIUM",
        "MANUFACTURER - U.S.A.",
        "OTHER - NIL"
      ]
    },
    {
      name: "CESSNA 210",
      image: "C210.png",
      specs: [
        "SEATING - 3/4",
        "CARGO CAPACITY - X SMALL",
        "CABIN ROOM - X SMALL",
        "POWERPLANT - SINGLE PISTON",
        "CRUISE SPEED - SLOW/MEDIUM",
        "LAVATORY - NO",
        "CABIN PRESSURE - UNPRESSURISED",
        "CREW - ONE",
        "RANGE - SHORT/MEDIUM",
        "MANUFACTURER - U.S.A.",
        "OTHER - NIL"
      ]
    },
    {
      name: "CESSNA 206",
      image: "C206.png",
      specs: [
        "SEATING - 2/3",
        "CARGO CAPACITY - X SMALL",
        "CABIN ROOM - X SMALL",
        "POWERPLANT - SINGLE PISTON",
        "CRUISE SPEED - SLOW",
        "LAVATORY - NO",
        "CABIN PRESSURE - UNPRESSURISED",
        "CREW - ONE",
        "RANGE - SHORT",
        "MANUFACTURER - U.S.A.",
        "OTHER - NIL"
      ]
    },
    {
      name: "PIPER PA34",
      image: "PA34.png",
      specs: [
        "SEATING - 2/3",
        "CARGO CAPACITY - SMALL",
        "CABIN ROOM - SMALL",
        "POWERPLANT - TWIN PISTON",
        "CRUISE SPEED - SLOW",
        "LAVATORY - NO",
        "CABIN PRESSURE - UNPRESSURISED",
        "CREW - ONE/TWO ON REQUEST",
        "RANGE - SHORT",
        "MANUFACTURER - U.S.A.",
        "OTHER - NIL"
      ]
    },
    {
      name: "BEECHCRAFT BONANZA",
      image: "BONANZA.png",
      specs: [
        "SEATING - 2/3",
        "CARGO CAPACITY - SMALL",
        "CABIN ROOM - SMALL",
        "POWERPLANT - SINGLE PISTON",
        "CRUISE SPEED - SLOW",
        "LAVATORY - NO",
        "CABIN PRESSURE - UNPRESSURISED",
        "CREW - ONE/TWO ON REQUEST",
        "RANGE - SHORT",
        "MANUFACTURER - U.S.A.",
        "OTHER - NIL"
      ]
    },
    {
      name: "CIRRUS SR22",
      image: "SR22.png",
      specs: [
        "SEATING - 1/2",
        "CARGO CAPACITY - X SMALL",
        "CABIN ROOM - X SMALL",
        "POWERPLANT - SINGLE PISTON",
        "CRUISE SPEED - SLOW",
        "LAVATORY - NO",
        "CABIN PRESSURE - UNPRESSURISED",
        "CREW - ONE",
        "RANGE - SHORT",
        "MANUFACTURER - U.S.A.",
        "OTHER - NIL"
      ]
    },
    {
      name: "HARVARD WWII",
      image: "HARVARD.png",
      specs: [
        "SEATING - 1",
        "CARGO CAPACITY - N/A",
        "CABIN ROOM - N/A",
        "POWERPLANT - SINGLE ROTARY",
        "CRUISE SPEED - N/A",
        "LAVATORY - N/A",
        "CABIN PRESSURE - UNPRESSURISED",
        "CREW - ONE",
        "RANGE - N/A",
        "MANUFACTURER - U.S.A.",
        "OTHER - ACROBATIC AND FORMATION EXPERIENCE"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-ag-cream py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-ag-text-black mb-4">Southern African fleet</h1>
          <div className="max-w-2xl mx-auto my-8">
            <p className="text-xl text-ag-text-black text-center">
              30+ Vetted Aircraft
            </p>
            <p className="text-lg text-ag-text-black mt-4 text-center">
              Angel Gabriel accesses a fleet in excess of 30 vetted aircraft, ranging from two-seaters up to three hundred-plus-seat jet airliners, from nine regional hubs spanning from Maun to Cape Town.
            </p>
          </div>
          <Link 
            href="/quotes"
            className="inline-block mt-4 bg-black text-white font-light py-3 px-6 rounded-full hover:bg-gray-900 transition-colors duration-300"
          >
            Request a charter quote
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Aircraft Banner Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {bannerImages.map((image, index) => (
            <div key={index} className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-center p-4">{image}</p>
            </div>
          ))}
        </div>
        
        {/* Aircraft List */}
        <div className="space-y-24">
          {aircraftList.map((aircraft, index) => (
            <div key={index} className="border-t border-gray-200 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Aircraft Specifications */}
                <div>
                  <ul className="space-y-2 mb-6">
                    {aircraft.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="text-gray-700">* {spec}</li>
                    ))}
                  </ul>
                  <h3 className="text-2xl font-light text-ag-secondary-dark mt-8">
                    {aircraft.name}
                  </h3>
                </div>
                
                {/* Aircraft Image */}
                <div className="bg-gray-100 rounded-lg flex items-center justify-center aspect-video">
                  <p className="text-gray-500 text-center p-4">{aircraft.image}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Company Info */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <p className="text-gray-700">
            Welcome to Angel Gabriel, your trusted air charter provider since 2013. We specialise in lodge transfer flights 
            and private charters across Southern Africa and Botswana, offering unparalleled service, safety, and convenience. 
            Whether you're travelling for business or leisure, our experienced team is committed to delivering seamless, 
            personalised aviation solutions. At Angel Gabriel, we're dedicated to making every journey as memorable as the 
            destinations we fly you to.
          </p>
        </div>
        
        {/* Newsletter and Contact Forms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {/* Newsletter */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl font-light text-gray-900 mb-4">Subscribe to our newsletter</h2>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
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
              <h2 className="text-2xl font-light text-gray-900 mb-4">Contact us</h2>
              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="contactFirstName" className="sr-only">First name</label>
                  <input
                    type="text"
                    id="contactFirstName"
                    name="contactFirstName"
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label htmlFor="contactLastName" className="sr-only">Last name</label>
                  <input
                    type="text"
                    id="contactLastName"
                    name="contactLastName"
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
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
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-light rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Request a charter quote
          </Link>
        </div>
        
        {/* Blog Posts */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-video relative bg-gray-100 flex items-center justify-center">
                <div className="text-gray-500 p-4 text-center">
                  Featured article image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light mb-2">
                  Exploring the Wild: Why Chartering an Aircraft with Angel Gabriel is Safer and Faster than Driving
                </h3>
                <Link href="/blog/exploring-the-wild" className="text-gray-800 hover:text-gray-600 font-medium mt-2 inline-block">
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
                <h3 className="text-xl font-light mb-2">
                  Exploring the Wild: Why Chartering an Aircraft with Angel Gabriel is Safer and Faster than Driving
                </h3>
                <Link href="/blog/exploring-the-wild" className="text-gray-800 hover:text-gray-600 font-medium mt-2 inline-block">
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