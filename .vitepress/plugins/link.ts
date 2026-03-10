import type { MarkdownRenderer } from 'vitepress';
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

export const linkPlugin = (md: MarkdownRenderer, attrs: Record<string, string> ) => {
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const hrefIndex = token.attrIndex('href')
    const targetIndex = token.attrIndex('target')
    const downloadIndex = token.attrIndex('download')
    if (hrefIndex >= 0 && targetIndex < 0 && downloadIndex < 0) {
      const hrefAttr = token.attrs![hrefIndex]
      const url = hrefAttr[1]

      // Only handle internal links, excluding anchor links
      if (EXTERNAL_URL_RE.test(url))
        return self.renderToken(tokens, idx, options)

      const { hash= '' } = new URL(url, 'http://a.org')

      if (!EXTERNAL_URL_RE.test(url) && !hash.startsWith('#')) {
        const cleanUrl = url.replace(/\/+/g, '/')
        hrefAttr[1] = cleanUrl.replace(/^(?:(?:\.?\.\/)*|\/?)public\//, '/')
        // Extra attributes
        Object.entries(attrs).forEach(([key, val]) => token.attrSet(key, val))
      }
    }
    return self.renderToken(tokens, idx, options)
  }
}

