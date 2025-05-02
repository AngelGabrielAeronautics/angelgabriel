/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Angel Gabriel primary colors
        'ag-blue': {
          DEFAULT: '#005ea2', // Primary blue
          light: '#73b3e7',
          dark: '#1a4480',
          darker: '#162e51',
        },
        'ag-gold': {
          DEFAULT: '#8a7237', // Gold accent color
          light: '#dabe2e',
          dark: '#936f38',
        },
        'ag-neutral': {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#dfe1e2',
          300: '#a9aeb1',
          400: '#757575',
          500: '#565c65',
          600: '#3d4551',
          700: '#252f3e',
          800: '#171716',
          900: '#1b1b1b',
        },
        'ag-cyan': {
          DEFAULT: '#00bde3', // Secondary blue/cyan
          light: '#e7f6f8',
          dark: '#009ec1',
        },
        'ag-success': {
          DEFAULT: '#00a91c',
          light: '#ecf3ec',
          dark: '#008817',
        },
        'ag-warning': {
          DEFAULT: '#ffbe2e',
          light: '#faf3d1',
          dark: '#e5a000',
        },
        'ag-error': {
          DEFAULT: '#d54309',
          light: '#f4e3db',
          dark: '#b21d38',
        },
        // Page background color
        'ag-cream': '#e9e2cf',
        // Text Black
        'ag-text-black': '#191100',
        // Secondary Dark
        'ag-secondary-dark': '#343d3f',
        // Button color
        'ag-button': {
          DEFAULT: '#000000', // Changed from #89826d to black
          hover: '#343d3f', // Updated from #181818 to #343d3f
          active: '#303030', // Slightly lighter on active
        },
        // Text colors
        'ag-text': {
          DEFAULT: '#191100', // Updated from #5a5443 to #191100
          light: '#fefefe',   // Text on dark backgrounds
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 