import React from 'react';

export const metadata = {
  title: 'Responsive Test',
  description: 'Test site responsiveness on standard screen sizes',
};

export default function ResponsiveTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 