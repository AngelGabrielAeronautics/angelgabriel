'use client';

import { useState } from 'react';
import { 
  FaArrowRight, 
  FaExchangeAlt, 
  FaRoute, 
  FaPlane, 
  FaDollarSign, 
  FaCompress, 
  FaFighterJet, 
  FaHandshake, 
  FaUtensils, 
  FaShuttleVan, 
  FaShieldAlt 
} from 'react-icons/fa';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  routingType: 'oneWay' | 'return' | 'multiDestination';
  fromLocation: string;
  toLocation: string;
  passengers: string;
  aircraft: {
    mostEconomical: boolean;
    pressurised: boolean;
    twinEngine: boolean;
  };
  boltOns: {
    meetAndGreet: boolean;
    fullMeal: boolean;
    airportShuttle: boolean;
    security: boolean;
  };
  notes: string;
  subscribe: boolean;
};

export default function QuoteRequestForm({ 
  initialOpen = true,
  isAccordion = false,
  className = '', 
}: { 
  initialOpen?: boolean; 
  isAccordion?: boolean;
  className?: string; 
}) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    routingType: 'oneWay',
    fromLocation: '',
    toLocation: '',
    passengers: '',
    aircraft: {
      mostEconomical: false,
      pressurised: false,
      twinEngine: false,
    },
    boltOns: {
      meetAndGreet: false,
      fullMeal: false,
      airportShuttle: false,
      security: false,
    },
    notes: '',
    subscribe: false,
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    if (name.includes('.')) {
      // Handle nested properties (aircraft or boltOns)
      const [parent, child] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof Pick<FormData, 'aircraft' | 'boltOns'>],
          [child]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // In a real app, you would send this data to your API
      console.log('Form data submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage({
        type: 'success',
        text: 'Your quote request has been submitted successfully. We will contact you shortly.',
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        routingType: 'oneWay',
        fromLocation: '',
        toLocation: '',
        passengers: '',
        aircraft: {
          mostEconomical: false,
          pressurised: false,
          twinEngine: false,
        },
        boltOns: {
          meetAndGreet: false,
          fullMeal: false,
          airportShuttle: false,
          security: false,
        },
        notes: '',
        subscribe: false,
      });
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'There was an error submitting your request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-10 bg-white px-8 py-8 rounded-md shadow-sm">
      {/* Booker Section */}
      <div className="pb-6 border-b border-gray-100">
        <h3 className="text-xl font-light mb-4 text-ag-text flex items-center">
          <span className="h-7 w-7 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3">1</span>
          Booker
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-1">
              First name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName"
              value={formData.firstName}
              onChange={handleTextChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm" 
              required 
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600 mb-1">
              Last name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName"
              value={formData.lastName}
              onChange={handleTextChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm" 
              required 
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="md:w-1/2">
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleTextChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm" 
              required 
            />
          </div>
        </div>
      </div>
      
      {/* Routing Section */}
      <div className="pb-6 border-b border-gray-100">
        <h3 className="text-xl font-light mb-4 text-ag-text flex items-center">
          <span className="h-7 w-7 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3">2</span>
          Routing <span className="text-red-500 ml-1">*</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-gray-50 p-4 rounded-md">
          <div className="flex items-center">
            <input 
              type="radio" 
              id="oneWay" 
              name="routingType" 
              value="oneWay" 
              checked={formData.routingType === 'oneWay'}
              onChange={handleRadioChange}
              className="h-4 w-4 text-black focus:ring-black border-gray-300" 
            />
            <label htmlFor="oneWay" className="ml-2 flex items-center text-sm text-gray-700 font-medium">
              <FaArrowRight className="mr-1 text-gray-500 text-lg" />
              One way
            </label>
          </div>
          <div className="flex items-center">
            <input 
              type="radio" 
              id="return" 
              name="routingType" 
              value="return" 
              checked={formData.routingType === 'return'}
              onChange={handleRadioChange}
              className="h-4 w-4 text-black focus:ring-black border-gray-300" 
            />
            <label htmlFor="return" className="ml-2 flex items-center text-sm text-gray-700 font-medium">
              <FaExchangeAlt className="mr-1 text-gray-500 text-lg" />
              Return
            </label>
          </div>
          <div className="flex items-center">
            <input 
              type="radio" 
              id="multiDestination" 
              name="routingType" 
              value="multiDestination" 
              checked={formData.routingType === 'multiDestination'}
              onChange={handleRadioChange}
              className="h-4 w-4 text-black focus:ring-black border-gray-300" 
            />
            <label htmlFor="multiDestination" className="ml-2 flex items-center text-sm text-gray-700 font-medium">
              <FaRoute className="mr-1 text-gray-500 text-lg" />
              Multi-destination
            </label>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="fromLocation" className="block text-sm font-medium text-gray-600 mb-1">
              From <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="fromLocation" 
              name="fromLocation"
              value={formData.fromLocation}
              onChange={handleTextChange}
              placeholder="e.g. Johannesburg, OR Tambo"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm" 
              required 
            />
          </div>
          <div>
            <label htmlFor="toLocation" className="block text-sm font-medium text-gray-600 mb-1">
              To <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="toLocation" 
              name="toLocation"
              value={formData.toLocation}
              onChange={handleTextChange}
              placeholder="e.g. Cape Town International"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm" 
              required 
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="passengers" className="block text-sm font-medium text-gray-600 mb-1">
            Number of passengers <span className="text-red-500">*</span>
          </label>
          <div className="md:w-1/2">
            <input 
              type="number" 
              id="passengers" 
              name="passengers"
              value={formData.passengers}
              onChange={handleTextChange}
              min="1" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm" 
              required 
            />
          </div>
        </div>
      </div>
      
      {/* Aircraft Section */}
      <div className="pb-6 border-b border-gray-100">
        <h3 className="text-xl font-light mb-4 text-ag-text flex items-center">
          <span className="h-7 w-7 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3">3</span>
          Aircraft
        </h3>
        <p className="text-sm text-gray-500 mb-4 italic">Select your aircraft preferences (optional)</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-md">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="mostEconomical" 
              name="aircraft.mostEconomical"
              checked={formData.aircraft.mostEconomical}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-black focus:ring-black rounded border-gray-300" 
            />
            <label htmlFor="mostEconomical" className="ml-2 flex items-center text-sm text-gray-700 font-medium">
              <FaDollarSign className="mr-1 text-gray-500 text-lg" />
              Most economical
            </label>
          </div>
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="pressurised" 
              name="aircraft.pressurised"
              checked={formData.aircraft.pressurised}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-black focus:ring-black rounded border-gray-300" 
            />
            <label htmlFor="pressurised" className="ml-2 flex items-center text-sm text-gray-700 font-medium">
              <FaCompress className="mr-1 text-gray-500 text-lg" />
              Pressurised
            </label>
          </div>
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="twinEngine" 
              name="aircraft.twinEngine"
              checked={formData.aircraft.twinEngine}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-black focus:ring-black rounded border-gray-300" 
            />
            <label htmlFor="twinEngine" className="ml-2 flex items-center text-sm text-gray-700 font-medium">
              <FaFighterJet className="mr-1 text-gray-500 text-lg" />
              Twin engine
            </label>
          </div>
        </div>
      </div>
      
      {/* Bolt-ons Section */}
      <div className="pb-6 border-b border-gray-100">
        <h3 className="text-xl font-light mb-4 text-ag-text flex items-center">
          <span className="h-7 w-7 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3">4</span>
          Bolt-ons
        </h3>
        <p className="text-sm text-gray-500 mb-4 italic">Select any additional services you may require (optional)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md">
          <div className="flex items-center p-2 hover:bg-white transition-colors duration-200 rounded">
            <input 
              type="checkbox" 
              id="meetAndGreet" 
              name="boltOns.meetAndGreet"
              checked={formData.boltOns.meetAndGreet}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-black focus:ring-black rounded border-gray-300" 
            />
            <label htmlFor="meetAndGreet" className="ml-2 flex items-center text-sm text-gray-700 font-medium">
              <FaHandshake className="mr-1 text-gray-500 text-lg" />
              Meet and greet off connecting flight
            </label>
          </div>
          <div className="flex items-center p-2 hover:bg-white transition-colors duration-200 rounded">
            <input 
              type="checkbox" 
              id="airportShuttle" 
              name="boltOns.airportShuttle"
              checked={formData.boltOns.airportShuttle}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-black focus:ring-black rounded border-gray-300" 
            />
            <label htmlFor="airportShuttle" className="ml-2 flex items-center text-sm text-gray-700 font-medium">
              <FaShuttleVan className="mr-1 text-gray-500 text-lg" />
              Airport / hotel shuttle
            </label>
          </div>
          <div className="flex items-center p-2 hover:bg-white transition-colors duration-200 rounded">
            <input 
              type="checkbox" 
              id="fullMeal" 
              name="boltOns.fullMeal"
              checked={formData.boltOns.fullMeal}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-black focus:ring-black rounded border-gray-300" 
            />
            <label htmlFor="fullMeal" className="ml-2 flex items-center text-sm text-gray-700 font-medium">
              <FaUtensils className="mr-1 text-gray-500 text-lg" />
              Full in flight meal
            </label>
          </div>
          <div className="flex items-center p-2 hover:bg-white transition-colors duration-200 rounded">
            <input 
              type="checkbox" 
              id="security" 
              name="boltOns.security"
              checked={formData.boltOns.security}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-black focus:ring-black rounded border-gray-300" 
            />
            <label htmlFor="security" className="ml-2 flex items-center text-sm text-gray-700 font-medium">
              <FaShieldAlt className="mr-1 text-gray-500 text-lg" />
              Personal security CPO
            </label>
          </div>
        </div>
      </div>
      
      {/* Notes / Comments Section */}
      <div className="pb-6 border-b border-gray-100">
        <h3 className="text-xl font-light mb-4 text-ag-text flex items-center">
          <span className="h-7 w-7 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3">5</span>
          Notes / comments
        </h3>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleTextChange}
          rows={4}
          placeholder="Please include any special requirements or additional information that would be helpful..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm"
        ></textarea>
      </div>
      
      {/* Subscription Checkbox */}
      <div className="flex items-center bg-gray-50 p-4 rounded-md">
        <input 
          type="checkbox" 
          id="subscribe" 
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleCheckboxChange} 
          className="h-5 w-5 text-black focus:ring-black rounded border-gray-300" 
        />
        <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-700">
          Yes, subscribe me to receive news and special offers from Angel Gabriel Aeronautics
        </label>
      </div>
      
      {/* Status Message */}
      {submitMessage && (
        <div 
          className={`p-4 rounded-md ${
            submitMessage.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          <div className="flex">
            <div className="flex-shrink-0">
              {submitMessage.type === 'success' ? (
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{submitMessage.text}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-ag-button-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-300 shadow-sm"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : 'Request a quote'}
      </button>
    </form>
  );

  if (isAccordion) {
    return (
      <div className={`overflow-hidden rounded-lg shadow-lg ${className}`}>
        {/* Accordion Header */}
        <button
          className="w-full p-6 text-left flex justify-between items-center bg-white border-b border-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-2xl font-light text-gray-800 font-heading">
            Request a charter quote
          </h2>
          <svg 
            className={`w-6 h-6 transform transition-transform duration-300 text-gray-600 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Accordion Content */}
        <div 
          className={`transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {formContent}
    </div>
  );
} 