'use client'
import React from 'react'
import QuoteBanner from './QuoteBanner'
import AnimatedServiceCollage from './AnimatedServiceCollage'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPinterest } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function EmailTemplateQuoteConfirmation() {
  return (
    <div style={{ backgroundColor: '#e9e2cf', padding: '20px', fontFamily: 'Open Sans, sans-serif' }}>
      {/* Email Body */}
      <div style={{ backgroundColor: '#e9e2cf', padding: '20px', fontFamily: 'Open Sans, sans-serif' }}>
        {/* Main email table */}
        <table
          role="presentation"
          width="100%"
          cellPadding="0"
          cellSpacing="0"
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <tbody>
            <tr>
              <td style={{ backgroundColor: '#000000', padding: '20px', textAlign: 'center' }}>
                <h1
                  style={{
                    color: '#e7e0cf',
                    margin: 0,
                    fontSize: '24px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 300,
                  }}
                >
                  Quote Request Confirmation
                </h1>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '20px', color: '#191100', fontSize: '16px' }}>
                <p>Hi {'{{firstName}}'},</p>
                <p>
                  Thank you for requesting a charter quote with Angel Gabriel Aeronautics. We've
                  received your request with the following details:
                </p>
                <ul style={{ marginTop: '8px', marginBottom: '8px' }}>
                  <li><strong>From:</strong> {'{{fromLocation}}'}</li>
                  <li><strong>To:</strong> {'{{toLocation}}'}</li>
                  <li><strong>Date of Travel:</strong> {'{{travelDate}}'}</li>
                  <li><strong>Passengers:</strong> {'{{passengers}}'}</li>
                </ul>
                <p>We will review your request and get back to you soon.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Services Collage Preview */}
      <div className="mt-8 mb-6">
        <div className="relative w-full h-64 max-w-[600px] mx-auto rounded-md overflow-hidden shadow-sm">
          <AnimatedServiceCollage />
        </div>
      </div>

      {/* Quote Banner Preview */}
      <div className="mb-6 mx-auto" style={{ maxWidth: '600px' }}>
        <QuoteBanner
          backgroundSrc="/images/rates-and-quotes/caravan-rates.jpg"
          altText="Charter aircraft over sunset"
          title="Fly Private, Fly Angel Gabriel"
          subtitle="Experience personalized luxury and efficiency."
          ctaText="Request a charter quote"
          ctaHref="/rates-and-quotes"
        />
      </div>

      {/* Social Icons Preview */}
      <div className="flex justify-center space-x-6 mb-8">
        <a href="https://www.facebook.com/AngelGabrielAeronautics" aria-label="Facebook" className="text-text-black hover:text-secondary-dark">
          <FaFacebook size={24} />
        </a>
        <a href="https://x.com/AngelGabrielAir" aria-label="X (formerly Twitter)" className="text-text-black hover:text-secondary-dark">
          <FaXTwitter size={24} />
        </a>
        <a href="https://www.instagram.com/angel_gabriel_air" aria-label="Instagram" className="text-text-black hover:text-secondary-dark">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.youtube.com/user/AngelGabrielAero" aria-label="YouTube" className="text-text-black hover:text-secondary-dark">
          <FaYoutube size={24} />
        </a>
        <a href="https://www.linkedin.com/company/angel-gabriel-aeronautics/" aria-label="LinkedIn" className="text-text-black hover:text-secondary-dark">
          <FaLinkedin size={24} />
        </a>
        <a href="https://za.pinterest.com/angelgabrielaeronautics" aria-label="Pinterest" className="text-text-black hover:text-secondary-dark">
          <FaPinterest size={24} />
        </a>
      </div>

      {/* Unsubscribe Footer Table */}
      <div style={{ textAlign: 'center', padding: '16px', fontSize: '12px', color: '#6b7280' }}>
        <p>
          <a href="{{unsubscribe}}" style={{ color: '#000000', textDecoration: 'underline' }}>
            Unsubscribe
          </a>{' '}
          |{' '}
          <a href="{{unsubscribe_preferences}}" style={{ color: '#000000', textDecoration: 'underline' }}>
            Preferences
          </a>
        </p>
      </div>
    </div>
  )
} 