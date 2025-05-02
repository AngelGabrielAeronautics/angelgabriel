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
        'ag-cream': '#e9e2cf',
        'ag-text-black': '#191100',
        'ag-secondary-dark': '#241700',
        'ag-text': {
          DEFAULT: '#191100',
          light: '#fefefe',
        },
        'ag-button': {
          DEFAULT: '#000000',
          hover: '#181818',
          active: '#303030',
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