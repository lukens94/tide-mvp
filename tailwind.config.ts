import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  // Light/dark flip is via CSS vars on body.theme-light (DSM § 3.7).
  theme: {
    extend: {
      colors: {
        tide: {
          black: 'var(--black)',
          cream: 'var(--cream)',
          sand: 'var(--sand)',
          blue: 'var(--blue)',
          'blue-2': 'var(--blue-2)',
          yellow: 'var(--yellow)',
          panel: 'var(--panel)',
          'panel-2': 'var(--panel-2)',
          'app-bg': 'var(--app-bg)',
          border: 'var(--border)',
          line: 'var(--line)',
          muted: 'var(--muted)',
          'cream-in': 'var(--cream-in)',
          'cream-line': 'var(--cream-line)',
          'cream-bd': 'var(--cream-bd)',
          'cream-mut': 'var(--cream-mut)',
          'cream-dim': 'var(--cream-dim)',
          'cream-cell': 'var(--cream-cell)',
          'cream-cell-h': 'var(--cream-cell-h)',
          danger: 'var(--danger)',
          'danger-2': 'var(--danger-2)',
          success: 'var(--success)',
          viz: {
            1: 'var(--viz-1)',
            2: 'var(--viz-2)',
            3: 'var(--viz-3)',
            4: 'var(--viz-4)',
            5: 'var(--viz-5)',
            6: 'var(--viz-6)',
            7: 'var(--viz-7)',
          },
        },
        surface: {
          app: 'var(--surface-app)',
          raised: 'var(--surface-raised)',
          card: 'var(--surface-card)',
          accent: 'var(--surface-accent)',
        },
        // Theme-aware ink on shell surfaces (flips with theme-light)
        ink: {
          DEFAULT: 'var(--text-on-dark)',
          muted: 'var(--text-on-dark-mut)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        cond: ['var(--font-cond)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        'tide-hero': [
          'var(--text-hero)',
          { lineHeight: 'var(--lh-tight)', letterSpacing: 'var(--ls-hero)' },
        ],
        'tide-4xl': ['var(--text-4xl)', { lineHeight: 'var(--lh-snug)' }],
        'tide-3xl': ['var(--text-3xl)', { lineHeight: 'var(--lh-snug)' }],
        'tide-2xl': ['var(--text-2xl)', { lineHeight: 'var(--lh-snug)' }],
        'tide-xl': ['var(--text-xl)', { lineHeight: 'var(--lh-snug)' }],
        'tide-lg': ['var(--text-lg)', { lineHeight: 'var(--lh-normal)' }],
        'tide-md': ['var(--text-md)', { lineHeight: 'var(--lh-normal)' }],
        'tide-sm': ['var(--text-sm)', { lineHeight: 'var(--lh-normal)' }],
        'tide-xs': ['var(--text-xs)', { lineHeight: 'var(--lh-normal)' }],
        'mono-md': [
          'var(--mono-md)',
          { letterSpacing: 'var(--ls-label)', lineHeight: '1' },
        ],
        'mono-sm': [
          'var(--mono-sm)',
          { letterSpacing: 'var(--ls-label)', lineHeight: '1' },
        ],
        'mono-xs': [
          'var(--mono-xs)',
          { letterSpacing: 'var(--ls-wide)', lineHeight: '1' },
        ],
        'mono-2xs': [
          'var(--mono-2xs)',
          { letterSpacing: 'var(--ls-wider)', lineHeight: '1' },
        ],
      },
      fontWeight: {
        heavy: '800',
        black: '900',
      },
      spacing: {
        'tide-1': 'var(--space-1)',
        'tide-2': 'var(--space-2)',
        'tide-3': 'var(--space-3)',
        'tide-4': 'var(--space-4)',
        'tide-5': 'var(--space-5)',
        'tide-6': 'var(--space-6)',
        'tide-7': 'var(--space-7)',
        'tide-8': 'var(--space-8)',
        'tide-9': 'var(--space-9)',
        'tide-10': 'var(--space-10)',
        'tide-12': 'var(--space-12)',
        'tide-14': 'var(--space-14)',
        gutter: 'var(--space-6)',
        sidebar: 'var(--sidebar-w)',
        'sidebar-min': 'var(--sidebar-w-min)',
        topbar: 'var(--topbar-h)',
      },
      borderRadius: {
        'tide-xs': 'var(--r-xs)',
        'tide-sm': 'var(--r-sm)',
        'tide-md': 'var(--r-md)',
        'tide-lg': 'var(--r-lg)',
        'tide-xl': 'var(--r-xl)',
        'tide-2xl': 'var(--r-2xl)',
        'tide-3xl': 'var(--r-3xl)',
        'tide-4xl': 'var(--r-4xl)',
        'tide-5xl': 'var(--r-5xl)',
        'tide-6xl': 'var(--r-6xl)',
        pill: 'var(--r-pill)',
      },
      boxShadow: {
        tile: 'var(--shadow-tile)',
        cell: 'var(--shadow-cell)',
        btn: 'var(--shadow-btn)',
        modal: 'var(--shadow-modal)',
        toast: 'var(--shadow-toast)',
        avatar: 'var(--shadow-avatar)',
      },
      transitionTimingFunction: {
        spring: 'var(--ease-spring)',
      },
      transitionDuration: {
        fast: 'var(--dur-fast)',
        base: 'var(--dur-base)',
        slow: 'var(--dur-slow)',
        bar: 'var(--dur-bar)',
      },
      width: {
        sidebar: 'var(--sidebar-w)',
        'sidebar-min': 'var(--sidebar-w-min)',
      },
    },
  },
  plugins: [],
};

export default config;
