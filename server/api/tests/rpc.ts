import supabaseClient from '../../utils/supabaseClient'
import { validateWithZod } from '../../../utils/validation'
import * as z from '../../../types/zod'

export default defineEventHandler(async () => {
  const client = supabaseClient()

  try {
    const { data, error } = await client.rpc('get_users_many', {
      p_user_id: 1
    })

    if (error) {
      logger.error(`Error getting user: ${error.message}`)
      throw new Error(`Error getting user: ${error.message}`)
    }

    if (!data) {
      logger.error('No user found')
      throw new Error('No user found')
    }

    const users = validateWithZod(z.UserValidation, data)

    // Log success message
    logger.info('User data retrieved successfully')

    return { users }
  } catch (err: any) {
    // Log unhandled errors
    logger.error(`Unhandled error: ${err.message}`)
    throw err
  }
})
