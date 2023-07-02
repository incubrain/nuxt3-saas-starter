import type { Config } from 'tailwindcss'
import c from 'tailwindcss/colors'

export default <Partial<Config>>{
  content: ['./nuxt.config.{js,ts}'],
  theme: {
    extend: {
      colors: {
        secondary: c.indigo,
        error: c.red
      }
    }
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // https://tailwindcss.com/docs/typography-plugin
  ]
}
