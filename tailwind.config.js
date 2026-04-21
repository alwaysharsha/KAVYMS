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
          light: '#FF8C61',
          dark: '#E55A2B',
          50: '#FFF5F2',
          100: '#FFE8E0',
          500: '#FF6B35',
          600: '#E55A2B',
          700: '#CC4A1F',
        },
        secondary: {
          DEFAULT: '#8B0000',
          light: '#B71C1C',
          dark: '#6A0000',
          50: '#FFEBEE',
          100: '#FFCDD2',
          500: '#8B0000',
          600: '#6A0000',
          700: '#4A0000',
        },
        accent: {
          DEFAULT: '#FFD700',
          light: '#FFE44D',
          dark: '#DAA520',
        },
        background: {
          DEFAULT: '#FFFFFF',
          light: '#F9FAFB',
          dark: '#F3F4F6',
        },
        text: {
          DEFAULT: '#1F2937',
          light: '#6B7280',
          dark: '#111827',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(255, 107, 53, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
