export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          light: '#F7931E',
        },
        secondary: {
          DEFAULT: '#8B0000',
          light: '#A52A2A',
        },
        accent: {
          DEFAULT: '#FFD700',
          light: '#DAA520',
        },
        background: {
          DEFAULT: '#FFF8DC',
          light: '#F5F5DC',
        },
        text: {
          DEFAULT: '#3E2723',
        }
      },
    },
  },
  plugins: [],
}
