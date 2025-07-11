import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Angel Gabriel Aeronautics',
  description: 'The page you are looking for could not be found. Return to our homepage or browse our services.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ag-cream px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl font-heading font-bold text-ag-text mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold text-ag-text mb-4">Page Not Found</h2>
        <p className="text-lg text-ag-text mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/" 
            className="inline-block bg-black text-white px-8 py-4 rounded-md font-medium hover:bg-gray-900 transition-colors"
          >
            Return Home
          </Link>
          
          <div className="text-sm">
            <p className="text-ag-text mb-2">Or try one of these popular pages:</p>
            <div className="space-x-4">
              <Link href="/rates-and-quotes" className="text-secondary-dark hover:underline">
                Get a Quote
              </Link>
              <Link href="/contact" className="text-secondary-dark hover:underline">
                Contact Us
              </Link>
              <Link href="/services" className="text-secondary-dark hover:underline">
                Our Services
              </Link>
              <Link href="/fleet" className="text-secondary-dark hover:underline">
                Our Fleet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 