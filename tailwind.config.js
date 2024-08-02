/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./home.html"],
  theme: {
    extend: {
      letterSpacing:{
        tightest: '-1px',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 2s ease-out forwards',
      },
      
      height: {
        'custom':'90vh',
      },
      colors: {
        'color' : '#FFFFFF',
        'secColor' : '#F4F4F4',
         'blue-950': '#1E3A8A',
      },
      boxShadow: {
        'navbar': '0 4px 8px rgba(0, 0, 0, 0.2)', // Custom shadow for the navbar
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',     /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',               /* Chrome, Safari, and Opera */
        },
      });
    }
  ],
}

