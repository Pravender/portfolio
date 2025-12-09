/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1e3a8a',
        'primary-purple': '#7c3aed',
        'secondary-cyan': '#06b6d4',
        'dark-bg': '#0f172a',
        'text-primary': '#ffffff',
        'text-secondary': '#94a3b8',
      },
      fontFamily: {
        'sans': ['Inter', 'Roboto', 'sans-serif'],
        'heading': ['Poppins', 'Inter', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(124, 58, 237, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
