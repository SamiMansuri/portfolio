// Saved color palettes for the portfolio.
// Change the active palette in tailwind.config.js.

export const palettes = {
  // Saved: Forest Green (#1F3D2B) & Sand Beige (#E8DCC4)
  forestSand: {
    background: '#1F3D2B',
    surface: {
      DEFAULT: '#1F3D2B',
      elevated: '#274C37',
    },
    card: {
      DEFAULT: '#E8DCC4',
      hover: '#F2E9D8',
      border: '#D8CBB0',
      text: '#1F3D2B',
      muted: '#2E503B',
    },
    border: {
      subtle: 'rgba(232, 220, 196, 0.20)',
    },
    content: {
      primary: '#E8DCC4',
      secondary: '#D4C7AE',
      muted: '#A89C85',
    },
    accent: {
      DEFAULT: '#E8DCC4',
      hover: '#F2E7D2',
      muted: 'rgba(232, 220, 196, 0.15)',
    },
    success: {
      DEFAULT: '#22C55E',
      muted: 'rgba(34, 197, 94, 0.20)',
    },
  },

  // Active: Strictly Black (#000000) & White (#FFFFFF) with dark cards
  blackAndWhite: {
    background: '#000000',
    surface: {
      DEFAULT: '#000000',
      elevated: '#141414',
    },
    card: {
      DEFAULT: '#0f0f0f',
      hover: '#141414',
      border: '#222222',
      'hover-border': '#3a3a3a',
      text: '#fafafa',
      muted: '#9ca3af',
      pill: '#1a1a1a',
      'pill-border': '#2a2a2a',
    },
    border: {
      subtle: 'rgba(255, 255, 255, 0.22)',
    },
    content: {
      primary: '#FFFFFF',
      secondary: '#D4D4D8',
      muted: '#9ca3af',
    },
    accent: {
      DEFAULT: '#FFFFFF',
      hover: '#E4E4E7',
      muted: 'rgba(255, 255, 255, 0.12)',
    },
    success: {
      DEFAULT: '#FFFFFF',
      muted: 'rgba(255, 255, 255, 0.20)',
    },
  },
};
