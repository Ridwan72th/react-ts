/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {},
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      "2xl": ['28px', '36px'],
      "3xl": ['32px', '40px'],
      "4xl": ['36px', '44px'],
    }
  },
  plugins: [],
}

