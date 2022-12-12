# Mac's Nuxt 3 Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Opinionated

- Nuxt 3
  - [@nuxt/content:](https://content.nuxtjs.org/guide/writing/content-directory) For rendering static pages using Markdown files
  - [@nuxtjs/color-mode:](https://color-mode.nuxtjs.org/) easy light/dark mode
  - [@nuxtjs/partytown:](https://github.com/nuxt-modules/partytown) extract blocking JS to a separate thread
- TypeScript
- [Eslint:]()
  - [@nuxtjs/eslint-config-typescript]()
    [@typescript-eslint/parser:]()
    [eslint-plugin-vue:]()
- Tailwind 3
  - [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
  - [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [Recommended VS Code Extensions](https://github.com/Drew-Macgibbon/nuxt3-starter/blob/main/.vscode/extensions.json)
- [Wakatime:](https://wakatime.com) For tracking time spent on projects 
<!-- 
(If you’re not prompted, press F1 or ⌘ + Shift + P then type WakaTime API Key.)
Your coding stats are visible in your WakaTime dashboard: https://wakatime.com/dashboard
 -->
- [Historie:](https://histoire.dev/) For developing components in isolation (Storybook alternative)
  - [@histoire/plugin-nuxt](https://github.com/histoire-dev/histoire/tree/main/packages/histoire-plugin-nuxt)
  

## To-do

- [ ] [Cypress Setup](https://www.cypress.io/)
- [ ] [TS Config](https://www.cypress.io/)
- [ ] Composable Demo
- [ ] Middleware Demo
- [ ] Auth Demo
- [ ] Assets Demo
- [ ] Plugins Demo
- [ ] Nuxt Config setup

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
