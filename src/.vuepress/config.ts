import { defineUserConfig } from "vuepress";
import umlPlugin from 'markdown-it-plantuml';
import table_captions from 'markdown-it-table-captions'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",
  head: [
    [
      
      "script",
      {
        src: "https://www.jdoodle.com/assets/jdoodle-pym.min.js",
        type: "text/javascript",
      },
    ],
  ],

  lang: "pt-BR",
  title: "2025 Robótica",
  description: "Material das Aulas",

  extendsMarkdown: (md) => {    
    md.use(umlPlugin, {
      openMarker: '```plantuml', 
      closeMarker: '```',
      server: 'https://kroki.io/plantuml/'
    })
    md.use(table_captions)
  },


  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
