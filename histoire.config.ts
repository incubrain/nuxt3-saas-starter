import { defineConfig } from "histoire";
import { HstNuxt } from "@histoire/plugin-nuxt";

export default defineConfig({
  plugins: [HstNuxt()],
  theme: {
    title: "Acme Inc.",
    // logo: {
    //   square: './img/square.png',
    //   light: './img/light.png',
    //   dark: './img/dark.png'
    // },
    // logoHref: 'https://acme.com',
    // favicon: './favicon.ico',
  },
});
