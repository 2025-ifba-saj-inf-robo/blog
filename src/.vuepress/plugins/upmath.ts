import { Plugin } from 'vuepress/core'
import MarkdownIt from 'markdown-it'

function encodeLatex(latex: string): string {
  return encodeURIComponent(latex.trim())
}

function renderUpmathImage(latex: string): string {
  const url = `http://i.upmath.me/svg/${encodeLatex(latex)}`
  return `<img src="${url}" />\n`
}

export const upmathPlugin = (): Plugin => ({
  name: 'vuepress-plugin-upmath',

  extendsMarkdown: (md: MarkdownIt) => {
    // Suporte ao bloco de código ```upmath
    const defaultFence = md.renderer.rules.fence?.bind(md.renderer.rules)

    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
      const token = tokens[idx]

      if (token.info.trim() === 'upmath') {
        return renderUpmathImage(token.content)
      }

      return defaultFence ? defaultFence(tokens, idx, options, env, self) : ''
    }
  }
})
