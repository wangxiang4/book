import type { MarkdownRenderer } from 'vitepress'
import { slugify } from '@mdit-vue/shared'
import { renderHref } from './permalink'
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
        const inline = tokens[idx + 1]

        token.attrSet('id', slugify(inline.content))
        if (inline.type === 'inline') {
          for (const child of inline.children) {
            child.type === 'link_open' &&
            child.attrGet('class') === 'header-anchor' &&
            child.attrSet('href', renderHref(token.attrGet('id')))
          }
        }

        headLevel.includes(level) && env.headers.push({
          level,
          title: inline.content,
          slug: token.attrGet('id')
        })
      }
    })
    return render(tokens, options, env)
  }
}
