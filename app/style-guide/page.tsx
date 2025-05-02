'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'

export default function StyleGuidePage() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  }
  
  return (
    <motion.div 
      className="min-h-screen bg-ag-cream"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Page Header */}
      <PageHeader 
        title="Style Guide" 
        subtitle="A comprehensive guide to our design system" 
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-ag-secondary-dark text-white p-6 rounded-lg mb-8">
            <h2 className="text-xl font-light mb-2">IMPORTANT: Single Source of Truth</h2>
            <p>
              This style guide serves as the single source of truth for all design decisions across the Angel Gabriel Aeronautics website. 
              All pages, components, and design elements must strictly adhere to the standards defined in this document.
            </p>
          </div>
          
          <p className="text-lg text-gray-700 mb-6">
            This style guide provides an overview of the visual elements, components, and patterns used throughout the 
            Angel Gabriel Aeronautics website. It ensures consistency and maintains our brand identity across all digital touchpoints.
          </p>
        </div>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 font-heading">Colors</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <div className="h-32 bg-black rounded-t-lg"></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Primary Dark</p>
                <p className="text-sm text-gray-500">bg-black</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#343d3f' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Secondary Dark</p>
                <p className="text-sm text-gray-500">#343d3f</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 bg-ag-cream rounded-t-lg"></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Background Cream</p>
                <p className="text-sm text-gray-500">bg-ag-cream</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#e7e0cf' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Hero Text</p>
                <p className="text-sm text-gray-500">text-[#e7e0cf]</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <div className="flex flex-col">
              <div className="h-32 bg-gray-50 rounded-t-lg"></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Light Gray</p>
                <p className="text-sm text-gray-500">bg-gray-50</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 bg-gray-100 rounded-t-lg"></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Lighter Gray</p>
                <p className="text-sm text-gray-500">bg-gray-100</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#191100' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Text Black</p>
                <p className="text-sm text-gray-500">#191100</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 bg-white rounded-t-lg"></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">White</p>
                <p className="text-sm text-gray-500">bg-white</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 font-heading">Typography</h2>
          
          <div className="space-y-8">
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h1 className="text-6xl md:text-7xl font-light mb-2 font-heading text-gray-800">Heading 1</h1>
              <p className="text-gray-500">text-6xl md:text-7xl font-light font-heading (Montserrat)</p>
              <div className="mt-4 text-gray-600">Used for main page headers</div>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h2 className="text-3xl font-light mb-2 font-heading text-gray-800">Heading 2</h2>
              <p className="text-gray-500">text-3xl font-light font-heading (Montserrat)</p>
              <div className="mt-4 text-gray-600">Used for section headers</div>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h3 className="text-xl font-light mb-2 text-gray-800">
                <span className="h-7 w-7 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3 inline-flex">1</span>
                Section Heading
              </h3>
              <p className="text-gray-500">text-xl font-light with numbered indicator (Montserrat)</p>
              <div className="mt-4 text-gray-600">Used for form section headers</div>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
              <p className="text-lg mb-2 text-gray-700">Body Text</p>
              <p className="text-gray-500">text-lg text-gray-700 (Open Sans)</p>
              <div className="mt-4 text-gray-600">Used for main content</div>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
              <p className="text-sm mb-2 text-gray-600 font-medium">Small Text</p>
              <p className="text-gray-500">text-sm text-gray-600 font-medium (Open Sans)</p>
              <div className="mt-4 text-gray-600">Used for form labels and metadata</div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 font-heading">Buttons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col items-center">
              <button className="px-8 py-4 border border-ag-cream shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-ag-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-300">
                Primary Button
              </button>
              <p className="mt-4 text-gray-500">Used for form submissions and primary actions</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col items-center">
              <button className="px-8 py-3 border-2 border-[#e7e0cf] text-lg font-medium rounded-md text-[#e7e0cf] bg-transparent hover:bg-[#e7e0cf]/10 transition-colors duration-300">
                Hero Button
              </button>
              <p className="mt-4 text-gray-500">Used for hero section CTAs (shown on dark background)</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col items-center">
              <Link href="#" className="text-gray-800 hover:text-ag-secondary-dark font-medium transition-colors">
                Text Link
              </Link>
              <p className="mt-4 text-gray-500">Used for navigation within content</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col items-center">
              <button className="inline-flex items-center px-6 py-2 border border-black rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                Outline Button
              </button>
              <p className="mt-4 text-gray-500">Used for secondary actions</p>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 font-heading">Form Elements</h2>
          
          <div className="bg-white p-8 rounded-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="example-input" className="block text-sm font-medium text-gray-600 mb-1">
                  Text Input <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="example-input"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm"
                  placeholder="Enter text here"
                />
              </div>
              
              <div>
                <label htmlFor="example-number" className="block text-sm font-medium text-gray-600 mb-1">
                  Number Input <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="example-number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm"
                  placeholder="0"
                />
              </div>
            </div>
            
            <div className="mb-8">
              <label htmlFor="example-textarea" className="block text-sm font-medium text-gray-600 mb-1">Textarea</label>
              <textarea
                id="example-textarea"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-4 rounded-md space-y-3">
                <p className="text-sm font-medium text-gray-700 mb-2">Radio Options</p>
                
                <div className="flex items-center">
                  <input
                    id="radio-1"
                    name="radio-group"
                    type="radio"
                    checked
                    className="h-4 w-4 text-black focus:ring-black border-gray-300"
                  />
                  <label htmlFor="radio-1" className="ml-2 block text-sm text-gray-700 font-medium">
                    Option one
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="radio-2"
                    name="radio-group"
                    type="radio"
                    className="h-4 w-4 text-black focus:ring-black border-gray-300"
                  />
                  <label htmlFor="radio-2" className="ml-2 block text-sm text-gray-700 font-medium">
                    Option two
                  </label>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md space-y-3">
                <p className="text-sm font-medium text-gray-700 mb-2">Checkbox Options</p>
                
                <div className="flex items-center p-2 hover:bg-white transition-colors duration-200 rounded">
                  <input
                    id="checkbox-1"
                    type="checkbox"
                    className="h-4 w-4 text-black focus:ring-black rounded border-gray-300"
                  />
                  <label htmlFor="checkbox-1" className="ml-2 block text-sm text-gray-700 font-medium">
                    Checkbox option one
                  </label>
                </div>
                
                <div className="flex items-center p-2 hover:bg-white transition-colors duration-200 rounded">
                  <input
                    id="checkbox-2"
                    type="checkbox"
                    className="h-4 w-4 text-black focus:ring-black rounded border-gray-300"
                  />
                  <label htmlFor="checkbox-2" className="ml-2 block text-sm text-gray-700 font-medium">
                    Checkbox option two
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex items-center bg-gray-50 p-4 rounded-md">
              <input
                id="subscribe-example"
                type="checkbox"
                className="h-5 w-5 text-black focus:ring-black rounded border-gray-300"
              />
              <label htmlFor="subscribe-example" className="ml-2 block text-sm text-gray-700">
                Yes, subscribe me to receive news and special offers
              </label>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 font-heading">Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Image Placeholder</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light mb-2 text-gray-800">Card Title</h3>
                <p className="text-gray-700 mb-4">This is a description for the card. It can contain a brief summary of the content.</p>
                <Link href="#" className="text-gray-800 hover:text-ag-secondary-dark font-medium">Learn more</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-light mb-2 text-gray-800">Text-only Card</h3>
                <p className="text-gray-700 mb-4">This card has no image and only contains text. It's useful for displaying information that doesn't require visual elements.</p>
                <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-ag-secondary-dark transition-colors border border-ag-cream">
                  Action Button
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-light mb-2 text-gray-800">Highlighted Card</h3>
                <p className="text-gray-700 mb-4">This card has a colored background to make it stand out from the other cards. It's useful for emphasizing important information.</p>
                <Link href="#" className="text-gray-800 hover:text-ag-secondary-dark font-medium">See details</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Form Sections Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 font-heading">Form Sections</h2>
          
          <div className="bg-white p-8 rounded-md shadow-sm space-y-10">
            <div className="pb-6 border-b border-gray-100">
              <h3 className="text-xl font-light mb-4 text-gray-800 flex items-center">
                <span className="h-7 w-7 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3">1</span>
                Personal Information
              </h3>
              <p className="text-sm text-gray-500 mb-4 italic">Enter your contact details</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Example Field <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Another Field <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black bg-white shadow-sm" 
                  />
                </div>
              </div>
            </div>
            
            <div className="pb-6 border-b border-gray-100">
              <h3 className="text-xl font-light mb-4 text-gray-800 flex items-center">
                <span className="h-7 w-7 rounded-full bg-black text-white flex items-center justify-center text-sm mr-3">2</span>
                Preferences
              </h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex items-center p-2 hover:bg-white transition-colors duration-200 rounded">
                  <input
                    id="preference-1"
                    type="checkbox"
                    className="h-4 w-4 text-black focus:ring-black rounded border-gray-300"
                  />
                  <label htmlFor="preference-1" className="ml-2 block text-sm text-gray-700 font-medium">
                    Example preference option
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="bg-ag-secondary-dark rounded-lg p-8 text-center">
            <h2 className="text-3xl font-light text-[#e7e0cf] mb-4 font-heading">Ready to take flight?</h2>
            <p className="text-xl text-[#e7e0cf] mb-8">Experience the comfort and convenience of flying with Angel Gabriel Aeronautics.</p>
            <Link 
              href="/quotes"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#e7e0cf] text-lg font-medium rounded-md text-[#e7e0cf] bg-transparent hover:bg-[#e7e0cf]/10 transition-colors duration-300 md:py-4 md:text-xl md:px-10 font-heading"
            >
              Request a charter quote
            </Link>
          </div>
        </section>
        
        {/* Header Components Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 font-heading">Page Headers</h2>
          
          <div className="bg-white p-8 rounded-md shadow-sm space-y-10 mb-8">
            <div>
              <h3 className="text-xl font-light mb-4 text-gray-800">PageHeader Component</h3>
              <p className="text-gray-700 mb-4">
                The PageHeader component should be used at the top of all pages for consistent spacing and styling.
                It provides standard vertical padding (py-24) to ensure a consistent design system across the site.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-md mt-6">
                <div className="bg-ag-cream p-6 rounded-md">
                  <h1 className="text-4xl md:text-5xl font-light text-ag-text-black mb-4 font-heading">Example Page Title</h1>
                  <p className="text-xl text-ag-text-black">Optional page subtitle</p>
                </div>
                
                <div className="bg-gray-100 p-4 mt-4 rounded-md">
                  <pre className="text-sm overflow-auto">
                    {`<PageHeader 
  title="Example Page Title"
  subtitle="Optional page subtitle"
/>`}
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="pb-6 border-b border-gray-100">
              <h3 className="text-xl font-light mb-4 text-gray-800">Usage Guidelines</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use the PageHeader component at the top of all page components</li>
                <li>The title should be short and clear, following the same naming convention as the URL</li>
                <li>Subtitle is optional and should be used for brief descriptions when needed</li>
                <li>The component provides space for additional elements using the children prop</li>
                <li>Background color is automatically set to bg-ag-cream per our design system</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Usage Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-gray-800 mb-8 font-heading">Usage Guidelines</h2>
          
          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-light mb-4 text-gray-800">For Developers</h3>
            <p className="text-gray-700 mb-4">
              When implementing new pages or components, please adhere to these style guidelines to maintain consistency across our website.
              All components are built using Tailwind CSS and React with Next.js.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800">
                <strong>IMPORTANT:</strong> This style guide is the single source of truth for all design decisions. Any deviation must be approved by the design team.
              </p>
            </div>
            
            <h4 className="text-lg font-light mb-2 mt-6 text-gray-800">Do's:</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use the predefined color palette (black, grays, cream backgrounds, and #e7e0cf for hero elements)</li>
              <li>Use Montserrat for headings and Open Sans for body text</li>
              <li>Use font-light for all headings</li>
              <li>Use cream backgrounds for page headers instead of dark backgrounds</li>
              <li>Use Secondary Dark (#343d3f) for accent elements</li>
              <li>Use numbered section headers for form sections with black background</li>
              <li>Use black for radio buttons and checkbox fills</li>
              <li>Refer to this style guide when developing new components or pages</li>
            </ul>
            
            <h4 className="text-lg font-light mb-2 mt-6 text-gray-800">Don'ts:</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Introduce new colors without consulting the design team</li>
              <li>Use blue as primary color (use black instead)</li>
              <li>Use inconsistent spacing or typography</li>
              <li>Use font-bold for headings (use font-light instead)</li>
              <li>Add black backgrounds to the top of pages</li>
              <li>Create new UI elements without checking this guide first</li>
              <li>Neglect responsive design considerations</li>
            </ul>
          </div>
        </section>
      </div>
    </motion.div>
  )
} 