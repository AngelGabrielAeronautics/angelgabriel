'use client';

import { useState, useEffect } from 'react';
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
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import toast from 'react-hot-toast'

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

/** Parse a YYYY-MM-DD string into a local Date without timezone shifting */
const parseDateString = (value: string): Date => {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
};

/** Format a Date object into a YYYY-MM-DD string */
const formatDateString = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
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
  const [travelDate, setTravelDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
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

  const [additionalRoutes, setAdditionalRoutes] = useState<{ from: string; to: string; date: string }[]>([]);

  const today = new Date();
  const minDate = formatDateString(today); // Today's date in YYYY-MM-DD format
  const maxDate = (() => {
    const temp = new Date();
    temp.setMonth(temp.getMonth() + 18);
    return formatDateString(temp);
  })(); // 18 months from today

  useEffect(() => {
    if (returnDate && travelDate && new Date(returnDate) < new Date(travelDate)) {
      // clear return date to force user re-entry
      setReturnDate('');
    }
  }, [travelDate]);

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

  const handleRoutingTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, routingType: value as 'oneWay' | 'return' | 'multiDestination' }));

    // Reset additional routes when routing type changes
    // Only multiDestination should use additionalRoutes array
    if (value === 'multiDestination') {
      setAdditionalRoutes([
        { from: '', to: '', date: '' }, 
        { from: '', to: '', date: '' }, 
        { from: '', to: '', date: '' }
      ]);
    } else {
      // Clear additional routes for oneWay and return types since they use separate form fields
      setAdditionalRoutes([]);
    }
    
    // Clear travel and return dates when switching routing types to force re-entry
    setTravelDate('');
    setReturnDate('');
  };

  const handleAdditionalRouteChange = (
    idx: number,
    field: string,
    value: string
  ) => {
    setAdditionalRoutes((prev) => {
      const updated = [...prev];
      // update the specific field
      updated[idx] = { ...updated[idx], [field]: value };
      // if the 'to' field changed, auto-fill next 'from'
      if (field === 'to' && idx + 1 < updated.length) {
        updated[idx + 1] = { ...updated[idx + 1], from: value };
      }
      // if a date field changes, clear all subsequent dates to force re-entry
      if (field === 'date') {
        for (let i = idx + 1; i < updated.length; i++) {
          updated[i] = { ...updated[i], date: '' };
        }
      }
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData, travelDate, returnDate, additionalRoutes }),
      });
      const result = await response.json();
      // Handle server error
      if (!response.ok || !result.success) {
        const errMsg = result.error || 'Unknown server error';
        console.error('Quote request failed:', errMsg);
        toast.error(`Error submitting form: ${errMsg}`);
        return;
      }
      // Success path
      toast.success('Your quote request has been submitted successfully!');
      // Reset form fields
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
      setTravelDate('');
      setReturnDate('');
      setAdditionalRoutes([{ from: '', to: '', date: '' }]);
    } catch (error) {
      console.error(error);
      toast.error('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-10 bg-white px-8 py-8 rounded-md shadow-sm">
      {/* Booker Section */}
      <div className="pb-6 border-b border-gray-100">
        <h3 className="text-xl font-light font-heading text-text-black mb-4 flex items-center">
          <span className="h-7 w-7 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3">1</span>
          Booker
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-text-black mb-1 font-sans">
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
            <label htmlFor="lastName" className="block text-sm font-medium text-text-black mb-1 font-sans">
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
          <label htmlFor="email" className="block text-sm font-medium text-text-black mb-1 font-sans">
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
        <h3 className="text-xl font-light font-heading text-text-black mb-4 flex items-center">
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
              onChange={handleRoutingTypeChange}
              className="h-4 w-4 accent-black text-black border-gray-300 focus:ring-2 focus:ring-black focus:border-black" 
            />
            <label htmlFor="oneWay" className="ml-2 flex items-center text-sm text-text-black font-medium font-sans">
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
              onChange={handleRoutingTypeChange}
              className="h-4 w-4 accent-black text-black border-gray-300 focus:ring-2 focus:ring-black focus:border-black" 
            />
            <label htmlFor="return" className="ml-2 flex items-center text-sm text-text-black font-medium font-sans">
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
              onChange={handleRoutingTypeChange}
              className="h-4 w-4 accent-black text-black border-gray-300 focus:ring-2 focus:ring-black focus:border-black" 
            />
            <label htmlFor="multiDestination" className="ml-2 flex items-center text-sm text-text-black font-medium font-sans">
              <FaRoute className="mr-1 text-gray-500 text-lg" />
              Multi-destination
            </label>
          </div>
        </div>
        
        {/* Additional Fields for One Way */}
        {formData.routingType === 'oneWay' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="fromLocation" className="block text-sm font-medium text-text-black mb-1 font-sans">
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
              <label htmlFor="toLocation" className="block text-sm font-medium text-text-black mb-1 font-sans">
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
            <div className="mb-6 relative overflow-visible">
              <label htmlFor="oneWayDate" className="block text-sm font-medium text-text-black mb-1 font-sans">
                Date of Travel <span className="text-red-500">*</span>
              </label>
              <ReactDatePicker
                key={`travel-${formData.routingType}`}
                selected={travelDate ? parseDateString(travelDate) : null}
                onChange={(d: Date | null) => setTravelDate(d ? formatDateString(d) : '')}
                minDate={parseDateString(minDate)}
                maxDate={parseDateString(maxDate)}
                dateFormat="dd/MM/yyyy"
                className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm"
                placeholderText="dd/mm/yyyy"
                shouldCloseOnSelect={true}
                closeOnScroll={true}
                required 
              />
            </div>
            {/* Add Passenger input here for oneWay */} 
            <div className="mt-6 md:col-span-2">
              <label htmlFor="passengers" className="block text-sm font-medium text-text-black mb-1 font-sans">
                Number of Passengers <span className="text-red-500">*</span>
              </label>
              <input 
                type="number" 
                id="passengers" 
                name="passengers"
                value={formData.passengers}
                onChange={handleTextChange}
                min="1"
                max="50"
                placeholder="e.g. 4"
                className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm"
                required 
              />
            </div>
          </div>
        )}

        {/* Return Flight Fields (same as one-way plus return date) */}
        {formData.routingType === 'return' && (
          <>
            {/* From & To inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
                <label htmlFor="fromLocation" className="block text-sm font-medium text-text-black mb-1 font-sans">
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
                <label htmlFor="toLocation" className="block text-sm font-medium text-text-black mb-1 font-sans">
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
            {/* Date of Travel picker */}
            <div className="mb-6 relative overflow-visible">
              <label htmlFor="travelDate" className="block text-sm font-medium text-text-black mb-1 font-sans">
                Date of Travel <span className="text-red-500">*</span>
              </label>
              <ReactDatePicker
                key={`travel-${formData.routingType}`}
                selected={travelDate ? parseDateString(travelDate) : null}
                onChange={(d: Date | null) => setTravelDate(d ? formatDateString(d) : '')}
                minDate={parseDateString(minDate)}
                maxDate={parseDateString(maxDate)}
                dateFormat="dd/MM/yyyy"
                className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm"
                placeholderText="dd/mm/yyyy"
                shouldCloseOnSelect={true}
                closeOnScroll={true}
                required 
              />
            </div>
            {/* Return Date picker */}
            <div className="mb-6 relative overflow-visible">
              <label htmlFor="returnDate" className="block text-sm font-medium text-text-black mb-1 font-sans">
                Return Date <span className="text-red-500">*</span>
              </label>
              <ReactDatePicker
                key={`return-${formData.routingType}-${returnDate}`}
                selected={returnDate ? parseDateString(returnDate) : null}
                onChange={(d: Date | null) => setReturnDate(d ? formatDateString(d) : '')}
                minDate={travelDate ? parseDateString(travelDate) : parseDateString(minDate)}
                maxDate={parseDateString(maxDate)}
                dateFormat="dd/MM/yyyy"
                className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm"
                placeholderText="dd/mm/yyyy"
                shouldCloseOnSelect={true}
                closeOnScroll={true}
                required 
              />
            </div>
            {/* Add Passenger input here for return */}
            <div className="mt-6 md:col-span-2">
              <label htmlFor="passengers" className="block text-sm font-medium text-text-black mb-1 font-sans">
                Number of Passengers <span className="text-red-500">*</span>
              </label>
              <input 
                type="number" 
                id="passengers" 
                name="passengers"
                value={formData.passengers}
                onChange={handleTextChange}
                min="1"
                max="50"
                placeholder="e.g. 4"
                className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm"
                required 
              />
            </div>
          </>
        )}

        {/* Additional Fields for Multi-Destination */}
        {formData.routingType === 'multiDestination' && (
          <>
            {additionalRoutes.map((route, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor={`multiFromLocation${index}`} className="block text-sm font-medium text-text-black mb-1 font-sans">
                    From <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id={`multiFromLocation${index}`} 
                    name={`multiFromLocation${index}`}
                    value={route.from}
                    onChange={(e) => handleAdditionalRouteChange(index, 'from', e.target.value)}
                    placeholder="e.g. Johannesburg, OR Tambo"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor={`multiToLocation${index}`} className="block text-sm font-medium text-text-black mb-1 font-sans">
                    To <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id={`multiToLocation${index}`} 
                    name={`multiToLocation${index}`}
                    value={route.to}
                    onChange={(e) => handleAdditionalRouteChange(index, 'to', e.target.value)}
                    placeholder="e.g. Cape Town International"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm" 
                    required 
                  />
                </div>
                {/* Date of Travel picker */}
                <div>
                  <label htmlFor={`multiDate${index}`} className="block text-sm font-medium text-text-black mb-1 font-sans">
                    Date of Travel <span className="text-red-500">*</span>
                  </label>
                  <ReactDatePicker
                    key={`multi-${index}-${formData.routingType}-${route.date}`}
                    selected={route.date ? parseDateString(route.date) : null}
                    onChange={(d: Date | null) => handleAdditionalRouteChange(index, 'date', d ? formatDateString(d) : '')}
                    minDate={
                      index > 0 && additionalRoutes[index - 1].date
                        ? parseDateString(additionalRoutes[index - 1].date)
                        : parseDateString(minDate)
                    }
                    maxDate={parseDateString(maxDate)}
                    dateFormat="dd/MM/yyyy"
                    className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm"
                    placeholderText="dd/mm/yyyy"
                    shouldCloseOnSelect={true}
                    closeOnScroll={true}
                    required 
                  />
                </div>
              </div>
            ))}
            {/* Add Passenger input here for multiDestination */}
            <div className="mt-6">
              <label htmlFor="passengers" className="block text-sm font-medium text-text-black mb-1 font-sans">
                Number of Passengers <span className="text-red-500">*</span>
              </label>
              <input 
                type="number" 
                id="passengers" 
                name="passengers"
                value={formData.passengers}
                onChange={handleTextChange}
                min="1"
                max="50"
                placeholder="e.g. 4"
                className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm"
                required 
              />
            </div>
          </> 
        )}
      </div>
      
      {/* Aircraft Section */}
      <div className="pb-6 border-b border-gray-100">
        <h3 className="text-xl font-light font-heading text-text-black mb-4 flex items-center">
          <span className="h-7 w-7 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3">3</span>
          Aircraft
        </h3>
        <p className="text-sm text-slate-500 mb-4 italic font-sans">Select your aircraft preferences (optional)</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-md">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="mostEconomical" 
              name="aircraft.mostEconomical"
              checked={formData.aircraft.mostEconomical}
              onChange={handleCheckboxChange}
              className="h-4 w-4 accent-black text-black rounded border-gray-300 focus:ring-2 focus:ring-black focus:border-black" 
            />
            <label htmlFor="mostEconomical" className="ml-2 flex items-center text-sm text-text-black font-medium font-sans">
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
              className="h-4 w-4 accent-black text-black rounded border-gray-300 focus:ring-2 focus:ring-black focus:border-black" 
            />
            <label htmlFor="pressurised" className="ml-2 flex items-center text-sm text-text-black font-medium font-sans">
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
              className="h-4 w-4 accent-black text-black rounded border-gray-300 focus:ring-2 focus:ring-black focus:border-black" 
            />
            <label htmlFor="twinEngine" className="ml-2 flex items-center text-sm text-text-black font-medium font-sans">
              <FaFighterJet className="mr-1 text-gray-500 text-lg" />
              Twin engine
            </label>
          </div>
        </div>
      </div>
      
      {/* Bolt-ons Section */}
      <div className="pb-6 border-b border-gray-100">
        <h3 className="text-xl font-light font-heading text-text-black mb-4 flex items-center">
          <span className="h-7 w-7 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3">4</span>
          Bolt-ons
        </h3>
        <p className="text-sm text-slate-500 mb-4 italic font-sans">Select any additional services you may require (optional)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md">
          <div className="flex items-center p-2 hover:bg-white transition-colors duration-200 rounded">
            <input 
              type="checkbox" 
              id="meetAndGreet" 
              name="boltOns.meetAndGreet"
              checked={formData.boltOns.meetAndGreet}
              onChange={handleCheckboxChange}
              className="h-4 w-4 accent-black text-black rounded border-gray-300 focus:ring-2 focus:ring-black focus:border-black" 
            />
            <label htmlFor="meetAndGreet" className="ml-2 flex items-center text-sm text-text-black font-medium font-sans">
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
              className="h-4 w-4 accent-black text-black rounded border-gray-300 focus:ring-2 focus:ring-black focus:border-black" 
            />
            <label htmlFor="airportShuttle" className="ml-2 flex items-center text-sm text-text-black font-medium font-sans">
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
              className="h-4 w-4 accent-black text-black rounded border-gray-300 focus:ring-2 focus:ring-black focus:border-black" 
            />
            <label htmlFor="fullMeal" className="ml-2 flex items-center text-sm text-text-black font-medium font-sans">
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
              className="h-4 w-4 accent-black text-black rounded border-gray-300 focus:ring-2 focus:ring-black focus:border-black" 
            />
            <label htmlFor="security" className="ml-2 flex items-center text-sm text-text-black font-medium font-sans">
              <FaShieldAlt className="mr-1 text-gray-500 text-lg" />
              Personal security CPO
            </label>
          </div>
        </div>
      </div>
      
      {/* Notes / Comments Section */}
      <div className="pb-6 border-b border-gray-100">
        <h3 className="text-xl font-light font-heading text-text-black mb-4 flex items-center">
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
          className="h-5 w-5 accent-black text-black rounded border-gray-300 focus:ring-2 focus:ring-black focus:border-black" 
        />
        <label htmlFor="subscribe" className="ml-2 block text-sm text-text-black font-medium font-sans">
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
        className="w-full px-8 py-4 border border-transparent text-base font-medium font-sans rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-300 shadow-sm"
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
          <h2 className="text-2xl font-light font-heading text-text-black">
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