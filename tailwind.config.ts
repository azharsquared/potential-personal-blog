import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['src/**/*.{astro,md,mdx,tsx}', 'astro.config.mjs'],
  // activates only dark: modifier, not color theme
  darkMode: ['selector'],
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addVariant }) => {
      addVariant('not-last', '&:not(:last-child)');
    }),
  ],
  theme: {
    tabSize: {
      1: '1',
      2: '2',
      4: '4',
      8: '8',
    },
    // must not use extend, will add xs to the end
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // background
        'base-100': 'var(--th-base-100)',
        'base-200': 'var(--th-base-200)',
        'base-300': 'var(--th-base-300)',
        'base-code': 'var(--th-base-code)',
        // text
        content: 'var(--th-content)',
        headings: 'var(--th-headings)',
        captions: 'var(--th-captions)',
        links: {
          DEFAULT: 'var(--th-links)',
          hover: 'var(--th-links-hover)',
          visited: 'var(--th-links-visited)',
        },
        // brand
        primary: {
          DEFAULT: 'var(--th-primary)',
          content: 'var(--th-primary-content)',
        },
        secondary: {
          DEFAULT: 'var(--th-secondary)',
          content: 'var(--th-secondary-content)',
        },
      },
      borderRadius: {
        box: 'var(--th-rounded-box)',
        button: 'var(--th-rounded-button)',
        tag: 'var(--th-rounded-tag)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
        // nonsense
        'a-img': {
          css: {
            'a:hover img': {
              outline: `4px solid ${theme('colors.blue.500')}`,
            },
          },
        },
      }),
    },
  },
};

export default config;
