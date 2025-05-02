'use client';

import { motion } from 'framer-motion';
import QuoteRequestForm from '../components/QuoteRequestForm';

export default function QuotesPage() {
  return (
    <div className="min-h-screen bg-ag-cream py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ag-text mb-4 font-heading">
              Request a Charter Quote
            </h1>
            <p className="text-lg text-ag-text">
              Fill out the form below and our team will provide you with a personalized quote for your journey.
            </p>
          </div>
          
          <QuoteRequestForm />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-ag-text">
              Need assistance? Contact us directly at <a href="mailto:charters@flyangelgabriel.com" className="text-ag-button hover:underline">charters@flyangelgabriel.com</a> or call <a href="tel:+27123456789" className="text-ag-button hover:underline">+27 12 345 6789</a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 