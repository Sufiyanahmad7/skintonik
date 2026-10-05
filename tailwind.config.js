/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F9F6F0',
          200: '#F3EDE2',
          300: '#E8DEC9',
          400: '#D5C4A1',
        },
        burgundy: {
          700: '#5A1820',
          800: '#4A151B',
          900: '#3A0D12',
          DEFAULT: '#4A151B',
          hover: '#3A0D12',
          light: '#5E1B23',
        },
        champagne: {
          50: '#FAF4ED',
          100: '#F5EBE1',
          200: '#EAD7C5',
          300: '#D9BEA7',
        },
        brandText: {
          primary: '#2C1B18',
          secondary: '#66534E',
          muted: '#8C7A75',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
        script: ['Sacramento', 'Caveat', 'cursive'],
      }
    },
  },
  plugins: [],
}
