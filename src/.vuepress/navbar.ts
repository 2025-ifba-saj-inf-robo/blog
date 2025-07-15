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
    text: "Tinkercad",
    icon: "laptop-code",
    link: "https://www.tinkercad.com/joinclass/5F7QFGMPQ",
  },
  {
    text: "Para Entrega",
    icon: "paper-plane",
    link: "/category/entrega/",
  },
  {
    text: "Print",
    icon: "print",
    link: "/posts/print.md"
  },
  {
    text: "Timeline",
    icon: "clock",
    link: "/timeline/",
  },
]);
