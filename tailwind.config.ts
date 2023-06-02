import type { Config } from 'tailwindcss'
import c from 'tailwindcss/colors'

export default <Partial<Config>>{
  content: ['./nuxt.config.{js,ts}'],
  theme: {
    extend: {
      colors: {
        secondary: c.indigo
      }
    }
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // https://tailwindcss.com/docs/typography-plugin
    // require('@tailwindcss/forms')
    // https://github.com/tailwindlabs/tailwindcss-forms
  ]
}
