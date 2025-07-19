/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0F0E0C',
        'bg-secondary': '#1A1612',
        'bg-tertiary': '#2A2218',
        'bg-card': '#1F1B15',
        'bg-elevated': '#252017',
        'accent-gold': '#D4A574',
        'accent-amber': '#E6B886',
        'accent-bronze': '#B8956C',
        'accent-copper': '#A67C5A',
        'text-primary': '#F5F2E8',
        'text-secondary': '#E0D5C3',
        'text-muted': '#B8A896',
        'border-primary': '#3A3226',
        'border-secondary': '#2A261C',
        'border-accent': '#B8956C',
        'border-glow': '#E6B886',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 6px rgba(212, 165, 116, 0.15)',
        'gold': '0 8px 25px rgba(230, 184, 134, 0.25)',
      },
      backgroundImage: {
        'bg-pattern': "url('/assets/bg.png')",
      }
    },
  },
  plugins: [],
}