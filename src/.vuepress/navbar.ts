import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Publicações",
    icon: "pen-to-square",
    link: "/article/",
  },
  {
    text: "Categoria",
    icon: "list",
    link: "/category/",
  },
  {
    text: "Tag",
    icon: "tag",
    link: "/tag/",
  },
  {
    text: "Exercícios",
    icon: "book",
    link: "/category/exercicio/",
  },
  {
    text: "Trabalho",
    icon: "laptop-code",
    link: "/category/trabalho/",
  },
  {
    text: "Para Entrega",
    icon: "paper-plane",
    link: "/category/entrega/",
  },
  {
    text: "Timeline",
    icon: "clock",
    link: "/timeline/",
  },
]);
