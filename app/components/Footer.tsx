'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import QuoteBanner from './QuoteBanner';
import toast from 'react-hot-toast';

export default function Footer() {
  const [contactFormData, setContactFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isContactSubmitting, setIsContactSubmitting] = useState(false);

  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [isSubscribeSubmitting, setIsSubscribeSubmitting] = useState(false);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactFormData),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Your message has been sent successfully!');
        setContactFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Footer contact form submission error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsContactSubmitting(false);
    }
  };

  const handleSubscribeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribeSubmitting(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: subscribeEmail }),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Successfully subscribed to newsletter!');
        setSubscribeEmail('');
      } else {
        toast.error(result.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Footer newsletter subscription error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubscribeSubmitting(false);
    }
  };

  return (
    <footer className="bg-black text-hero-text pt-12 pb-6 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white text-text-black rounded-lg overflow-hidden">
            <div className="relative h-60 w-full">
              <Image
                src="/images/services/Flying Safaris.jpg"
                alt="Charter Aircraft"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-light font-heading text-text-black mb-2">
                Exploring the Wild: Why Chartering an Aircraft with Angel Gabriel is Safer and Faster than Driving
              </h3>
              <Link href="/blog/exploring-the-wild" className="text-text-black hover:text-secondary-dark font-medium font-sans">
                Read More
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#5d5b5a] p-6 rounded-lg">
            <h3 className="text-xl font-light font-heading text-hero-text mb-4">Contact us</h3>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm mb-1 font-sans font-medium text-hero-text">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={contactFormData.firstName}
                  onChange={handleContactChange}
                  className="w-full px-3 py-2 text-text-black bg-white border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black font-sans"
                  placeholder="First name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm mb-1 font-sans font-medium text-hero-text">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={contactFormData.lastName}
                  onChange={handleContactChange}
                  className="w-full px-3 py-2 text-text-black bg-white border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black font-sans"
                  placeholder="Last name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm mb-1 font-sans font-medium text-hero-text">Email <span className="text-red-400">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactFormData.email}
                  onChange={handleContactChange}
                  required
                  className="w-full px-3 py-2 text-text-black bg-white border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black font-sans"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm mb-1 font-sans font-medium text-hero-text">Message <span className="text-red-400">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={contactFormData.message}
                  onChange={handleContactChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 text-text-black bg-white border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black font-sans"
                  placeholder="Message"
                />
              </div>
              <button
                type="submit"
                disabled={isContactSubmitting}
                className="px-8 py-4 border-2 border-black text-black font-sans font-medium rounded-md hover:bg-gray-100 transition-colors duration-300 float-right"
              >
                {isContactSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-[#5d5b5a] p-6 rounded-lg">
            <h3 className="text-xl font-light font-heading text-hero-text mb-4">Subscribe to our newsletter</h3>
            <form onSubmit={handleSubscribeSubmit}>
              <div className="mb-4">
                <label htmlFor="subscribeEmail" className="block text-sm mb-1 font-sans font-medium text-hero-text">Email <span className="text-red-400">*</span></label>
                <input
                  type="email"
                  id="subscribeEmail"
                  name="subscribeEmail"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-text-black bg-white border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black font-sans"
                  placeholder="Email"
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribeSubmitting}
                className="w-full px-8 py-4 border-2 border-black text-black font-sans font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                {isSubscribeSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>

        {/* Company & Social Section */}
        <div className="bg-ag-black text-ag-cream p-8 rounded-lg my-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <p className="mb-4 text-xl text-justify font-sans">
                  Welcome to Angel Gabriel, your trusted air charter provider since 2013. We specialise in lodge transfer flights and private charters across Southern Africa and Botswana, offering unparalleled service, safety, and convenience. Whether you're travelling for business or leisure, our experienced team is committed to delivering seamless, personalised aviation solutions. At Angel Gabriel, we're dedicated to making every journey as memorable as the destinations we fly you to.
                </p>
                <div className="flex space-x-6">
                  <a href="https://www.facebook.com/AngelGabrielAeronautics" className="text-text-black hover:text-secondary-dark transition-colors" aria-label="Facebook">
                    <FaFacebook size={28} />
                  </a>
                  <a href="https://x.com/AngelGabrielAir" className="text-text-black hover:text-secondary-dark transition-colors" aria-label="X (formerly Twitter)">
                    <FaXTwitter size={28} />
                  </a>
                  <a href="https://www.instagram.com/angel_gabriel_air" className="text-text-black hover:text-secondary-dark transition-colors" aria-label="Instagram">
                    <FaInstagram size={28} />
                  </a>
                  <a href="https://www.youtube.com/user/AngelGabrielAero" className="text-text-black hover:text-secondary-dark transition-colors" aria-label="YouTube">
                    <FaYoutube size={28} />
                  </a>
                  <a href="https://www.linkedin.com/company/angel-gabriel-aeronautics/" className="text-text-black hover:text-secondary-dark transition-colors" aria-label="LinkedIn">
                    <FaLinkedin size={28} />
                  </a>
                  <a href="https://za.pinterest.com/angelgabrielaeronautics" className="text-text-black hover:text-secondary-dark transition-colors" aria-label="Pinterest">
                    <FaPinterest size={28} />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <QuoteBanner
                  backgroundSrc="/images/rates-and-quotes/caravan-rates.jpg"
                  altText="Charter aircraft over sunset"
                  title="Fly Private, Fly Angel Gabriel"
                  subtitle="Experience personalized luxury and efficiency."
                  ctaText="Request a charter quote"
                  ctaHref="/rates-and-quotes"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t bg-black pt-6 pb-4">
          <ul className="flex justify-center space-x-8 mb-4">
            <li><Link href="/" className="text-gray-300 hover:text-hero-text transition-colors font-sans">Home</Link></li>
            <li><Link href="/rates-and-quotes" className="text-gray-300 hover:text-hero-text transition-colors font-sans">Rates & Quotes</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:text-hero-text transition-colors font-sans">Contact</Link></li>
            <li><Link href="/links" className="text-gray-300 hover:text-hero-text transition-colors font-sans">Links</Link></li>
            <li><Link href="/terms" className="text-gray-300 hover:text-hero-text transition-colors font-sans">Legal</Link></li>
            <li><Link href="/blog" className="text-gray-300 hover:text-hero-text transition-colors font-sans">Blog</Link></li>
          </ul>
          <div className="text-center text-slate-400 text-sm font-sans">
            <p>&copy; {new Date().getFullYear()} Angel Gabriel Aeronautics. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 