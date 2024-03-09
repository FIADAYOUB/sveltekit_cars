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
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
        magnum: {
          '50': '#fff9ed',
          '100': '#fef2d6',
          '200': '#fce0ac',
          '300': '#f9c978',
          '400': '#f7b155',
          '500': '#f38d1c',
          '600': '#e47312',
          '700': '#bd5711',
          '800': '#964516',
          '900': '#793a15',
          '950': '#411c09'
        }
      },
      fontFamily: {
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