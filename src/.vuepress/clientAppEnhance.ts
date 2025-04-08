import { defineClientAppEnhance } from '@vuepress/client'
import NumberConverter from './components/NumberConverter.vue'
export default defineClientAppEnhance(({ app }) => {
  app.component('NumberConverter', NumberConverter)
})
