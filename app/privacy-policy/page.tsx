'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPrint, FaDownload, FaSpinner } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PageHeader from '../components/PageHeader';

export default function PrivacyPolicyPage() {
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
      pdf.save('Angel-Gabriel-Aeronautics-Privacy-Policy.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="min-h-screen bg-ag-cream print:bg-white">
      {/* Page Header */}
      <PageHeader title="Privacy Policy" />

      <div className="container mx-auto px-4 py-12 print:py-2">
        {/* Utility buttons positioned above the first card */}
        <div className="flex justify-end items-center mb-4 print:hidden">
          <nav aria-label="Legal Pages Navigation" className="flex space-x-4 mr-8">
            <Link href="/terms" className="text-text-black hover:text-secondary-dark transition-colors font-sans">Terms & Conditions</Link>
            <Link href="/cookie-policy" className="text-text-black hover:text-secondary-dark transition-colors font-sans">Cookie Policy</Link>
          </nav>
          <button 
            onClick={handlePrint} 
            className="bg-white hover:bg-gray-50 text-text-black rounded-md p-2 mr-2 transition-colors shadow-sm font-sans font-medium"
            aria-label="Print privacy policy"
          >
            <FaPrint size={20} />
          </button>
          <button 
            onClick={handleDownloadPdf} 
            disabled={isGeneratingPdf}
            className="bg-black hover:bg-gray-900 text-white rounded-md p-2 transition-colors shadow-sm flex items-center justify-center font-sans font-medium"
            aria-label="Download privacy policy as PDF"
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
            <p className="text-text-black font-medium font-sans">Effective date: November 22, 2019</p>
            
            <p className="font-sans">Angel Gabriel Aeronautics ("us", "we", or "our") operates the www.flyangelgabriel.com website (the "Service").</p>
            
            <p className="font-sans">This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.</p>
            
            <p className="font-sans">We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from www.flyangelgabriel.com</p>
            
            <h2 className="text-2xl font-light font-heading text-text-black mt-8 mb-4">Information Collection And Use</h2>
            <p className="font-sans">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            
            <h3 className="font-light font-heading text-text-black text-xl mt-6 mb-3">Types of Data Collected</h3>
            
            <h4 className="font-light font-heading text-text-black mt-4 mb-2">Personal Data</h4>
            <p className="font-sans">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
            <ul className="list-disc pl-6 mb-4 font-sans">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Cookies and Usage Data</li>
            </ul>
            
            <h4 className="font-light font-heading text-text-black mt-4 mb-2">Usage Data</h4>
            <p className="font-sans">We may also collect information about how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
            
            <h4 className="font-light font-heading text-text-black mt-4 mb-2">Tracking & Cookies Data</h4>
            <p className="font-sans">We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
            
            <p className="font-sans">Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
            
            <p className="font-sans">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
            
            <p className="font-sans">Examples of Cookies we use:</p>
            <ul className="list-disc pl-6 mb-4 font-sans">
              <li><span className="font-medium">Session Cookies.</span> We use Session Cookies to operate our Service.</li>
              <li><span className="font-medium">Preference Cookies.</span> We use Preference Cookies to remember your preferences and various settings.</li>
              <li><span className="font-medium">Security Cookies.</span> We use Security Cookies for security purposes.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-8 mb-10 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 print:shadow-none print:p-4 print:mb-4 font-sans">
            <h3 className="font-light font-heading text-text-black text-xl mt-0 mb-3">Use of Data</h3>
            <p className="font-sans">Angel Gabriel Aeronautics uses the collected data for various purposes:</p>
            <ul className="list-disc pl-6 mb-4 font-sans">
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
            
            <h3 className="font-light font-heading text-text-black text-xl mt-6 mb-3">Transfer Of Data</h3>
            <p className="font-sans">Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
            
            <p className="font-sans">If you are located outside South Africa and choose to provide information to us, please note that we transfer the data, including Personal Data, to South Africa and process it there.</p>
            
            <p className="font-sans">Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
            
            <p className="font-sans">Angel Gabriel Aeronautics will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
            
            <h3 className="font-light font-heading text-text-black text-xl mt-6 mb-3">Disclosure Of Data</h3>
            
            <h4 className="font-light font-heading text-text-black mt-4 mb-2">Legal Requirements</h4>
            <p className="font-sans">Angel Gabriel Aeronautics may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
            <ul className="list-disc pl-6 mb-4 font-sans">
              <li>To comply with a legal obligation</li>
              <li>To protect and defend the rights or property of Angel Gabriel Aeronautics</li>
              <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>To protect the personal safety of users of the Service or the public</li>
              <li>To protect against legal liability</li>
            </ul>
            
            <h3 className="font-light font-heading text-text-black text-xl mt-6 mb-3">Security Of Data</h3>
            <p className="font-sans">The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
            
            <h3 className="font-light font-heading text-text-black text-xl mt-6 mb-3">Service Providers</h3>
            <p className="font-sans">We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
            <p className="font-sans">These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
          </div>
          
          <div className="bg-white rounded-lg p-8 mb-10 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 print:shadow-none print:p-4 print:mb-4 font-sans">
            <h3 className="font-light font-heading text-text-black text-xl mt-0 mb-3">Links To Other Sites</h3>
            <p className="font-sans">Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
            <p className="font-sans">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
            
            <h3 className="font-light font-heading text-text-black text-xl mt-6 mb-3">Children's Privacy</h3>
            <p className="font-sans">Our Service does not address anyone under the age of 18 ("Children").</p>
            <p className="font-sans">We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
            
            <h3 className="font-light font-heading text-text-black text-xl mt-6 mb-3">Changes To This Privacy Policy</h3>
            <p className="font-sans">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            <p className="font-sans">We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
            <p className="font-sans">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            
            <h3 className="font-light font-heading text-text-black text-xl mt-6 mb-3">Contact Us</h3>
            <p className="font-sans">If you have any questions about this Privacy Policy, please contact us:</p>
            <p className="font-medium font-sans">info@angelgabriel.co.za</p>
          </div>
        </motion.div>

        {/* Navigation links between legal pages */}
        <nav aria-label="Legal Pages Navigation" className="max-w-7xl mx-auto mt-8 mb-8 text-right">
          <Link href="/terms" className="mx-4 text-text-black hover:text-secondary-dark transition-colors font-sans">Terms & Conditions</Link>
          <Link href="/cookie-policy" className="mx-4 text-text-black hover:text-secondary-dark transition-colors font-sans">Cookie Policy</Link>
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
  );
} 