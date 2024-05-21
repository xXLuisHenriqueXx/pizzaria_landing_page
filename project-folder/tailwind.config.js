/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#EA1E1E',
        'box-background': '#261C26',
        'border-red': '#EA1E1E25',
      },

      fontFamily: {
        'karantina': ['Karantina', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },

      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem',
        '13xl': '13rem',
      },

      backgroundImage: theme => ({
        'main': "url('src/assets/main_background.png')",
      }),

      width: {
        '500': '31.25rem',
        '700': '43rem',
      },

      height: {
        '400': '25rem',
      },

      padding: {
        '42': '10.5rem',
      },

      boxShadow: {
        'red': '0 0 50px 0 #EA1E1E70',
      },
    },
  },
  plugins: [],
}

