import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  //hostname: "https://mister-hope.github.io",

  author: {
    name: "IFBA SAJ",
    url: "https://github.com/leandro-costa",
  },

  copyright: false,

  lastUpdated: false,
  contributors: false,

  logo: "/logo.svg",

  repo: "2025-ifba-saj-inf-robo/blog",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "Material de aula da disciplina de robótica IFBA SAJ",

  displayFooter: true,

  blog: {
    description: "Material de Aula",
    //intro: "/intro.html",

    avatar: "/assets/icon/icon-512.png",
    medias: {
      Email: "mailto:leandro.costa@ifba.edu.br",
      GitHub: "https://github.com/leandro-costa",
    },
  },

  metaLocales: {
    editLink: "Edite esta página no GitHub",
    toc: "Nesta Página",
    date: "Data",
    
  },

  // enable it to preview all changes in time
  hotReload: true,

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // uncomment these if you need TeX support
    math: {
      // install katex before enabling it
      //type: "katex",
      // or install mathjax-full before enabling it
      type: "mathjax",
    },

    // install chart.js before enabling it
    // chartjs: true,

    // install echarts before enabling it
    // echarts: true,

    // install flowchart.ts before enabling it
    // flowchart: true,

    // install mermaid before enabling it
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // install @vue/repl before enabling it
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },

  plugins: {
    blog: {
      excerpt: false,
    },
    search: true,

    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/icon-152.png",
        statusBarColor: "black",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/icon-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/icon-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ]
      },
    },
  },
});
