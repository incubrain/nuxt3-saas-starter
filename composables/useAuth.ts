import { logout } from './supabase/auth/logout'
import { refresh, getCurrent } from './supabase/auth/session'
import { update, requestResetEmail } from './supabase/auth/password'
import {
  registerWithEmail,
  registerWithOAuth,
  bulkRegisterWithEmail
} from './supabase/auth/register'
import { loginWithEmail, loginWithOAuth } from './supabase/auth/login'

export default function useAuth() {
  const showResetForm = ref(false)

  return {
    login: {
      withEmail: loginWithEmail,
      withOAuth: loginWithOAuth
    },
    logout,
    register: {
      withEmail: registerWithEmail,
      withOauth: registerWithOAuth,
      bulkWithEmail: bulkRegisterWithEmail
    },
    password: {
      requestResetEmail,
      update,
      toggleResetForm: (newValue: boolean) => {
        console.log('toggleResetForm')
        showResetForm.value = newValue
      }
    },
    showResetForm: computed(() => showResetForm.value),
    session: {
      refresh,
      getCurrent
    }
  }
}
