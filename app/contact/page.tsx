'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';
import QuoteRequestForm from '../components/QuoteRequestForm';
import Image from 'next/image';
import MapEmbed from '../components/MapEmbed';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);
  const [newsletterSubmitMessage, setNewsletterSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitMessage({ type: 'success', text: 'Your message has been sent successfully!' });
        setFormData({ firstName: '', lastName: '', email: '', message: '' }); // Reset form
      } else {
        setSubmitMessage({ type: 'error', text: result.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsNewsletterSubmitting(true);
    setNewsletterSubmitMessage(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setNewsletterSubmitMessage({ type: 'success', text: 'Successfully subscribed to newsletter!' });
        setNewsletterEmail('');
      } else {
        setNewsletterSubmitMessage({ type: 'error', text: result.error || 'Failed to subscribe. Please try again.' });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setNewsletterSubmitMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-ag-cream">
      {/* Page Header */}
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for charter quotes, flight operations, and general inquiries."
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <p className="text-lg font-medium text-secondary-dark font-sans">+27 (10) 500 8335</p>
              <p className="text-text-black font-sans">Monday – Friday</p>
              <p className="text-text-black font-sans mb-4">09h00 CAT – 17h00 CAT</p>
              
              <h4 className="text-lg font-light font-heading text-text-black">Flight Operations & Emergencies:</h4>
              <p className="text-lg font-medium text-secondary-dark font-sans">+44 (0) 779 772 4386</p>
              
              <div className="mt-4">
                <h4 className="text-lg font-light font-heading text-text-black">WHATSAPP</h4>
                <p className="text-lg font-medium text-secondary-dark font-sans">+44 (0) 779 772 4386</p>
              </div>
              
              <p className="text-text-black font-sans mt-4 italic">
                The emergency OPS number is manned 24/7 365.
              </p>
              <p className="text-text-black font-sans italic">
                Please ONLY use this number for flight operations-related issues and emergencies
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-light font-heading text-text-black mb-3">Email Contacts</h3>
              <ul className="space-y-2">
                <li><span className="font-medium font-sans">General Enquiries:</span> <a href="mailto:info@angelgabriel.co.za" className="text-secondary-dark hover:underline font-sans">info@angelgabriel.co.za</a></li>
                <li><span className="font-medium font-sans">Charter Quotes:</span> <a href="mailto:quotes@angelgabriel.co.za" className="text-secondary-dark hover:underline font-sans">quotes@angelgabriel.co.za</a></li>
                <li><span className="font-medium font-sans">Air Taxi Reservations:</span> <a href="mailto:bookings@angelgabriel.co.za" className="text-secondary-dark hover:underline font-sans">bookings@angelgabriel.co.za</a></li>
                <li><span className="font-medium font-sans">Flight Operations & Planning:</span> <a href="mailto:ops@angelgabriel.co.za" className="text-secondary-dark hover:underline font-sans">ops@angelgabriel.co.za</a></li>
                <li><span className="font-medium font-sans">Accounting & Billing:</span> <a href="mailto:accounts@angelgabriel.co.za" className="text-secondary-dark hover:underline font-sans">accounts@angelgabriel.co.za</a></li>
                <li><span className="font-medium font-sans">Complaints, Compliments or Suggestions:</span> <a href="mailto:customercare@angelgabriel.co.za" className="text-secondary-dark hover:underline font-sans">customercare@angelgabriel.co.za</a></li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-light font-heading text-text-black mb-3">AFTER HOURS</h3>
              <p className="text-text-black font-sans">
                Emails are manned during office hours, please make use of the emergency operations number for URGENT matters outside of office hours.
              </p>
              <p className="text-text-black font-sans mt-2">
                Reservations & sales departments are open during office hours; Monday-Friday 09h00 CAT – 17h00 CAT
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-light font-heading text-text-black mb-3">Address</h3>
              <p className="text-text-black font-sans">P.O.Box 198, Cresta, 2118 | Johannesburg | South Africa</p>
              <p className="text-text-black font-sans">
                Office 12, 1st Floor, Terminal Building, Lanseria International Airport, Johannesburg, South Africa, 1748
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-light font-heading text-text-black mb-3">Regional Operations Office</h3>
              <h4 className="text-lg font-light font-heading text-text-black mb-2">South Africa</h4>
              <p className="text-text-black font-sans">Angel Gabriel at Lanseria International Airport</p>
              <div className="mt-6 mb-8 rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/contact/Lanseria-3-555x370.jpg" 
                  alt="Lanseria International Airport facility"
                  width={555} 
                  height={370} 
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="mb-8 rounded-lg overflow-hidden shadow-md">
              <Image 
                src="/images/contact/Radio Stack.jpg" 
                alt="Aircraft radio stack communication panel"
                width={800} // Adjust width as needed, or use fill and a sized parent
                height={650} // Adjust height for aspect ratio, or use fill
                className="w-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-light font-heading text-text-black mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-text-black mb-1 font-sans">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-text-black mb-1 font-sans">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-black mb-1 font-sans">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-black mb-1 font-sans">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm"
                ></textarea>
              </div>
              {/* Submit Message Display */}
              {submitMessage && (
                <div className={`p-3 rounded-md text-sm ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {submitMessage.text}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full justify-center py-4 px-8 border border-transparent shadow-sm text-base font-medium font-sans rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            {/* Google Map Embed - Moved here */}
            <div className="mt-8 mb-12">
              <MapEmbed 
                mapApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
                mapCenterLat={-25.9388}
                mapCenterLng={27.9262}
                markerPositionLat={-25.9388}
                markerPositionLng={27.9262}
                mapZoom={14}
                containerClassName="rounded-lg overflow-hidden shadow-lg"
                mapContainerStyle={{ width: '100%', height: '650px', borderRadius: '0.5rem' }}
              />
            </div>
          </div>
        </div>
        
        {/* Charter Quote Form */}
        <section className="mt-20">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light font-heading text-text-black mb-10 text-center">Request a Charter Quote</h2>
            <div className="p-0 rounded-lg">
              <QuoteRequestForm />
              </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <div className="mt-20 bg-white p-8 rounded-lg shadow-md">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-light font-heading text-text-black mb-4">Subscribe to our newsletter</h2>
            <form onSubmit={handleNewsletterSubmit} className="mt-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <label htmlFor="newsletterEmail" className="sr-only">Email*</label>
                  <input
                    type="email"
                    id="newsletterEmail"
                    name="newsletterEmail"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Email*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm font-sans"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isNewsletterSubmitting}
                  className="px-8 py-4 border border-transparent shadow-sm text-base font-medium font-sans rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  {isNewsletterSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
              {/* Newsletter Submit Message Display */}
              {newsletterSubmitMessage && (
                <div className={`mt-3 p-3 rounded-md text-sm ${
                  newsletterSubmitMessage.type === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {newsletterSubmitMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 