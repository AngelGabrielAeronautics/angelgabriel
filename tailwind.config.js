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
        // Angel Gabriel brand colors
        'ag-blue': {
          DEFAULT: '#042250', // Primary blue
          light: '#4F7BA3',
          dark: '#132C4B',
          darker: '#042250',
        },
        'ag-gold': {
          DEFAULT: '#e6bf93', // Gold accent color
          light: '#fbddaf',
          dark: '#b8845c',
        },
        // Neutral colors
        'ag-neutral': {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#dfe1e2',
          300: '#a9aeb1',
          400: '#757575',
          500: '#565c65',
          600: '#3d4551',
          700: '#252f3e',
          800: '#171416',
          900: '#000000',
        },
        // Earth tones palette
        'ag-earth': {
          lightest: '#fbddaf', // Lightest cream
          light: '#e6bf93', // Light beige
          medium: '#b8845c', // Medium brown
          dark: '#5f3b30', // Dark brown
          darkest: '#241700', // Darkest brown
        },
        // Muted accent colors
        'ag-muted': {
          beige: '#ada684', // Beige accent
          brown: '#5f3b30', // Brown accent
          green: '#576158', // Muted green
          gray: '#757464', // Muted gray
        },
        // Page background color
        'ag-cream': '#fbddaf',
        // Text Black
        'ag-text-black': '#191410',
        // Secondary Dark
        'ag-secondary-dark': '#5f3b30',
        // Button color
        'ag-button': {
          DEFAULT: '#5f3b30', // Brown button
          hover: '#443732', // Darker brown on hover
          active: '#5f3b30', // Original brown when active
        },
        // Text colors
        'ag-text': {
          DEFAULT: '#171416', // Primary text color
          light: '#fbddaf',   // Text on dark backgrounds
        },
        // Invert colors for accents
        'ag-invert': {
          blue: {
            light: '#70A3C3',
            DEFAULT: '#4F7BA3',
            dark: '#042250',
          },
          teal: {
            light: '#A0C4CF',
            DEFAULT: '#5591A9',
            dark: '#042250',
          },
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