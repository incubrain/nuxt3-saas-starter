import { logout } from './supabase/auth/logout'
import { refresh, getCurrent } from './supabase/auth/session'
import { update, requestResetEmail } from './supabase/auth/password'
import {
  registerWithEmail,
  registerWithOAuth,
  bulkRegisterWithEmail
} from './supabase/auth/register'
import { loginWithEmail, loginWithOAuth } from './supabase/auth/login'



function checkSession() {
  let session
  // check local storage for session
  session = localStorage.getItem('supabase.auth.token')
  // if session exists, check if it's expired
  if (session) {
    const { expires_at } = JSON.parse(session)
    const isExpired = new Date(expires_at) < new Date()
    if (isExpired) {
      // if expired, refresh
      refresh()
    } else {
      return session
    }
  }
  return session
}



  // if not expired, return session

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
