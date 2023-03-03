import { defineTheme } from 'pinceau'
import theme from '@nuxt-themes/tokens/config'

export default defineTheme({
  alpine: {
    readableLine: '100ch'
  },
  color: {
    primary: theme.color.orange,
  },
  space: {
    16: '3rem'
  },
  elements: {
    container: {
      maxWidth: '80rem',
      padding: {
        mobile: '{space.6}',
        xs: '{space.6}',
        sm: '{space.8}',
        md: '{space.12}'
      }
    },
  },
  prose: {
    p: {
      fontSize: '16px'
    },
  }
})
