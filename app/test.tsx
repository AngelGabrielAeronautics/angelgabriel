import type { Metadata } from 'next'

export default function TestPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Test Page</h1>
      <p className="text-lg">This is a test page to check if styling is working properly.</p>
      <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Test Content</h2>
        <p>If you can see this box with styling, Tailwind CSS is working correctly.</p>
      </div>
      <div className="mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Test Button
        </button>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Test Page',
  robots: {
    index: false,
    follow: false,
  },
}; 