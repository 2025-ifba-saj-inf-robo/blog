({
  // Please visit the URL below for more information:
  // https://shd101wyy.github.io/markdown-preview-enhanced/#/extend-parser

  //ajustes para deixar o MarkdownPreviewEnhanced compatível com o Vuepress Hope
  onWillParseMarkdown: async function (markdown) {
    // Substitui <!-- @include: ... --> por @import "..."
    markdown = markdown.replace(
      /<!--\s*@include:\s*(.+)\s*-->/g,
      (match, p1) => `@import "${p1.trim()}"`
    );

    // Substitui @[code](...) por @import "..."
    markdown = markdown.replace(
      /@\[code\]\((.*?)\)/g,
      (match, p1) => `@import "${p1.trim()}"`
    );
    
    // Substitui imagens ![alt](src) por <figure><img src alt /><figcaption>alt</figcaption></figure>
    markdown = markdown.replace(
      /!\[(.*?)\]\((.*?)\)/g,
      (match, alt, src) => `<figure>\n  <img src="${src}" alt="${alt}" />\n  <figcaption>${alt}</figcaption>\n</figure>`
    );

    // Substitui ::: tipo por !!! tipo e ajusta a indentação
    markdown = markdown.replace(
      /::: (\w+)\s*([\s\S]*?)\s*:::/g,
      (match, type, content) => {
        // Adiciona indentação de 4 espaços a cada linha do conteúdo
        const indentedContent = content
          .split('\n')
          .map(line => line.trim() ? `    ${line}` : line) // Indenta apenas linhas não vazias
          .join('\n');
        return `!!! ${type}\n${indentedContent}`;
      }
    );

    return markdown;
  },

  onDidParseMarkdown: async function (html) {
    return html;
  },
})