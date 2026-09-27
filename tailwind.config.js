/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm editorial paper system — replaces the v1 dark "ink" theme entirely.
        paper: {
          DEFAULT: '#F6F2E9',
          raised: '#EFE9DA',
          panel: '#EAE2CE',
        },
        ink: {
          DEFAULT: '#1B1712',
          dim: '#5C5548',
          faint: '#948B79',
          line: '#DCD2B8',
          linestrong: '#C7BA96',
        },
        rust: {
          DEFAULT: '#B4491F',
          deep: '#8F3717',
          soft: '#D97C4C',
        },
        pine: {
          DEFAULT: '#2B4436',
          deep: '#1B2C22',
          soft: '#5B7863',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        prose: '66ch',
      },
      letterSpacing: {
        tightest: '-0.045em',
        wideish: '0.08em',
        widest: '0.22em',
      },
      transitionTimingFunction: {
        signal: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
