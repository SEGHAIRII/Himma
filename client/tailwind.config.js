/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto']
      },
      colors:{
        'main-blue':'#05A8C6',
        'main-yellow':'#F5E29D',
        'light-blue':'#05CDF2',
        'dark-yellow':'#E3CD7D'
      }
    },
  },
  plugins: [],
}