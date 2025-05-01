'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
      {/* Hero Section */}
      <div className="relative bg-ag-earth-darkest py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ag-earth-lightest mb-4 font-heading">Style Guide</h1>
          <p className="text-xl text-ag-earth-lightest">A comprehensive guide to our design system</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-ag-text-black mb-6">
            This style guide provides an overview of the visual elements, components, and patterns used throughout the 
            Angel Gabriel Aeronautics website. It ensures consistency and maintains our brand identity across all digital touchpoints.
          </p>
        </div>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-ag-text-black mb-8 font-heading">Colors</h2>
          
          <h3 className="text-xl font-medium mb-4 text-ag-text-black">Primary Earth Tones</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#fbddaf' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Lightest Cream</p>
                <p className="text-sm text-gray-500">#fbddaf</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#ecd3b4' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Light Beige</p>
                <p className="text-sm text-gray-500">#ecd3b4</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#e6bf93' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Medium Beige</p>
                <p className="text-sm text-gray-500">#e6bf93</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#b8845c' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Medium Brown</p>
                <p className="text-sm text-gray-500">#b8845c</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#8f5c3c' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Brown</p>
                <p className="text-sm text-gray-500">#8f5c3c</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-medium mb-4 mt-10 text-ag-text-black">Muted Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#ada684' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Beige</p>
                <p className="text-sm text-gray-500">#ada684</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#5f3b30' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Dark Brown</p>
                <p className="text-sm text-gray-500">#5f3b30</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#757464' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Gray</p>
                <p className="text-sm text-gray-500">#757464</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#576158' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Green</p>
                <p className="text-sm text-gray-500">#576158</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-medium mb-4 mt-10 text-ag-text-black">Dark Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#191410' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Text Black</p>
                <p className="text-sm text-gray-500">#191410</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#241700' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Darkest Brown</p>
                <p className="text-sm text-gray-500">#241700</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-medium mb-4 mt-10 text-ag-text-black">Accent & Invert Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#042250' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Deep Blue</p>
                <p className="text-sm text-gray-500">#042250</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#4F7BA3' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Medium Blue</p>
                <p className="text-sm text-gray-500">#4F7BA3</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#70A3C3' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Light Blue</p>
                <p className="text-sm text-gray-500">#70A3C3</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#5591A9' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Teal</p>
                <p className="text-sm text-gray-500">#5591A9</p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="h-32 rounded-t-lg" style={{ backgroundColor: '#A0C4CF' }}></div>
              <div className="bg-white p-4 border border-gray-200 border-t-0 rounded-b-lg">
                <p className="font-medium">Light Teal</p>
                <p className="text-sm text-gray-500">#A0C4CF</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-ag-text-black mb-8 font-heading">Typography</h2>
          
          <div className="space-y-8">
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h1 className="text-6xl md:text-7xl font-bold mb-2 font-heading text-ag-text-black">Heading 1</h1>
              <p className="text-gray-500">text-6xl md:text-7xl font-bold font-heading (Montserrat)</p>
              <div className="mt-4 text-gray-600">Used for main page headers</div>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h2 className="text-3xl font-bold mb-2 font-heading text-ag-text-black">Heading 2</h2>
              <p className="text-gray-500">text-3xl font-bold font-heading (Montserrat)</p>
              <div className="mt-4 text-gray-600">Used for section headers</div>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h3 className="text-xl font-medium mb-2 text-ag-text-black">
                <span className="h-7 w-7 rounded-full bg-ag-earth-dark text-white flex items-center justify-center text-sm mr-3 inline-flex">1</span>
                Section Heading
              </h3>
              <p className="text-gray-500">text-xl font-medium with numbered indicator (Montserrat)</p>
              <div className="mt-4 text-gray-600">Used for form section headers</div>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
              <p className="text-lg mb-2 text-ag-text-black">Body Text</p>
              <p className="text-gray-500">text-lg text-ag-text-black (Open Sans)</p>
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
          <h2 className="text-3xl font-bold text-ag-text-black mb-8 font-heading">Buttons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col items-center">
              <button className="px-8 py-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-ag-earth-dark hover:bg-ag-button-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ag-earth-dark transition-colors duration-300">
                Primary Button
              </button>
              <p className="mt-4 text-gray-500">Used for form submissions and primary actions</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-ag-earth-darkest shadow-sm flex flex-col items-center">
              <button className="px-8 py-3 border-2 border-ag-earth-lightest text-lg font-medium rounded-md text-ag-earth-lightest bg-transparent hover:bg-ag-earth-lightest/10 transition-colors duration-300">
                Hero Button
              </button>
              <p className="mt-4 text-ag-earth-lightest">Used for hero section CTAs (shown on dark background)</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col items-center">
              <Link href="#" className="text-ag-earth-dark hover:text-ag-button-hover font-medium transition-colors">
                Text Link
              </Link>
              <p className="mt-4 text-gray-500">Used for navigation within content</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col items-center">
              <button className="inline-flex items-center px-6 py-2 border border-ag-earth-dark rounded-md shadow-sm text-sm font-medium text-ag-earth-dark bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ag-earth-dark">
                Outline Button
              </button>
              <p className="mt-4 text-gray-500">Used for secondary actions</p>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-ag-text-black mb-8 font-heading">Form Elements</h2>
          
          <div className="bg-white p-8 rounded-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="example-input" className="block text-sm font-medium text-gray-600 mb-1">
                  Text Input <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="example-input"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-ag-earth-dark focus:border-ag-earth-dark bg-white shadow-sm"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-ag-earth-dark focus:border-ag-earth-dark bg-white shadow-sm"
                  placeholder="0"
                />
              </div>
            </div>
            
            <div className="mb-8">
              <label htmlFor="example-textarea" className="block text-sm font-medium text-gray-600 mb-1">Textarea</label>
              <textarea
                id="example-textarea"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-ag-earth-dark focus:border-ag-earth-dark bg-white shadow-sm"
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
                    className="h-4 w-4 text-ag-earth-dark focus:ring-ag-earth-dark border-gray-300"
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
                    className="h-4 w-4 text-ag-earth-dark focus:ring-ag-earth-dark border-gray-300"
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
                    className="h-4 w-4 text-ag-earth-dark focus:ring-ag-earth-dark rounded border-gray-300"
                  />
                  <label htmlFor="checkbox-1" className="ml-2 block text-sm text-gray-700 font-medium">
                    Checkbox option one
                  </label>
                </div>
                
                <div className="flex items-center p-2 hover:bg-white transition-colors duration-200 rounded">
                  <input
                    id="checkbox-2"
                    type="checkbox"
                    className="h-4 w-4 text-ag-earth-dark focus:ring-ag-earth-dark rounded border-gray-300"
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
                className="h-5 w-5 text-ag-earth-dark focus:ring-ag-earth-dark rounded border-gray-300"
              />
              <label htmlFor="subscribe-example" className="ml-2 block text-sm text-gray-700">
                Yes, subscribe me to receive news and special offers
              </label>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-ag-text-black mb-8 font-heading">Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Image Placeholder</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-ag-text-black">Card Title</h3>
                <p className="text-gray-700 mb-4">This is a description for the card. It can contain a brief summary of the content.</p>
                <Link href="#" className="text-ag-earth-dark hover:text-ag-button-hover font-medium">Learn more</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-ag-text-black">Text-only Card</h3>
                <p className="text-gray-700 mb-4">This card has no image and only contains text. It's useful for displaying information that doesn't require visual elements.</p>
                <button className="px-4 py-2 bg-ag-earth-dark text-white rounded-md hover:bg-ag-button-hover transition-colors">
                  Action Button
                </button>
              </div>
            </div>
            
            <div className="bg-ag-muted-beige/20 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-ag-text-black">Highlighted Card</h3>
                <p className="text-gray-700 mb-4">This card has a colored background to make it stand out from the other cards. It's useful for emphasizing important information.</p>
                <Link href="#" className="text-ag-earth-dark hover:text-ag-button-hover font-medium">See details</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Form Sections Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-ag-text-black mb-8 font-heading">Form Sections</h2>
          
          <div className="bg-white p-8 rounded-md shadow-sm space-y-10">
            <div className="pb-6 border-b border-gray-100">
              <h3 className="text-xl font-medium mb-4 text-ag-text-black flex items-center">
                <span className="h-7 w-7 rounded-full bg-ag-earth-dark text-white flex items-center justify-center text-sm mr-3">1</span>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-ag-earth-dark focus:border-ag-earth-dark bg-white shadow-sm" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Another Field <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-ag-earth-dark focus:border-ag-earth-dark bg-white shadow-sm" 
                  />
                </div>
              </div>
            </div>
            
            <div className="pb-6 border-b border-gray-100">
              <h3 className="text-xl font-medium mb-4 text-ag-text-black flex items-center">
                <span className="h-7 w-7 rounded-full bg-ag-earth-dark text-white flex items-center justify-center text-sm mr-3">2</span>
                Preferences
              </h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex items-center p-2 hover:bg-white transition-colors duration-200 rounded">
                  <input
                    id="preference-1"
                    type="checkbox"
                    className="h-4 w-4 text-ag-earth-dark focus:ring-ag-earth-dark rounded border-gray-300"
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
          <div className="bg-ag-earth-darkest rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-ag-earth-lightest mb-4 font-heading">Ready to take flight?</h2>
            <p className="text-xl text-ag-earth-lightest mb-8">Experience the comfort and convenience of flying with Angel Gabriel Aeronautics.</p>
            <Link 
              href="/quotes"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-ag-earth-lightest text-lg font-medium rounded-md text-ag-earth-lightest bg-transparent hover:bg-ag-earth-lightest/10 transition-colors duration-300 md:py-4 md:text-xl md:px-10 font-heading"
            >
              Request a charter quote
            </Link>
          </div>
        </section>
        
        {/* Usage Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-ag-text-black mb-8 font-heading">Usage Guidelines</h2>
          
          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-ag-text-black">For Developers</h3>
            <p className="text-gray-700 mb-4">
              When implementing new pages or components, please adhere to these style guidelines to maintain consistency across our website.
              All components are built using Tailwind CSS and React with Next.js.
            </p>
            
            <h4 className="text-lg font-semibold mb-2 mt-6 text-ag-text-black">Do's:</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use the predefined earth tone color palette</li>
              <li>Use Montserrat for headings and Open Sans for body text</li>
              <li>Use numbered section headers for form sections with dark brown background</li>
              <li>Use dark brown for radio buttons and checkbox fills</li>
              <li>Use cream backgrounds for page content</li>
            </ul>
            
            <h4 className="text-lg font-semibold mb-2 mt-6 text-ag-text-black">Don'ts:</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Introduce new colors without consulting the design team</li>
              <li>Use black as primary color (use earth tones instead)</li>
              <li>Use inconsistent spacing or typography</li>
              <li>Neglect responsive design considerations</li>
            </ul>
          </div>
        </section>
      </div>
    </motion.div>
  )
} 