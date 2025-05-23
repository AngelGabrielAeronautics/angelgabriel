import React from 'react';

export const AirplaneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M21 16v-2l-8-5V3.497c0-.27-.145-.52-.386-.658a.75.75 0 0 0-.727 0L12 4.504 12.113 18H4v2h8.113L12 21.503l.887 1.004c.162.183.413.293.68.293.067 0 .133-.008.198-.024l.019-.005 1.984-.4 3.388-1.247a.75.75 0 0 0 .437-.695v-3.188l4.054-1.55a.75.75 0 0 0 .171-1.337L21 16z" />
  </svg>
); 