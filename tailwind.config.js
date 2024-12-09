/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '0px 0px 20px 20px', // Add custom border-radius
      },
      opacity: {
        '95': '0.95', // Ensure 0.95 opacity is available
      },
      backdropBlur: {
        custom: '10px', // Add custom blur
      },
      backgroundImage: {
        'custom-bg': "linear-gradient(rgba(97, 0, 194, 0.6), rgba(25, 24, 23, 0.6)), url('/assets/Images/bg.png')",
        homeBg: "linear-gradient(#191817 50%, #00000000 50%)",
        heartBg:"linear-gradient(99deg, #FFF 3.36%, rgba(255, 255, 255, 0.00) 238.16%)",
        cardBg:"linear-gradient(#FFFFFF 0%, #FFFFFF 100%)",
      },
      boxShadow:{
        boxshadow: "2px 0px 90px 0px rgba(97, 0, 194, 0.40)",
      },
      
      colors:{
        primary:"#6100C2",
        bgP:"#BAABF2",
        sideBg:"#21201E"
      }
    },
  },
  plugins: [],
};
