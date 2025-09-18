export const designTokens = {
  colors: {
    primary: 'hsl(160 84% 39%)',
    primaryForeground: 'hsl(0 0% 100%)',
    secondary: 'hsl(200 75% 45%)',
    secondaryForeground: 'hsl(0 0% 100%)',
    accent: 'hsl(28 90% 58%)',
    accentForeground: 'hsl(0 0% 9%)',
    border: 'hsl(0 0% 89.8%)',
    input: 'hsl(0 0% 89.8%)',
    ring: 'hsl(0 0% 3.9%)',
    background: 'hsl(0 0% 100%)',
    foreground: 'hsl(0 0% 3.9%)',
    gray: {
      50: 'hsl(0 0% 98%)',
      100: 'hsl(0 0% 96%)',
      200: 'hsl(0 0% 90%)',
      300: 'hsl(0 0% 83%)',
      400: 'hsl(0 0% 63%)',
      500: 'hsl(0 0% 45%)',
      600: 'hsl(0 0% 32%)',
      700: 'hsl(0 0% 25%)',
      800: 'hsl(0 0% 15%)',
      900: 'hsl(0 0% 9%)',
    },
  },
  typography: {
    fontFamily: {
      sans: 'var(--font-geist-sans)',
      mono: 'var(--font-geist-mono)',
    },
    sizes: {
      h1: { fontSize: '3rem', lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: 700 },
      h2: { fontSize: '2.25rem', lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: 600 },
      h3: { fontSize: '1.875rem', lineHeight: '1.2', fontWeight: 600 },
      h4: { fontSize: '1.5rem', lineHeight: '1.25', fontWeight: 600 },
      h5: { fontSize: '1.125rem', lineHeight: '1.3', fontWeight: 500 },
      h6: { fontSize: '1rem', lineHeight: '1.35', letterSpacing: '0.02em', fontWeight: 500 },
      body: { fontSize: '1rem', lineHeight: '1.6', fontWeight: 400 },
      caption: { fontSize: '0.875rem', lineHeight: '1.4', fontWeight: 400 },
    },
  },
} as const;

export type DesignTokens = typeof designTokens;

export default designTokens;


