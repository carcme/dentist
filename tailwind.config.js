/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#333',
      'blue': '#e80c0c',
      'grey': '#666',
      'red': '#e80c0c',
      'light-color': '#666',
      'light-bg': '#eee',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      backgroundImage: {
        'home': "url('/src/assets/home-bg.jpg')",
      }

    },
  },
  plugins: [],
}