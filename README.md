# Mac's Nuxt 3 Starter (WIP)

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Opinionated

- Nuxt 3
  - [@nuxt/content:](https://content.nuxtjs.org/guide/writing/content-directory) For rendering static pages using Markdown files
  - [@nuxtjs/color-mode:](https://color-mode.nuxtjs.org/) easy light/dark mode
  - [@nuxtjs/partytown:](https://github.com/nuxt-modules/partytown) extract blocking JS to a separate thread
  - [@nuxt/image-edge:](https://v1.image.nuxtjs.org/get-started/) Optimize images to improve SEO
  <!-- !todo replace with supabase-js, less likely to have breaking changes over time -->
  - [@nuxt/supabase:](https://supabase.nuxtjs.org/get-started) for authentication, database, and storage
  - [@nuxt/devtools:](https://devtools.nuxtjs.org/guide) for improved debugging and project scope
  - [@pinia/nuxt:](https://pinia.vuejs.org/ssr/nuxt.html) for state management
  - [nuxt-icon:](https://icones.js.org/) Access to 100k free icons, view [here](https://icones.js.org/)
  - [@unlighthouse/nuxt:](https://unlighthouse.dev/guide/getting-started) google lighthouse for your whole website
- TypeScript
- Formatting
  - [Prettier:](https://prettier.io/) For formatting code
  - [EditorConfig:](https://editorconfig.org/) For consistent coding styles between different editors
  - [Eslint:]()
  - [@nuxtjs/eslint-config-typescript]()
  - [@typescript-eslint/parser:]()
  - [eslint-plugin-vue:]()
- Tailwind 3
  - [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
  - [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [Recommended VS Code Extensions](https://github.com/Drew-Macgibbon/nuxt3-starter/blob/main/.vscode/extensions.json)
- [Wakatime:](https://wakatime.com) For tracking time spent on projects
<!--
(If you’re not prompted, press F1 or ⌘ + Shift + P then type WakaTime API Key.)
Your coding stats are visible in your WakaTime dashboard: https://wakatime.com/dashboard
 -->

## To-do

- [ ] [vitest setup]() for unit testing
- [ ] Middleware Demo
- [ ] Supabase Auth pages, login, register, forgot password, etc.
- [ ] Assets, dynamic loading, nuxt image module
- [ ] Nuxt Config setup

## Setup

````bash
# npm
npm install

## Development Server

```bash
npm run dev
````

configure unlighthouse in the nuxt.config.js file. When running `npm run dev` click on the link in the terminal to view your lighthouse reports.

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
