import { defineClientConfig } from "vuepress/client";
import NumberConverter from "./components/NumberConverter.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("NumberConverter", NumberConverter);
  },
});