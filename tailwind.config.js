/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './pages/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
  './src/**/*.{js,ts,jsx,tsx}',
  './app/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
        colors: {
            "primary": '#646D55',
            "secondary": '#EAE6DB',
            "tertiary": '#BCC1AE',
            "surface": '#D0C8B4',  
            "cta": '#DE774D',
            "error": '#E57373',
        },
        fontFamily: {
            primary: ['skeena', 'sans-serif'],
        },
       fontSize: {
        'logo': '2.5rem',
       },
    },
  },
  plugins: [],
}