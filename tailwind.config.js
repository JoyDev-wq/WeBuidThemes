/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       maxHeight: {
        '0': '0px',
        '500': '500px',
        'screen': '100vh',
      },
    },
  },
  plugins: [],
}

