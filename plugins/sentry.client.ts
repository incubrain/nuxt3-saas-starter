import * as Sentry from '@sentry/vue'

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp
  const dsn = process.env.SENTRY_DSN
  const environment = process.env.NODE_ENV
  const router = useRouter()
  Sentry.init({
    app,
    environment,
    dsn,
    integrations: [
      new Sentry.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/]
      }),
      new Sentry.Replay()
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
