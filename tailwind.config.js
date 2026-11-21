/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          antique: '#C9A96A',
          flame: '#F6C86E',
          dim: 'rgba(201, 169, 106, 0.35)',
          light: '#F8E8C7',
        },
        royal: {
          blue: '#294B70',
          dark: '#1C3652',
          light: '#3C6B9C',
        },
        silver: {
          blue: '#B8C8D8',
          mist: '#D6E2ED',
        },
        navy: {
          midnight: '#17283F',
          deep: '#0E1A2B',
          abyss: '#08101C',
        },
        ivory: {
          warm: '#F7F5F0',
          pure: '#FAF9F5',
        },
        mist: {
          ethereal: '#EEF2F6',
          soft: '#E5EBF2',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widestEditorial: '0.25em',
        ethereal: '0.35em',
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floating 6s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
