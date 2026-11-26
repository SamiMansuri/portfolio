import { palettes } from './src/config/palettes.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Switch between saved themes here: palettes.blackAndWhite | palettes.forestSand
      colors: palettes.blackAndWhite,
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        ui: 'var(--radius-ui)',
        DEFAULT: 'var(--radius-ui)',
        md: 'var(--radius-ui)',
        lg: 'var(--radius-ui)',
      }
    },
  },
  plugins: [],
}
