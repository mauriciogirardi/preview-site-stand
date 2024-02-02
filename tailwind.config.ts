import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        gray: {
          700: '#455056',
          800: '#404a50',
          900: '#384146'
        },
        yellow: {
          500: '#ffbf00'
        }
      },
      fontFamily: {
        sans: 'var(--font-montserrat)'
      }
    }
  },
  plugins: []
}
export default config
