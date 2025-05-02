import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Angel Gabriel Aeronautics',
  description: 'Contact Angel Gabriel Aeronautics for charter quotes, flight operations, and general inquiries. Our team is ready to assist you.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Get in touch with our team for charter quotes, flight operations, and general inquiries.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Request a charter quote</h3>
              <p className="text-lg font-bold text-blue-600">+27 (10) 500 8335</p>
              <p className="text-gray-600">Monday-Friday</p>
              <p className="text-gray-600 mb-4">09h00 CAT – 17h00 CAT</p>
              
              <h4 className="font-semibold">Flight Operations & Emergencies:</h4>
              <p className="text-lg font-bold text-blue-600">+44 (0) 779 772 4386</p>
              
              <div className="mt-4">
                <h4 className="font-semibold">WHATSAPP</h4>
                <p className="text-lg font-bold text-blue-600">+44 (0) 779 772 4386</p>
              </div>
              
              <p className="text-gray-700 mt-4 italic">
                The emergency OPS number is manned 24/7 365.
              </p>
              <p className="text-gray-700 italic">
                Please ONLY use this number for flight operations-related issues and emergencies
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Email Contacts</h3>
              <ul className="space-y-2">
                <li><span className="font-medium">General Enquiries:</span> <a href="mailto:info@angelgabriel.co.za" className="text-blue-600 hover:underline">info@angelgabriel.co.za</a></li>
                <li><span className="font-medium">Charter Quotes:</span> <a href="mailto:quotes@angelgabriel.co.za" className="text-blue-600 hover:underline">quotes@angelgabriel.co.za</a></li>
                <li><span className="font-medium">Air Taxi Reservations:</span> <a href="mailto:bookings@angelgabriel.co.za" className="text-blue-600 hover:underline">bookings@angelgabriel.co.za</a></li>
                <li><span className="font-medium">Flight Operations & Planning:</span> <a href="mailto:ops@angelgabriel.co.za" className="text-blue-600 hover:underline">ops@angelgabriel.co.za</a></li>
                <li><span className="font-medium">Accounting & Billing:</span> <a href="mailto:accounts@angelgabriel.co.za" className="text-blue-600 hover:underline">accounts@angelgabriel.co.za</a></li>
                <li><span className="font-medium">Complaints, Compliments or Suggestions:</span> <a href="mailto:customercare@angelgabriel.co.za" className="text-blue-600 hover:underline">customercare@angelgabriel.co.za</a></li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">AFTER HOURS</h3>
              <p className="text-gray-700">
                Emails are manned during office hours, please make use of the emergency operations number for URGENT matters outside of office hours.
              </p>
              <p className="text-gray-700 mt-2">
                Reservations & sales departments are open during office hours; Monday-Friday 09h00 CAT – 17h00 CAT
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Address</h3>
              <p className="text-gray-700">P.O.Box 198, Cresta, 2118 | Johannesburg | South Africa</p>
              <p className="text-gray-700">
                Office 12, 1st Floor, Terminal Building, Lanseria International Airport, Johannesburg, South Africa, 1748
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Regional Operations Office</h3>
              <h4 className="font-semibold mb-2">South Africa</h4>
              <p className="text-gray-700">Angel Gabriel at Lanseria International Airport</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        
        {/* Charter Quote Form */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Request a Charter Quote</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <form className="space-y-8">
              {/* Booker Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Booker</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="bookFirstName" className="block text-sm font-medium text-gray-700 mb-1">First name (Required)</label>
                    <input
                      type="text"
                      id="bookFirstName"
                      name="bookFirstName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="bookLastName" className="block text-sm font-medium text-gray-700 mb-1">Last name (Required)</label>
                    <input
                      type="text"
                      id="bookLastName"
                      name="bookLastName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="bookEmail" className="block text-sm font-medium text-gray-700 mb-1">Email (Required)</label>
                    <input
                      type="email"
                      id="bookEmail"
                      name="bookEmail"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              
              {/* Routing Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Routing (Required)</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="routingType" value="oneWay" className="form-radio h-4 w-4 text-blue-600" />
                    <span className="ml-2">One way</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="routingType" value="return" className="form-radio h-4 w-4 text-blue-600" />
                    <span className="ml-2">Return</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="routingType" value="multi" className="form-radio h-4 w-4 text-blue-600" />
                    <span className="ml-2">Multi-destination</span>
                  </label>
                </div>
                <div>
                  <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">Number of passengers (Required)</label>
                  <input
                    type="number"
                    id="passengers"
                    name="passengers"
                    min="1"
                    required
                    className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              {/* Aircraft Preferences */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Aircraft</h3>
                <label className="block text-sm font-medium text-gray-700 mb-1">Aircraft preferences</label>
                <div className="flex flex-wrap gap-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="aircraftPreference" value="economical" className="form-checkbox h-4 w-4 text-blue-600" />
                    <span className="ml-2">Most economical</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="aircraftPreference" value="pressurised" className="form-checkbox h-4 w-4 text-blue-600" />
                    <span className="ml-2">Pressurised</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="aircraftPreference" value="twinEngine" className="form-checkbox h-4 w-4 text-blue-600" />
                    <span className="ml-2">Twin engine</span>
                  </label>
                </div>
              </div>
              
              {/* Bolt-ons */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bolt-ons</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="boltOns" value="meetGreet" className="form-checkbox h-4 w-4 text-blue-600" />
                    <span className="ml-2">Meet and greet off connecting flight</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="boltOns" value="shuttle" className="form-checkbox h-4 w-4 text-blue-600" />
                    <span className="ml-2">Airport / hotel shuttle</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="boltOns" value="meal" className="form-checkbox h-4 w-4 text-blue-600" />
                    <span className="ml-2">Full in flight meal</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="boltOns" value="security" className="form-checkbox h-4 w-4 text-blue-600" />
                    <span className="ml-2">Personal security CPO</span>
                  </label>
                </div>
              </div>
              
              {/* Notes & Comments */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Notes / comments</h3>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              {/* Subscribe & Submit */}
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" name="subscribe" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="ml-2">Yes, subscribe me</span>
                </label>
              </div>
              
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Request a quote
              </button>
            </form>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-20 bg-blue-50 p-8 rounded-lg">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to our newsletter</h2>
            <form className="mt-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
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
                  className="px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Company Info */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-700">
            Welcome to Angel Gabriel, your trusted air charter provider since 2013. We specialise in lodge transfer flights 
            and private charters across Southern Africa and Botswana, offering unparalleled service, safety, and convenience. 
            Whether you're travelling for business or leisure, our experienced team is committed to delivering seamless, 
            personalised aviation solutions. At Angel Gabriel, we're dedicated to making every journey as memorable as the 
            destinations we fly you to.
          </p>
        </div>
      </div>
    </div>
  );
} 