/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      animation:{
        'BorderColorAnim' : 'BorderColorAnim 1s ease-in-out infinite',
      }
    },
    keyframes:{
      BorderColorAnim:{
        '0%':{borderColor:'#fff'},
        '50%':{borderColor:'#000'},
        '100%':{borderColor:'#fff'},
      }
    }
  },
  plugins: [],
}

