/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '9/10': '90vh'
      },
      inset: {
        '30': '7.5rem'
      },
      backgroundImage: {
        'bg-home-1' : "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('/images/home/bg-home-1.jpg')"
      }
    },
  },
  plugins: [],
}
