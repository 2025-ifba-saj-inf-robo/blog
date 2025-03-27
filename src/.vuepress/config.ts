import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "pt-BR",
  title: "Blog",
  description: "Material de aula",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
