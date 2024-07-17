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
        'highlight-red': '#FF4672',
        'box-background': '#261C26',
        'border-red': '#EA1E1E25',
        'box-green': '#0FA35360',
        'border-green': '#0FA353',
        'box-background-darker': '#171117',
        'fade-modal': '#08061775'
      },

      fontFamily: {
        'karantina': ['Karantina', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'imbue': ['Imbue', 'sans-serif'],
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
      },

      height: {
        '200': '12.5rem',
        '400': '25rem',
        '450': '28.125rem',
        '500': '31.25rem',
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

