import React from 'react';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';
import CallToAction from '../components/CallToAction';
import FleetCarousel from '../components/FleetCarousel';
import AnimatedServiceCollage from '../components/AnimatedServiceCollage';

export const metadata = {
  title: 'Southern African Fleet | Angel Gabriel Aeronautics',
  description: 'Explore our fleet of over 30 vetted aircraft ranging from two-seaters to large jet airliners. Angel Gabriel provides a variety of aircraft across Southern Africa.',
};

export default function FleetPage() {
  // Define all aircraft data
  const aircraftList = [
    {
      name: "EMBRAER 145",
      image: "/images/fleet/EMB145.png",
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
      image: "/images/fleet/EMB120.png",
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
      image: "/images/fleet/B1900D.png",
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
      image: "/images/fleet/Caravan.png",
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
      image: "/images/fleet/B350.png",
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
      image: "/images/fleet/B200.png",
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
      image: "/images/fleet/PC12.png",
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
      image: "/images/fleet/CM2.png",
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
      image: "/images/fleet/C90.png",
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
      image: "/images/fleet/C402.png",
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
      image: "/images/fleet/BELL505.png",
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
      image: "/images/fleet/407.png",
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
      image: "/images/fleet/BELLLONG.png",
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
      image: "/images/fleet/B3E.png",
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
      image: "/images/fleet/B58.png",
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
      image: "/images/fleet/C210.png",
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
      image: "/images/fleet/C206.png",
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
      image: "/images/fleet/PA34.png",
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
      image: "/images/fleet/BONANZA.png",
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
      image: "/images/fleet/SR22.png",
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
      image: "/images/fleet/HARVARD.png",
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
    <div className="min-h-screen bg-ag-cream">
      {/* Page Header */}
      <PageHeader title="Southern African fleet" />

      {/* Featured Stats & CTA */}
      <section className="bg-secondary-dark text-hero-text">
        <div className="max-w-7xl mx-auto px-4 py-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="h-full flex items-center">
              <h3 className="text-4xl md:text-5xl font-light font-heading">30+ Vetted Aircraft</h3>
            </div>
          </div>
          <div>
            <div className="h-full flex items-center">
              <p className="text-lg md:text-xl mb-0 font-sans">
              Angel Gabriel accesses a fleet in excess of 30 vetted aircraft, ranging from two-seaters up to three hundred-plus-seat jet airliners, from nine regional hubs spanning from Maun to Cape Town.
            </p>
            </div>
          </div>
          <div className="h-full flex items-center md:justify-end">
          <Link 
            href="/rates-and-quotes"
              className="px-8 py-4 border-2 border-hero-text text-lg font-medium font-sans rounded-md text-hero-text hover:bg-hero-text/10 transition-colors duration-300"
          >
            Request a charter quote
          </Link>
        </div>
        </div>
      </section>

      {/* Fleet Carousel Banner */}
      <div className="w-full overflow-hidden">
        <FleetCarousel />
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Aircraft List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {aircraftList.map((aircraft, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {/* Aircraft Image full width */}
                <img 
                  src={aircraft.image} 
                  alt={aircraft.name} 
                className="object-contain w-full h-auto"
              />
              {/* Content wrapper */}
              <div className="p-4">
                <h3 className="text-xl font-light font-heading text-text-black mb-3">{aircraft.name}</h3>
                <div className="text-sm text-text-black space-y-2 font-sans">
                  {aircraft.specs.map((spec, specIndex) => (
                    <div key={specIndex}>{spec}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <CallToAction href="/rates-and-quotes" linkText="Request a charter quote" />

        {/* Animated Service Collage Section */}
        <div className="mt-20 mb-12">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md max-w-7xl mx-auto">
            <AnimatedServiceCollage />
          </div>
        </div>
      </div>
    </div>
  );
} 