/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      colors: {
        cosmic: {
          950: '#050A10',
          900: '#0A121C',
          800: '#111926',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
          yellow: '#fbbf24',
          green: '#10b981',
          red: '#ef4444',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 8s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.3', transform: 'scale(1) translate(0, 0)' },
          '100%': { opacity: '0.6', transform: 'scale(1.2) translate(10%, 10%)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
