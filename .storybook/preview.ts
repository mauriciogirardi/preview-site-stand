import '../src/app/globals.css'

import type { Parameters } from '@storybook/react'

// export const decorators = [
//   (Story) => ()
// ]

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: 'fullscreen'
}
