/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': { 'min': '1433px' },
      },
      fontFamily: {
        'poppins-regular': ['Poppins-Regular', 'sans-serif'],
        'poppins-medium': ['Poppins-Medium', 'sans-serif'],
        'poppins-bold': ['Poppins-Bold', 'sans-serif'],
        'poppins-semi-bold': ['Poppins-SemiBold', 'sans-serif'],
        
      },
      lineHeight: {
        '11': '3rem',
        '12': '3.5rem',
        '13': '4rem',
      },
      colors: {
        'blue-0': "#012154",
        'blue-1': "#006E93",
        'blue-2': "#0891A1",
        'blue-3': "#63A297",
        'yellow-3': "#FEE1B0",
        'yellow-2': "#FBA968",
        'yellow-1': "#FC6B2C",
        'yellow-0': "#FF3819",
      },
      borderRadius: {
        '4xl': '36px',
      },
      backgroundImage: {
        'waves': "url('/src/assets/images/waves.png')",
        'batik': "url('/src/assets/images/batik.png')",
        'food': "url('/src/assets/images/food.png')",
        'house': "url('/src/assets/images/house.png')",
        'question': "url('/src/assets/images/question.png')",
        'answer': "url('/src/assets/images/answer.png')",
      }

    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}

