import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/browser'

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp
  const environment = process.env.NODE_ENV
  console.log('environment: ', environment)
  const router = useRouter()
  Sentry.init({
    app,
    environment,
    dsn: 'https://.ingest.sentry.io/4504583122780160',
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracePropagationTargets: ['localhost', 'dev-server', /^\//]
      })
    ],
    // Set tracesSampleRate, sampleRate to 1.0 to capture 100%, change in production
    sampleRate: 1,
    tracesSampleRate: 1.0,
    // Capture Replay for 10% of all sessions,
    // plus for 100% of sessions with an error
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0
  })
})
