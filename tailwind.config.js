/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gucci-red': '#d4191c',
        'gucci-green': '#007a3d',
      },
      fontFamily: {
        'serif': ['Freight', 'Georgia', 'serif'],
        'sans': ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
