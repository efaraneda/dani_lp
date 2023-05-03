/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
        // breakpoint para dispositivos móviles
      'sm': {'max': '700px'},
      'md': {'min': '701px'},
      'xl': {'min': '1280px'},
      '2xl': {'min': '1536px'}
    },
  extend: {
      
      colors:{
        primary:"#706FE5",
        primarytext:"#05050A",
        cta:"#4D4C9C",
        ctaBtn:"#FFFFFF",
        secondarytext:"#85848e",
        lavanda:"#dadaf8",
        indigo:"#7d7ce7"
      }
    
    }
  },
  plugins: [],
}
