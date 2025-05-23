'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CallToAction from '../components/CallToAction';
import { FaPrint, FaDownload, FaSpinner } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PageHeader from '../components/PageHeader';

export default function TermsPage() {
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
      pdf.save('Angel-Gabriel-Aeronautics-Terms-and-Conditions.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="min-h-screen bg-ag-cream print:bg-white">
      {/* Page Header */}
      <PageHeader title="Terms & Conditions" />

      <div className="container mx-auto px-4 py-12 print:py-2">
        {/* Utility buttons positioned above the first card */}
        <div className="flex justify-end items-center mb-4 print:hidden">
          <nav aria-label="Legal Pages Navigation" className="flex space-x-4 mr-8">
            <Link href="/cookie-policy" className="text-text-black hover:text-secondary-dark transition-colors font-sans">Cookie Policy</Link>
            <Link href="/privacy-policy" className="text-text-black hover:text-secondary-dark transition-colors font-sans">Privacy Policy</Link>
          </nav>
          <button 
            onClick={handlePrint} 
            className="bg-white hover:bg-gray-50 text-text-black rounded-md p-2 mr-2 transition-colors shadow-sm font-sans font-medium"
            aria-label="Print terms and conditions"
          >
            <FaPrint size={20} />
          </button>
          <button 
            onClick={handleDownloadPdf} 
            disabled={isGeneratingPdf}
            className="bg-black hover:bg-gray-900 text-white rounded-md p-2 transition-colors shadow-sm flex items-center justify-center font-sans font-medium"
            aria-label="Download terms and conditions as PDF"
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
          {/* Terms in Short Card */}
          <div className="bg-white rounded-lg p-10 mb-10 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 print:shadow-none print:p-4 print:mb-4 font-sans">
            <h2 className="text-2xl font-light font-heading text-text-black mb-6">TERMS IN SHORT</h2>
            
            <h3 className="font-light font-heading text-text-black text-xl mb-3">BOOKING TERMS:</h3>
            <p className="font-sans">Quotes are valid for 7 days, thereafter a requote may be necessary.</p>
            <p className="font-sans">Invoices are valid for 7 days from issue. Should payment be received outside of this timeframe a rate adjustment may be necessary.</p>
            <p className="font-sans">The quoted aircraft will be held for up to 7 days from quoting. Thereafter should the aircraft be allocated to a different flight; a replacement aircraft cannot be guaranteed.</p>
            
            <h3 className="font-light font-heading text-text-black text-xl mt-6 mb-3">ACCEPTANCE:</h3>
            <p className="font-sans">Only on receipt of a signed quotation will a booking be concluded and moved from provisional status to confirmed. An invoice will be issued on receipt of a signed quotation.</p>
            <p className="font-sans">It is important that the agreed expiration timeframes be adhered to:</p>
            <ul className="list-disc pl-6 mb-4 font-sans">
              <li>Quotations are valid for 7 days.</li>
              <li>A binding deposit or full payment must be received within 7 days of invoice.</li>
            </ul>
            
            <h3 className="font-light font-heading text-text-black text-xl mt-6 mb-3">PAYMENT TERMS:</h3>
            
            <h4 className="font-light font-heading text-text-black mb-2">Payment Option 1</h4>
            <p className="font-sans">0% deposit in advance - the booking will remain as provisional until a deposit is received. A requote will be necessary. Aircraft availability cannot be guaranteed.</p>
            
            <h4 className="font-light font-heading text-text-black mt-4 mb-2">Payment Option 2</h4>
            <p className="font-sans">50% deposit in advance with the balance no later than 7 days prior to the flight secures the aircraft but does not fix the quoted rate. A requote at the time of the flight may be necessary with the balance payable. Aircraft availability is guaranteed.</p>
            
            <h4 className="font-light font-heading text-text-black mt-4 mb-2">Payment Option 3</h4>
            <p className="font-sans">100% payment in advance secures the aircraft and protects the the invoiced rate from the current global fuel fluctuations by up to 15%. Aircraft availability is guaranteed.</p>
            
            <p className="mt-4 font-medium font-sans">Strictly no flights will be operated on credit and without the full amount having reflected prior to the flight.</p>
            
            <h3 className="font-light font-heading text-text-black text-xl mt-6 mb-3">CANCELLATION TERMS:</h3>
            <ul className="list-disc pl-6 mb-4 font-sans">
              <li>30% cancellation fee if cancelled (30 - 15) days prior to the flight</li>
              <li>50% cancellation fee if cancelled (14 days - 73hrs) prior to the flight</li>
              <li>100% cancellation fee if cancelled less than (72hrs) prior to the flight</li>
            </ul>
          </div>

          {/* Main Terms Card */}
          <div className="bg-white rounded-lg p-8 mb-10 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 print:shadow-none print:p-4 print:mb-4 font-sans">
            <h2 className="text-3xl font-light font-heading text-text-black text-center mb-6">ANGEL GABRIEL AERONAUTICS<br />TERMS AND CONDITIONS</h2>
            
            <p className="font-medium font-sans">ACCEPTANCE:</p>
            <p className="font-sans">By being in possession of an Angel Gabriel e-ticket you accept the terms and conditions herein. Any willingness to reject the outlined terms and conditions must be brought to Angel Gabriel Aeronautics attention in writing no later than 72 hours prior to the flight.</p>
            
            <p className="font-medium font-sans mt-6">UNDERSTANDING:</p>
            <p className="font-sans">Angel Gabriel flights are charter flights, brokered by Angel Gabriel Aeronautics and are NOT scheduled flights.</p>
            
            <p className="font-medium font-sans mt-6">AIR TAXIS:</p>
            <p className="font-sans">Air Taxis are not scheduled services; therefore, times and routes may vary, and are dependant on the flight planning of each individual flight. Angel Gabriel will inform the lodge of your expected arrival/departure time.</p>
            
            <p className="font-medium font-sans mt-6">AIR TAXI BOOKING WINDOW:</p>
            <p className="font-sans">Bookings on taxi routes closes 72 hours prior to the flight. Any booking made within 72 hours of the flight will be dealt with on an ad hoc basis, and will be subject to aircraft, as well as crew availability. A charter option may be necessary should an appropriate taxi aircraft not be available.</p>
            
            <p className="font-medium font-sans mt-6">CHARTER FLIGHT BOOKING WINDOW:</p>
            <p className="font-sans">There is no minimum booking window period for a charter, however, all charters will be subject to aircraft as well as crew availability.</p>
            
            <p className="font-medium font-sans mt-6">CREDIT:</p>
            <p className="font-sans">Under no circumstances will any flight be operated on credit, or on part payment. Angel Gabriel has a strict 'No pay, no fly' Policy.</p>
            
            <p className="font-medium font-sans mt-6">AIR TAXI PAYMENTS:</p>
            <p className="font-sans">Full payment is required no later than 14 days prior to the flight. Under no circumstances will e-tickets be issued without payment in full. Bookings will be automatically cancelled 7 days prior to the flight, should full payment have not reflected by this time. Any bookings made within 14 days of the flight will require full payment at time of booking.</p>
            
            <p className="font-medium font-sans mt-6">CHARTER PAYMENTS:</p>
            <p className="font-sans">All charters strictly require a 50% deposit at the time of acceptance to secure the aircraft. The balance being due no later than 14 days prior to the flight. Full payment is due on receipt of invoice - unless alternate written arrangements have been agreed to. Bookings will be automatically cancelled 7 days prior to the flight, should full payment have not reflected by this time. Any bookings made within 14 days of the flight will require full payment at time of booking.</p>
            
            <p className="font-medium font-sans mt-6">CURRENCIES:</p>
            <p className="font-sans">Invoices raised in USD display an exact ZAR amount automatically generated at the time of invoice. The ZAR, as well as the exchange used will appear on the USD invoice. Payments in either USD or ZAR (as per the amount reflected on the invoice) will be accepted.</p>
            
            <p className="font-medium font-sans mt-6">CANCELLATION POLICY:</p>
            <p className="font-sans">30% cancellation fee if cancelled (30-15) days prior to the flight</p>
            <p className="font-sans">50% cancellation fee if cancelled (14 days – 73hrs) prior to the flight</p>
            <p className="font-sans">100% cancellation fee if cancelled less than (72hrs) prior to the flight</p>
            
            <p className="font-medium font-sans mt-6">REFUNDS:</p>
            <p className="font-sans">Any refunds issued by Angel Gabriel will only be actioned no sooner than 14 working days after the funds have reflected in our account. Foreign currency refunds can only be actioned once all the necessary recipient information has been received. This is a condition set out by the South African Reserve Bank.</p>
            
            <p className="font-medium font-sans mt-6">FLIGHT DATE AMENDMENTS:</p>
            <p className="font-sans">Any amendments to a flight date, and or passenger quantity, and or cargo requirement, as previously confirmed - are strictly subject to aircraft availability, crew availability, where necessary over border flight clearance, and border post times of operation. For charters a re-quote may be necessary. In the unfortunate event that the requested amendments cannot be accommodated, for whatever reason, and the client opts not to travel and /or opts to decline a re-quote - then the original flight will be considered to be cancelled - standard cancellation fees will then apply.</p>
            
            <p className="font-medium font-sans mt-6">REQUIRED PERSONAL INFORMATION:</p>
            <p className="font-sans">Passengers full names, (as per passport), passport number (for over border flights), as well as gender (for weight and balance calculations) must be supplied for issuing of e-tickets. Angel Gabriel will not be responsible for failing to adequately communicate with passengers should we not receive sufficient and valid contact information.</p>
            
            <p className="font-medium font-sans mt-6">BOARDING:</p>
            <p className="font-sans">No passenger shall be permitted to board an aircraft, who is not in possession of a valid e-ticket. Proof of identity may be required at check in.</p>
            
            <p className="font-medium font-sans mt-6">PERSONAL WEIGHTS:</p>
            <p className="font-sans">Our aircraft are extremely weight sensitive. We make use of Civil Aviation standards in calculating passenger weights. Male = 104Kg [229lb] Female = 86Kg [190lb]. It is for this reason that persons weighing more than 160kg [353lb] must inform reservations of their weight, at time of booking, allowing for sufficient time for planning.</p>
            
            <p className="font-medium font-sans mt-6">CHILDREN:</p>
            <p className="font-sans">Children under two years of age may (by law) share a seat with an accompanying adult. Children older than two years of age must, (by law), occupy their own seat. Unaccompanied minors must be cleared with Angel Gabriel with prior notice. Aviation law considers children over the age of 12 years to be adults.</p>
            
            <p className="font-medium font-sans mt-6">LUGGAGE RESTRICTIONS:</p>
            <p className="font-sans">Our aircraft are weight sensitive and have limited baggage compartments. For safety reasons our aircraft have a strict weight threshold that by law may NOT be exceeded. Overweight luggage or hard cases unable to fit in the baggage compartment may need to be excluded from the flight. Each passenger may carry a total of 15 kilograms [33lb] of luggage + 6kg [13lb] carry-on, (strictly soft bags only!) The onus falls to the booking agent to inform passengers of the luggage requirements. Should an additional allowance (cargo seat) be needed, kindly request additional baggage allowances from our sales office, at the time of booking. An additional charge is levied for cargo seats and or excess luggage.</p>
            
            <p className="font-medium font-sans mt-6">LUGGAGE RESTRICTIONS NON-COMPLIANCE:</p>
            <p className="font-sans">In the event that a passenger willingly or unwillingly fails to comply with the strict luggage restrictions as clearly outlined above, as well as on their e-tickets, Angel Gabriel reserves the right to deny any hard bags or excess luggage onto the flight. As described in the paragraph above "Luggage Restrictions", this is in line with legal safety limitations set out by Civil Aviation, as well as the aircraft manufacturer. The onus falls to the booking agent to inform passengers of the luggage requirements. For non-compliant passengers departing from Lanseria, Angel Gabriel may be able to assist with excess baggage storage at our offices located in the Lanseria terminal building - and or with the loan of soft duffel bags. Passengers returning to Lanseria will be reunited with their stored luggage on their return. For passengers not returning back to Lanseria it is the responsibility of the passenger and or their respective agent to make the necessary arrangements for their stored luggage to be collected from our storage facility during office hours, and with prior arrangement, and notification in writing. For passengers not returning to Lanseria, stored luggage can only be released once our loan duffel bags have been returned (in the same good condition), failing either event it will be necessary for the passenger to purchase the loaned bag(s).</p>
            
            <p className="font-medium font-sans mt-6">LUGGAGE STORAGE:</p>
            <p className="font-sans">We offer a secure, complimentary baggage storage service to all our passengers. Stored luggage is sealed with a serial numbered, non-reusable security lock. For passengers not returning back to Lanseria it is the responsibility of the passenger and or their respective agent to make the necessary arrangements for their stored luggage to be collected from our storage facility - during office hours, and with prior arrangement, and notification in writing. Baggage will be stored for a period no longer than six months, thereafter unclaimed baggage will be donated to charity.</p>
            
            <p className="font-medium font-sans mt-6">GROUPS:</p>
            <p className="font-sans">For large groups more than one aircraft may be necessary due to strip constraints. In this event, Angel Gabriel will endeavour to keep groups/families together on the same aircraft, whenever operationally possible, but unfortunately this cannot be guaranteed.</p>
            
            <p className="font-medium font-sans mt-6">TECHNICAL STOPS:</p>
            <p className="font-sans">Technical stop may be deemed necessary due to unforeseen flight conditions. The safety of our passengers, and crew is our utmost priority, and any technical stop is at the discretion of the captain.</p>
            
            <p className="font-medium font-sans mt-6">CONTINGENCIES & CANCELLED FLIGHTS:</p>
            <p className="font-sans">Many of the air-fields we operate out of are unmanned. Operations in and out of unmanned fields require, (by law), a visual landing and approach during day light. Should this not be possible due to poor visibility or low cloud base conditions, flights may be diverted to an alternate airport. Gravel run-ways may be muddy after rains, and unsuitable for safe landing, even in clear sky conditions. If the crew deem the conditions to be unsafe, and or outside of legal limits, the flight will need to be cancelled. In this event, the agent will be the first to be notified. At this time the agent may opt to arrange a road transfer. Alternatively, Angel Gabriel can arrange a road transfer with our preferred supplier (subject to vehicle availability). For passengers/agents making their own road transfer arrangements, a 100% refund will be issued. For those making use of Angel Gabriel's road transfer, a refund less the cost of the road transfer will be issued.</p>
            
            <p className="font-medium font-sans mt-6">DELAYS:</p>
            <p className="font-sans">We caution any passengers with connecting flights to the risks of unavoidable potential delays, as a result of poor weather conditions, animals on the bush strip, available landing slots, customs related delays, and aircraft technical issues. A reasonable time allowance should be considered by the passenger and worked into their own itinerary. Angel Gabriel is NOT responsible for costs or inconvenience caused as a result of any passenger failing to make a connecting flight.</p>
            
            <p className="font-medium font-sans mt-6">THIRD PARTY SUPPLIERS:</p>
            <p className="font-sans">For every flight Angel Gabriel has no choice but to rely on the services of third-party suppliers. Namely, the airports we fly to/from, their appointed fuel suppliers, their respective airport handlers, security personnel, as well as government customs and immigration officials. These entities are consistently the weakest link in our service offering, and by their design, remove operational control from Angel Gabriel. Despite our best efforts to manage these obligatory third parties, common and recurring complaints by our passengers' stem from ineptitude and poor customer attitude when interacting with third party suppliers.</p>
            
            <p className="font-medium font-sans mt-6">COMPLAINTS & COMPLIMENTS:</p>
            <p className="font-sans">We urge all our passengers to make use of our dedicated emergency contact number (+27 (0) 66 009 9819, stated on all e-tickets) to bring any issues to our offices attention immediately, and at the time of the problem, so that we may be given the best opportunity to be involved in any dispute. Matters brought to our attention after the fact, leave us with little to no ability to assist or remedy. Kindly address all concerns to customercare@angelgabriel.co.za</p>
          </div>
          
          {/* Operator Terms Card */}
          <div className="bg-white rounded-lg p-8 mb-10 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 print:shadow-none print:p-4 print:mb-4 font-sans">
            <h2 className="text-2xl font-light font-heading text-text-black mt-0 mb-6">TERMS AND CONDITIONS AS THE AIRCRAFT OPERATOR AND LICENCE HOLDER</h2>
            
            <p className="font-medium font-sans mt-6">BROKERAGE:</p>
            <p className="font-sans">You acknowledge that the carriage covered by any flight will not be performed by Angel Gabriel Aeronautics itself, and that Angel Gabriel Aeronautics will be acting on behalf of an undisclosed or unnamed principal carrier. You hereby exercise any and all contractual rights of election which may arise on your part as a result of the aforesaid in favour of any such principal and hereby waive any and all contractual and delictual claims against Angel Gabriel Aeronautics arising from or as a result of such carriage performed other than by Angel Gabriel Aeronautics.</p>
            
            <p className="font-medium font-sans mt-6">DELAYS AND UNFORESEEN COSTS:</p>
            <p className="font-sans">The operator shall not be liable for any damages you and/or your passengers may suffer arising from delays as a result of compliance with the requirements of international law or national legislation or subordinate legislation, you or your passengers' changed requirements, unserviceability of the aircraft beyond the operator's reasonable control, safety of the aircraft and/or its crew or passengers, any additional costs arising from such changes and/or delays (excluding the cost of repairing the aircraft, but including the cost of arranging an alternative aircraft) shall become payable by you in addition to the quoted price. If the departure of a flight is delayed for technical reasons, passenger expenses as deemed reasonable by the operator shall be the responsibility of the operator.</p>
            
            <p className="font-medium font-sans mt-6">SMOKING:</p>
            <p className="font-sans">Smoking is not permitted on-board flights, including e-cigarettes.</p>
            
            <p className="font-medium font-sans mt-6">DANGEROUS GOODS:</p>
            <p className="font-sans">Dangerous goods must be declared as per dangerous goods regulations. Goods must be packaged and marked correctly according to the appropriate authorities. Copies of the relevant regulations are available on request.</p>
            
            <p className="font-medium font-sans mt-6">OVERFLIGHT AND LANDING PERMISSIONS:</p>
            <p className="font-sans">The operator shall apply for and endeavour to procure the grant of all approvals, licences and permits required by the Republic of South Africa and of any foreign state over, to or from which the aircraft is to be flown for the performance of the flights, but the performance of the flights shall be conditional to the timely grant of and validity of such approvals, licences and permits. You warrant that you will comply with all conditions of such approvals, licences or permits to be observed or performed by it and will procure such compliance on the part of all passengers and owners or other persons having any interest in goods to be carried in the aircraft on the flights.</p>
            
            <p className="font-medium font-sans mt-6">GOVERNING LAW:</p>
            <p className="font-sans">The agreement between the operator and yourself shall be governed and construed in terms of the laws of the Republic of South Africa, and both you and the operator submit to the exclusive jurisdiction of the South African legal systems.</p>
            
            <p className="font-medium font-sans mt-6">NO VARIATION:</p>
            <p className="font-sans">Should any terms of this document be at variance with any charter; aircraft operations management; air transport; operations services; or charter agency agreement already concluded and signed between yourself and/or your passengers and Angel Gabriel Aeronautics, the latter shall prevail over these terms.</p>
            
            <p className="font-medium font-sans mt-6">CLAIMS:</p>
            <p className="font-sans">In the case of a domestic carriage, claims by you or your passengers arising from injury or death shall be brought within 2 years of the flight. In the event of lost or damaged baggage, claims against the operator shall be brought in writing within 7 days of the end of the flight, failing which the claim shall lapse.</p>
            
            <p className="font-medium font-sans mt-6">REGULATORY AND SAFETY COMPLIANCE:</p>
            <p className="font-sans">The aircraft shall be used only in compliance with the laws and with the lawful directions of the relevant public authorities of the Republic of South Africa and of any other state over, to or from which the aircraft is flown. The Charterer shall comply with and procure that all passengers and owners or other persons having any interest in goods carried in the aircraft shall comply with all relevant customs, immigration, police, public health and other lawful regulations. The operator represents and warrants that all manufacturer mandatory modifications relating to the aircraft are complete, that the aircraft complies with the airworthiness requirements of the country of registry, is airworthy and will be so maintained during the currency of the agreement between the operator and the charterer. The operator warrants that the aircraft is fit for the purpose for which it is being chartered and undertakes to comply with all international and national safety rules and regulations that may apply to the operation of its equipment. The operator shall ensure that the aircraft meets all technical, maintenance and equipment standards to conduct required operations in a safe manner. The operator warrants that the aircraft's crew are qualified, competent and fully licensed in conformity with applicable national and international air laws and regulations and are suitably experienced for the required operations. All pertinent Air Operating Certificates, Certificates of Insurance as well as Safety and Security Protocol documents are available for download at: www.flyangelgabriel.com</p>
            
            <p className="font-medium font-sans mt-6">ENTRY REQUIREMENTS:</p>
            <p className="font-sans">You acknowledge that all applicable health, exit, entry, tax, visa, customs and other legal and statutory formalities to be complied with by aircraft passengers are not the responsibility of the operator.</p>
          </div>
        </motion.div>

        {/* Navigation links between legal pages */}
        <nav aria-label="Legal Pages Navigation" className="max-w-7xl mx-auto mt-8 mb-8 text-right">
          <Link href="/cookie-policy" className="mx-4 text-text-black hover:text-secondary-dark transition-colors font-sans">Cookie Policy</Link>
          <Link href="/privacy-policy" className="mx-4 text-text-black hover:text-secondary-dark transition-colors font-sans">Privacy Policy</Link>
        </nav>

        {/* CTA Section */}
        <CallToAction />
      </div>
    </div>
  );
} 