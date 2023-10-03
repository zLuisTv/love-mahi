/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'max-2xl': { 'max': '1536px' },
      // => @media (max-width: 1535px) { ... }

      'latop-l': { 'max': '1441px' },
      // => @media (max-width: 1440px) { ... }

      'max-xl': { 'max': '1281px' },
      // => @media (max-width: 1280px) { ... }

      'latop': { 'max': '1025px' },
      // => @media (max-width: 1024px) { ... }

      'tablet': { 'max': '767px' },
      // => @media (max-width: 768px) { ... }

      'max-sm': { 'max': '641px' },
      // => @media (max-width: 640px) { ... }

      'mobile-l': { 'max': '425px' },
      // => @media (max-width: 425px) { ... }

      'mobile-m': { 'max': '376px' },
      // => @media (max-width: 376px) { ... }

      'mobile-s': { 'max': '321px' },
      // => @media (max-width: 321px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
