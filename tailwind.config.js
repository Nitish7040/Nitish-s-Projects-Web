/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        brand: {
          bg: '#070A0F',
          surface: '#0C1017',
          'surface-2': '#121824',
          'surface-3': '#182030',
          border: '#1A2436',
          'border-light': '#25334A',
        },
        text: {
          primary: '#F3F5F8',
          secondary: '#949BA6',
          muted: '#616875',
          dim: '#414752',
        },
        accent: {
          DEFAULT: '#F5C542',
          light: '#F7D06B',
          dim: '#D4A832',
          muted: 'rgba(245, 197, 66, 0.12)',
          subtle: 'rgba(245, 197, 66, 0.05)',
        },
        secondary: {
          DEFAULT: '#FF6B35',
          light: '#FF8A5C',
          dim: '#E05A2A',
        },
        cyan: {
          DEFAULT: '#38BDF8',
          light: '#7DD3FC',
          dim: '#0EA5E9',
          muted: 'rgba(56, 189, 248, 0.12)',
          subtle: 'rgba(56, 189, 248, 0.05)',
        },
      },
      animation: {
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
