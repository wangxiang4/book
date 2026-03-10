import type { MarkdownRenderer } from 'vitepress';

export interface Options {
  /**
   * Support native lazy loading for the `<img>` tag.
   * @default false
   */
  lazyLoading?: boolean

  /**
   * Support native asynchronously decode data for the `<img>` tag.
   * @default false
   */
  asyncDecoding?: boolean
}

/** Match https external url */
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

export const imagePlugin = (md: MarkdownRenderer, { lazyLoading, asyncDecoding }: Options = {}) => {
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    let imageUrl = token.attrGet('src')

    if(imageUrl && !EXTERNAL_URL_RE.test(imageUrl)){
      const cleanUrl = imageUrl.replace(/\/+/g, '/')
      token.attrSet('src', cleanUrl.replace(/^(?:(?:\.?\.\/)*|\/?)public\//, '/'))
    }

    // Lazysizes loading images
    if (lazyLoading) {
      token.attrSet('data-src', token.attrGet('src') ?? '')
      token.attrSet('src', '')
      token.attrSet('class', 'lazyload')
    }

    // Asynchronously decode image data,deduce blocking of page rendering
    if (asyncDecoding) {
      token.attrSet('decoding', 'async');
    }

    return self.renderToken(tokens, idx, options)
  }
}
