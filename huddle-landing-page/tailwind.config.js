/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Violet': 'hsl(257, 40%, 49%)',
        'SoftMagenta': 'hsl(300, 69%, 71%)'
      },
      backgroundImage:{
        "bgDesktop":"url('/images/bg-desktop.svg')",
        "bgMobile":"url('/images/bg-mobile.svg')",
      }
    },
  },
  plugins: [],
}