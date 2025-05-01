import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8aceff',
          400: '#51b3ff',
          500: '#2891ff',
          600: '#1170ff',
          700: '#0959eb',
          800: '#0f47bd',
          900: '#134094',
          950: '#112a5c',
        },
        secondary: {
          50: '#f4f7fb',
          100: '#e9eef5',
          200: '#cedbe9',
          300: '#a3bdd6',
          400: '#7297be',
          500: '#5078a7',
          600: '#40618c',
          700: '#354e71',
          800: '#2f445f',
          900: '#2b3a50',
          950: '#1c2533',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdb872',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
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
        'ag-cream': '#fbddaf',
        'ag-text-black': '#191410',
        'ag-secondary-dark': '#5f3b30',
        'ag-text': {
          DEFAULT: '#171416', // Primary text color
          light: '#fbddaf',   // Text on dark backgrounds
        },
        'ag-button': {
          DEFAULT: '#5f3b30', // Brown button
          hover: '#443732', // Darker brown on hover
          active: '#5f3b30', // Original brown when active
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
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
} 