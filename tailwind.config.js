/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'max-2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'latop-l': { 'max': '1440px' },
      // => @media (max-width: 1440px) { ... }

      'max-xl': { 'max': '1280px' },
      // => @media (max-width: 1280px) { ... }

      'latop': { 'max': '1024px' },
      // => @media (max-width: 1024px) { ... }

      'tablet': { 'max': '768px' },
      // => @media (max-width: 768px) { ... }

      'max-sm': { 'max': '640px' },
      // => @media (max-width: 640px) { ... }

      'mobile-l': { 'max': '425px' },
      // => @media (max-width: 425px) { ... }

      'mobile-m': { 'max': '375px' },
      // => @media (max-width: 375px) { ... }

      'mobile-s': { 'max': '320px' },
      // => @media (max-width: 320px) { ... }
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
