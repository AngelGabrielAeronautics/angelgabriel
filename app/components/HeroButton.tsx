'use client';

import React from 'react';
import Link from 'next/link';
import { FaPlaneDeparture } from 'react-icons/fa';

type HeroButtonProps = {
  href: string;
  text: string;
};

export default function HeroButton({ href, text }: HeroButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center px-8 py-4 max-[375px]:px-6 max-[375px]:py-3 max-[375px]:text-sm max-[320px]:px-4 max-[320px]:py-2 max-[320px]:text-xs bg-yellow-500 text-ag-text-black font-medium rounded-md hover:bg-yellow-600 transition-colors duration-300"
    >
      <FaPlaneDeparture className="w-5 h-5 mr-2" />
      {text}
    </Link>
  );
} 