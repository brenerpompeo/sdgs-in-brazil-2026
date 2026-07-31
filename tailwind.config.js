/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        un: {
          blue: '#0066FF',
          dark: '#050B14',
          navy: '#0A1628',
          card: '#0F213D',
          border: 'rgba(255, 255, 255, 0.1)',
          cyan: '#00A3E0',
          emerald: '#00FF41',
          gold: '#FFD700',
        },
        ods: {
          5: '#FF3A21',
          6: '#26BDE2',
          8: '#A21942',
          10: '#DD1367',
          16: '#00689D',
          17: '#19486A',
          18: '#00FF41',
        }
      },
      fontFamily: {
        flama: ['Flama', 'sans-serif'],
        flamaCondensed: ['FlamaCondensed', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
