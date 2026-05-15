/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#eef9ff',
          100: '#d7f0ff',
          200: '#aee3ff',
          300: '#78cff8',
          500: '#0a8fd8',
          600: '#0572b2',
          700: '#075a8e',
          800: '#08486f',
          900: '#07304d',
        },
        leaf: {
          50: '#effdf4',
          100: '#d8fbe5',
          200: '#b4f4ce',
          500: '#24b36b',
          600: '#178e52',
          700: '#146f42',
        },
        ink: '#102033',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(16, 32, 51, 0.12)',
        lift: '0 18px 35px rgba(7, 48, 77, 0.16)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
