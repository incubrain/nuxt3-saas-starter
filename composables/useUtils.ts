import { dynamicAsset } from '@/utils/assets'
import { validateWithZod } from '@/utils/validation'
import { stringNullCheck } from '@/utils/strings'

export default {
  image: {
    dynamic: dynamicAsset
  },
  string: {
    nullCheck: stringNullCheck
  },
  zod: {
    validation: validateWithZod
  }
}
