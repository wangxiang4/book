import type { MarkdownRenderer } from 'vitepress'
import { slugify } from '@mdit-vue/shared'

const headLevel = [2, 3]

/**
 * Get markdown headers info
 *
 * Extract them into env
 */
export default (md: MarkdownRenderer): void => {
  const render = md.renderer.render.bind(md.renderer)
  md.renderer.render = (tokens, options, env) => {
    env.headers = []
    tokens.forEach((token, idx) => {
      if (token.type === 'heading_open') {
        const level = Number(token.tag.slice(1))
        const content = tokens[idx + 1].content;

        if (headLevel.includes(level)) {
          token.attrGet('id') &&
          token.attrSet('id', slugify(content))
          env.headers.push({
            level,
            title: content,
            slug: token.attrGet('id')
          })
        }

      }
    })
    return render(tokens, options, env)
  }
}
