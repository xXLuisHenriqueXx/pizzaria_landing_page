/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        'primary-red': '#EA1E1E',
        'highlight-red': '#FF4672',
        'border-red': '#EA1E1E25',
        'box-green': '#0FA35360',
        'border-green': '#0FA353',
        'box-background': '#2E252E',
        'box-background-darker': '#171117',
        'fade-modal': '#080617e6'
      },

      fontFamily: {
        'karantina': ['Karantina', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'imbue': ['Imbue', 'sans-serif'],
        'inika': ['Inika', 'sans-serif'],
      },

      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem',
        '13xl': '13rem',
      },

      backgroundImage: {
        main: "url('/src/assets/backgrounds/main_background.svg')",
        header: "url('/src/assets/backgrounds/header_background.svg')",
      },

      width: {
        '500': '31.25rem',
        '550': '34.375rem',
        '600': '37.5rem',
        '700': '43rem',
        '800': '50rem',
      },

      height: {
        '200': '12.5rem',
        '250': '15.625rem',
        '400': '25rem',
        '450': '28.125rem',
        '500': '31.25rem',
        '600': '37.5rem',
      },

      padding: {
        '42': '10.5rem',
      },

      boxShadow: {
        'red': '0 0 50px 0 #EA1E1E80',
      },
    },
  },
  plugins: [],
}

