/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sepia: '#5a3a22',
        parchment: '#efe1c3',
        ink: '#22150d',
      },
      boxShadow: {
        vintage: '0 20px 60px rgba(20, 12, 8, 0.45)',
      },
    },
  },
  plugins: [],
}
