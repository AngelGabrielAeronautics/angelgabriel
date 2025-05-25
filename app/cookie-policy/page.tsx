'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPrint, FaDownload, FaSpinner } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PageHeader from '../components/PageHeader';
import Head from 'next/head';

export default function CookiePolicyPage() {
  const pageUrl = process.env.SITE_URL + '/cookie-policy';
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  
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

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    if (!contentRef.current) return;
    
    setIsGeneratingPdf(true);
    
    try {
      const content = contentRef.current;
      
      // Create a new jsPDF instance
      const pdf = new jsPDF('portrait', 'mm', 'a4');
      
      // Get the total height of the content
      const contentHeight = content.scrollHeight;
      const a4Height = 297; // A4 height in mm
      const a4Width = 210; // A4 width in mm
      
      // Calculate the number of pages needed
      const pagesNeeded = Math.ceil(contentHeight / (a4Height * 3)); // Approximate scaling
      
      // Capture each section of the content
      for (let i = 0; i < pagesNeeded; i++) {
        // Use html2canvas to capture the content
        const canvas = await html2canvas(content, {
          scale: 2, // Higher scale for better quality
          y: i * (a4Height * 3),
          height: Math.min(a4Height * 3, contentHeight - i * (a4Height * 3)),
        });
        
        // Convert the canvas to an image
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        
        // Add a new page if it's not the first page
        if (i > 0) {
          pdf.addPage();
        }
        
        // Add the image to the PDF
        pdf.addImage(imgData, 'JPEG', 0, 0, a4Width, a4Height, '', 'FAST');
      }
      
      // Save the PDF
      pdf.save('Angel-Gabriel-Aeronautics-Cookie-Policy.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": process.env.SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Cookie Policy", "item": pageUrl }
          ]
        })}} />
      </Head>
      <div className="min-h-screen bg-ag-cream print:bg-white">
        {/* Page Header */}
        <PageHeader title="Cookie Policy" />

        <div className="container mx-auto px-4 py-12 print:py-2">
          {/* Utility buttons positioned above the first card */}
          <div className="flex justify-end items-center mb-4 print:hidden">
            <nav aria-label="Legal Pages Navigation" className="flex space-x-4 mr-8">
              <Link href="/terms" className="text-text-black hover:text-secondary-dark transition-colors font-sans">Terms & Conditions</Link>
              <Link href="/privacy-policy" className="text-text-black hover:text-secondary-dark transition-colors font-sans">Privacy Policy</Link>
            </nav>
            <button 
              onClick={handlePrint} 
              className="bg-white hover:bg-gray-50 text-text-black rounded-md p-2 mr-2 transition-colors shadow-sm font-sans font-medium"
              aria-label="Print cookie policy"
            >
              <FaPrint size={20} />
            </button>
            <button 
              onClick={handleDownloadPdf} 
              disabled={isGeneratingPdf}
              className="bg-black hover:bg-gray-900 text-white rounded-md p-2 transition-colors shadow-sm flex items-center justify-center font-sans font-medium"
              aria-label="Download cookie policy as PDF"
            >
              {isGeneratingPdf ? <FaSpinner className="animate-spin" size={20} /> : <FaDownload size={20} />}
            </button>
          </div>
          
          <motion.div 
            className="prose prose-lg max-w-7xl mx-auto print:max-w-full"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            ref={contentRef}
          >
            <div className="bg-white rounded-lg p-10 mb-10 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 print:shadow-none print:p-4 print:mb-4 font-sans">
              <h2 className="text-2xl font-light font-heading text-text-black mt-0 mb-4">Tracking & Cookies Data</h2>
              
              <p className="font-sans">We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
              
              <p className="font-sans">Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
              
              <p className="font-sans">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
              
              <p className="font-sans">Examples of Cookies we use:</p>
              <ul className="list-disc pl-6 mb-4 font-sans">
                <li><span className="font-medium">Session Cookies.</span> We use Session Cookies to operate our Service.</li>
                <li><span className="font-medium">Preference Cookies.</span> We use Preference Cookies to remember your preferences and various settings.</li>
                <li><span className="font-medium">Security Cookies.</span> We use Security Cookies for security purposes.</li>
              </ul>
              
              <h2 className="text-2xl font-light font-heading text-text-black mt-8 mb-4">How to manage cookies</h2>
              
              <p className="font-sans">Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" className="text-text-black hover:text-secondary-dark transition-colors">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" className="text-text-black hover:text-secondary-dark transition-colors">www.allaboutcookies.org</a>.</p>
              
              <p className="font-sans">Find out how to manage cookies on popular browsers:</p>
              <ul className="list-disc pl-6 mb-4 font-sans">
                <li><a href="https://support.google.com/accounts/answer/61416" className="text-text-black hover:text-secondary-dark transition-colors">Google Chrome</a></li>
                <li><a href="https://support.microsoft.com/help/4468242/microsoft-edge-browsing-data-and-privacy" className="text-text-black hover:text-secondary-dark transition-colors">Microsoft Edge</a></li>
                <li><a href="https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop" className="text-text-black hover:text-secondary-dark transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-text-black hover:text-secondary-dark transition-colors">Microsoft Internet Explorer</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-text-black hover:text-secondary-dark transition-colors">Safari (Desktop)</a></li>
                <li><a href="https://support.apple.com/en-us/HT201265" className="text-text-black hover:text-secondary-dark transition-colors">Safari (Mobile)</a></li>
                <li><a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid" className="text-text-black hover:text-secondary-dark transition-colors">Android Browser</a></li>
              </ul>
              
              <p className="font-sans">To find information relating to other browsers, visit the browser developer's website.</p>
            </div>
            
            <div className="bg-white rounded-lg p-8 mb-10 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 print:shadow-none print:p-4 print:mb-4 font-sans">
              <h2 className="text-2xl font-light font-heading text-text-black mt-0 mb-4">Changes to our Cookie Policy</h2>
              
              <p className="font-sans">We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.</p>
              
              <p className="font-sans">We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Cookie Policy.</p>
              
              <p className="font-sans">You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.</p>
              
              <h2 className="text-2xl font-light font-heading text-text-black mt-8 mb-4">Contact Us</h2>
              
              <p className="font-sans">If you have any questions about this Cookie Policy, please contact us:</p>
              <p className="font-medium font-sans">info@angelgabriel.co.za</p>
            </div>
          </motion.div>

          {/* Navigation links between legal pages */}
          <nav aria-label="Legal Pages Navigation" className="max-w-7xl mx-auto mt-8 mb-8 text-right">
            <Link href="/terms" className="mx-4 text-text-black hover:text-secondary-dark transition-colors font-sans">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="mx-4 text-text-black hover:text-secondary-dark transition-colors font-sans">Privacy Policy</Link>
          </nav>

          {/* CTA Section */}
          <div className="max-w-7xl mx-auto mt-10 mb-20 print:hidden">
            <div className="bg-secondary-dark rounded-lg p-8 text-center">
              <h2 className="text-3xl font-light text-hero-text mb-4 font-heading">Ready to take flight?</h2>
              <p className="text-xl text-hero-text mb-8 font-sans">Experience the comfort and convenience of flying with Angel Gabriel Aeronautics.</p>
              <Link 
                href="/rates-and-quotes"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#e7e0cf] text-lg font-medium font-sans rounded-md text-[#e7e0cf] bg-transparent hover:bg-[#e7e0cf]/10 transition-colors duration-300 md:py-4 md:text-xl md:px-10"
              >
                Request a charter quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 