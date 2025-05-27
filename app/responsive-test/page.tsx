'use client';

import { useState } from 'react';

const devices = [
  { name: 'Desktop', width: 1920, height: 1080, bp: '2xl' },
  { name: 'Laptop', width: 1366, height: 768, bp: 'xl' },
  { name: 'Tablet Landscape', width: 1024, height: 768, bp: 'lg' },
  { name: 'Tablet Portrait', width: 768, height: 1024, bp: 'md' },
  { name: 'Mobile Large', width: 640, height: 896, bp: 'sm' },
  { name: 'Mobile Medium', width: 375, height: 667, bp: 'base' },
  { name: 'Mobile Small', width: 320, height: 568, bp: 'xs' },
];

export default function ResponsiveTestPage() {
  const [path, setPath] = useState('/');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-8">
      <h1 className="text-3xl font-heading font-bold mb-6">Responsive Test</h1>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 mb-8">
        <label className="font-sans font-medium">
          Path:
          <input
            type="text"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            className="ml-2 bg-white border border-gray-300 rounded shadow-sm focus:border-black focus:ring-1 focus:ring-black px-3 py-2 font-sans"
            placeholder="/"
          />
        </label>
        <button
          onClick={() => setPath(path)}
          className="bg-black text-white rounded-md px-8 py-4 hover:bg-gray-900 font-medium"
        >
          Load
        </button>
      </div>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 gap-8">
          {devices.map((device) => (
            <div
              key={device.name}
              className="bg-white rounded-lg p-10 mb-12 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="bg-gray-100 p-2 text-sm font-medium mb-4">
                {device.name} ({device.width}×{device.height}) {`{${device.bp}}`}
              </div>
              <div className="w-full mx-auto" style={{ maxWidth: `${device.width}px` }}>
                <iframe
                  src={path}
                  className="border-0 w-full"
                  style={{ aspectRatio: `${device.width} / ${device.height}` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 