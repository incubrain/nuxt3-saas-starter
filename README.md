# Nuxt 3 SaaS Starter Template

**_Disclaimer: This template is under active development and is not yet production-ready. We are
actively working on the development of this template and highly recommend not using it for your live
projects until its completion. For updates, you can follow our progress in the to-do list below._**

## Features

- [💚 Nuxt 3](https://nuxt.com/) - SSR, ESR, File-based routing, components auto importing, modules,
  layouts etc.

- ⚡️ [Vite](https://vitejs.dev/) - Instant HMR.

- 🎨 [Tailwind CSS](https://tailwindcss.com) - The gold standard CSS utility framework

- 😃 [Nuxthq/ui]() - elegant nuxt 3 components/icons using Tailwind.

- 🔥 The `<script setup>` syntax.

- 🍍 [State Management via Pinia](https://pinia.esm.dev), see [./composables/user.ts](./composables/user.ts).

- 🌐 Vercel for easy hosting.

- ⚠️ [Sentry/Vue](https://docs.sentry.io/platforms/javascript/guides/vue/) for error and performance monitoring.

- 🤑 [Stripe](https://stripe.com/docs/js) Billing for payments.

- 🏗️ [Supabase](https://supabase.com/) for Auth, storage, database and realtime needs.

- 📖 SEO Optimized, [unlighthouse](https://unlighthouse.dev/) included for SEO tracking.

- 👮‍♂️ Data validation, incoming data validated with [Zod](https://zod.dev/), forms with [vee-validate](https://vee-validate.logaretm.com/v4/).

- 🔒 Secure, uses [Nuxt/Security](https://nuxt-security.vercel.app/) to enhance application security.

- 🌗 light/dark mode.

- 🦾 TypeScript, of course.

- 📲 [PWA](https://github.com/vite-pwa/nuxt) with offline support and auto update behavior.

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [Images](https://tailwindcss.nuxtjs.org/) - optimized public/provider images.
- [Partytown](https://tailwindcss.nuxtjs.org/) - improved website performance by offloading
  third-party scripts.
- [Security](https://tailwindcss.nuxtjs.org/) - the instant on-demand atomic CSS engine.
- [Devtools](https://tailwindcss.nuxtjs.org/) - the instant on-demand atomic CSS engine.
- [Unlighthouse](https://tailwindcss.nuxtjs.org/) - the instant on-demand atomic CSS engine.
- [Vitest](https://tailwindcss.nuxtjs.org/) - the instant on-demand atomic CSS engine.
- [Pinia](https://pinia.esm.dev/) - intuitive, type safe, light and flexible Store for Vue.
- [VitePWA](https://github.com/vite-pwa/nuxt) - zero-config PWA Plugin for Nuxt 3.

## To-Do List

The following features and improvements are in the works:

- [ ] **User Management:** Implement various user account functionalities, including social sign-on
      options and password recovery.
- [ ] **Database Management:** Configure Schema Management and Database Management systems with
      Supabase.
- [ ] **Config Management:** Set up configuration for Stripe Keys and environment keys for Supabase
      and Stripe.
- [ ] **State Management:** Develop management for Single Page Application (SPA) and Server-Side
      Rendering (SSR) page types using Pinia.
- [ ] **Team Accounts:** Implement functionality for upgrading individual accounts to multi-user
      (team) accounts, account switching, and team administration.
- [ ] **User profile and settings management:** Allow users to update email address, password, other
      account details and settings
- [ ] **Notification system:**
- [ ] **Search functionality**
- [ ] **Rate limit APIs:**
- [ ] **Schema and DB management:** This is done through supabase
- [ ] **Plans and Pricing:** Develop the management of multiple plans, each with distinct features
      and limits.
- [ ] **Stripe Payments:** Integrate with Stripe for subscription payments and handle multiple
      payment-related events.
- [ ] **Support:** Include a ticketing system, live chat, FAQs, and tutorials.
- [ ] **UI and Customization:** Develop a default UI, integrate a design system with theming,
      toasts, and modals using TailwindCSS.
- [ ] **Testing:** Provide manual test scenarios, unit tests, and integration tests using Vitest.
- [ ] **Documentation:** Create documentation and video course

## Initial Setup

1. **Environment Variables:** Duplicate the example.env file and rename it to .env.
2. **Supabase:** Set up Supabase for Authentication and Database functionalities.
3. **Stripe:** Set up Stripe for Subscription payments.

## Upcoming Content

Stay tuned for expansive documentation and a video course covering in-depth details of the project.
This course will be available for a nominal fee, providing you with a comprehensive understanding of
the starter template and how you can maximize its potential.

## Externals Setup

Below are some additional setup tasks that are not directly related to code:

- **Environment Variables:** Create a .env file from the .env_example. This file is for development
  convenience, is .gitignored by default, and should not be added to source control.
- **Supabase:** Follow the instructions to set up Supabase, an essential part of this solution for
  Auth and DB management.
- **Stripe:** Stripe is used for Subscription payments. You will need to set up your Stripe business
  and create products ('Team Plan' and 'Individual Plan') each with a single price.

## Database Setup

Please note that there might be additional setup tasks for the database using Supabase.

## Development Setup

Install dependencies using your preferred package manager:

```bash
npm install
```

## Starting the Development Server

You can start the development server on `http://localhost:3000` with the following command:

```bash
npm run dev
```

## Building for Production

To build the application for production, run:

```bash
npm run build
```

## Previewing the Production Build

You can preview the production build locally with:

```bash
npm run preview
```

## Deployment to Vercel

The deployment process is entirely in your hands, but we recommend Vercel due to its ease of use and
compatibility with Nuxt.js. Below are some general steps to deploy your application to Vercel:

- Sign up or log in to Vercel using your GitHub account.
- Create a new project and import from your repository.
- Configure the environment variables as per your `.env_example` file.
- Vercel will automatically detect the Nuxt app and select appropriate settings.
- Apply a custom domain name, if required.

Remember to also update your Supabase configuration to reflect your new Vercel URL.
