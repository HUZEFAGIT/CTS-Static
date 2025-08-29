/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'playfair-display': ['playfair-display', 'ui-serif'] 
    },
    extend: {
      keyframes: {
        'slide-in-top': {
          '0%': { maxHeight: '0vh', opacity: 0 },
          '50%': { opacity: 0 },
          '100%': { maxHeight: '35vh', opacity: 1 }
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '60%': { transform: 'translateX(-15%)' },
          '80%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'slide-in-top': 'slide-in-top .3s ease-out',
        'slide-in-right': 'slide-in-right .3s'
      }
    },
  },
  plugins: [],
}

