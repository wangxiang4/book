import type { MarkdownRenderer } from 'vitepress'
import { slugify } from '@mdit-vue/shared'

/**
 * Get markdown headers info
 *
 * Extract them into env
 */
export default (md: MarkdownRenderer): void => {
  // extract headers to env
  const render = md.renderer.render.bind(md.renderer)
  md.renderer.render = (tokens, options, env) => {
    const headers = []
    const levels = [2, 3]
    tokens.forEach((token, idx) => {
      if (token.type === 'heading_open') {
        const level = Number(token.tag.slice(1))
        const inline = tokens[idx + 1];
        if (levels.includes(level) && inline.content){
          const slug = slugify(inline.content)
          token.attrSet('id', slug)
          headers.push({
            level,
            title: inline.content,
            slug
          })
        }
      }
    })
    env.headers = headers
    return render(tokens, options, env)
  }
}
