// import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px'
      }
    },
    extend: {
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-base": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
        magnum: {
          '50': '#95acff',
          '100': '#7f9bff',
          '200': '#6a8aff',
          '300': '#557aff',
          '400': '#4069ff',
          '500': '#2b59ff',
          '600': '#2650e5',
          '700': '#2247cc',
          '800': '#1e3eb2',
          '900': '#193599',
          '950': '#152c7f'
        },
        'dark-base': '#423b56',
        'dark-lighten5': '#c2b8d9',
        'dark-lighten4': '#a79dbd',
        'dark-lighten3': '#8c83a2',
        'dark-lighten2': '#726a88',
        'dark-lighten1': '#5a526e',
        'dark-darken1': '#2b253f',
        'dark-darken2': '#161129',
        'dark-darken3': '#000015',
        'dark-darken4': '#000000',
      },
      backgroundImage: {
        'hero-bg': "url('$lib/images/hero-bg.png')"
      },
      boxShadow: {
        "4xl": "0 10px 20px 0 rgba(0,0,0,.1)",
        "3xl": "0 20px 40px 0 rgb(0 0 0 / 8%)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        paytone: ["Paytone One", "sans-serif"],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol'
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'SF Mono',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'monospace'
        ]
      },
      fontSize: {
        'f1': ' 3rem',
        'f2': '2.25rem',
        'f3': '1.5rem',
        'f4': '1.25rem',
        'f5': ' 1rem',
        'f6': '.875rem',
        'f7': '.75rem',
        'f8': '.5rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              position: 'relative',
              borderRadius: theme('borderRadius.md')
            }
          }
        }
      })
    }
  },
  plugins: [
    typography,
    plugin(function ({ addVariant, matchUtilities, theme }) {
      addVariant('hocus', ['&:hover', '&:focus'])
      // Square utility
      matchUtilities(
        {
          square: (value) => ({
            width: value,
            height: value
          })
        },
        { values: theme('spacing') }
      )
    })
  ]
}