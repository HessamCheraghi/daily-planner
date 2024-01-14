import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Charmonman', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
