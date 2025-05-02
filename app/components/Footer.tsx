'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const [contactFormData, setContactFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [subscribeEmail, setSubscribeEmail] = useState('');

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Contact form data:', contactFormData);
    // Reset form
    setContactFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe email:', subscribeEmail);
    // Reset form
    setSubscribeEmail('');
  };

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white text-gray-800 rounded-lg overflow-hidden">
            <div className="relative h-60 w-full">
              <Image
                src="/images/services/Flying Safaris.jpg"
                alt="Charter Aircraft"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-light mb-2">
                Exploring the Wild: Why Chartering an Aircraft with Angel Gabriel is Safer and Faster than Driving
              </h3>
              <Link href="/blog/exploring-the-wild" className="text-gray-800 hover:text-gray-600 font-medium">
                Read More
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-ag-secondary-dark p-6 rounded-lg">
            <h3 className="text-xl font-light mb-4">Contact us</h3>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm mb-1">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={contactFormData.firstName}
                  onChange={handleContactChange}
                  className="w-full px-3 py-2 text-gray-700 rounded-md"
                  placeholder="First name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm mb-1">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={contactFormData.lastName}
                  onChange={handleContactChange}
                  className="w-full px-3 py-2 text-gray-700 rounded-md"
                  placeholder="Last name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm mb-1">Email <span className="text-red-400">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactFormData.email}
                  onChange={handleContactChange}
                  required
                  className="w-full px-3 py-2 text-gray-700 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm mb-1">Message <span className="text-red-400">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={contactFormData.message}
                  onChange={handleContactChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 text-gray-700 rounded-md"
                  placeholder="Message"
                />
              </div>
              <button
                type="submit"
                className="bg-ag-secondary-dark hover:bg-ag-button-hover text-white px-4 py-2 rounded-md float-right border border-ag-cream"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-ag-secondary-dark p-6 rounded-lg">
            <h3 className="text-xl font-light mb-4">Subscribe to our newsletter</h3>
            <form onSubmit={handleSubscribeSubmit}>
              <div className="mb-4">
                <label htmlFor="subscribeEmail" className="block text-sm mb-1">Email <span className="text-red-400">*</span></label>
                <input
                  type="email"
                  id="subscribeEmail"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-gray-700 rounded-md"
                  placeholder="Email"
                />
              </div>
              <button
                type="submit"
                className="bg-ag-secondary-dark hover:bg-ag-button-hover text-white px-4 py-2 rounded-md w-full border border-ag-cream"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Company Description */}
        <div className="text-center max-w-7xl mx-auto mb-10">
          <p className="mb-4 text-xl text-justify">
            Welcome to Angel Gabriel, your trusted air charter provider since 2013. We specialise in lodge transfer flights and private charters across Southern Africa and Botswana, offering unparalleled service, safety, and convenience. Whether you're travelling for business or leisure, our experienced team is committed to delivering seamless, personalised aviation solutions. At Angel Gabriel, we're dedicated to making every journey as memorable as the destinations we fly you to.
          </p>
          <div className="mt-8">
            <Link
              href="/rates-and-quotes"
              className="inline-block bg-black hover:bg-ag-button-hover text-white px-6 py-3 rounded-md transition-colors border border-ag-cream"
            >
              Request a charter quote
            </Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.facebook.com/AngelGabrielAeronautics" className="text-white hover:text-ag-cream transition-colors" aria-label="Facebook">
            <FaFacebook size={28} />
          </a>
          <a href="https://x.com/AngelGabrielAir" className="text-white hover:text-ag-cream transition-colors" aria-label="X (formerly Twitter)">
            <FaXTwitter size={28} />
          </a>
          <a href="https://www.instagram.com/angel_gabriel_air" className="text-white hover:text-ag-cream transition-colors" aria-label="Instagram">
            <FaInstagram size={28} />
          </a>
          <a href="https://www.youtube.com/user/AngelGabrielAero" className="text-white hover:text-ag-cream transition-colors" aria-label="YouTube">
            <FaYoutube size={28} />
          </a>
          <a href="https://www.linkedin.com/company/angel-gabriel-aeronautics/" className="text-white hover:text-ag-cream transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={28} />
          </a>
          <a href="https://za.pinterest.com/angelgabrielaeronautics" className="text-white hover:text-ag-cream transition-colors" aria-label="Pinterest">
            <FaPinterest size={28} />
          </a>
        </div>

        {/* Footer Navigation */}
        <div className="border-t bg-black pt-6 pb-4">
          <ul className="flex justify-center space-x-8 mb-4">
            <li><Link href="/" className="text-gray-300 hover:text-ag-cream transition-colors">Home</Link></li>
            <li><Link href="/rates-and-quotes" className="text-gray-300 hover:text-ag-cream transition-colors">Rates & Quotes</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:text-ag-cream transition-colors">Contact</Link></li>
            <li><Link href="/links" className="text-gray-300 hover:text-ag-cream transition-colors">Links</Link></li>
            <li><Link href="/terms" className="text-gray-300 hover:text-ag-cream transition-colors">Legal</Link></li>
            <li><Link href="/blog" className="text-gray-300 hover:text-ag-cream transition-colors">Blog</Link></li>
          </ul>
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Angel Gabriel Aeronautics. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 