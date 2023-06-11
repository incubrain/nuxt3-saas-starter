import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { z } from 'zod'

// Define a custom phone number validator
export const phoneNumberValidator = z.string().refine(
  (value) => {
    // Parse the phone number
    const phoneNumber = parsePhoneNumberFromString(value)

    // If the phone number is valid, return true, otherwise return false
    return phoneNumber?.isValid() ?? false
  },
  {
    // This message will be used if the validation fails
    message: 'Invalid phone number'
  }
)
