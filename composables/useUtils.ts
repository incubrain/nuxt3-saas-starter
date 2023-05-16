import { dynamicAsset } from './utils/assets'
import { validateWithZod } from './utils/validation'

export default {
  image: {
    dynamic: dynamicAsset
  },
  zod: {
    validation: validateWithZod
  }
}
