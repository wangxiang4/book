/**
 * @fileOverview
 * markdown-it-anchor permalink renderer
 * <p>https://github.com/valeriangalliat/markdown-it-anchor</p>
 * <p>https://github.com/valeriangalliat/markdown-it-anchor/blob/master/test.js</p>
 * @author WangXiang4
 * @since 4/3/25
 */

const position = {
  false: 'push',
  true: 'unshift',
  after: 'push',
  before: 'unshift'
}

const permalinkSymbolMeta = {
  isPermalinkSymbol: true
}

export function renderHref (slug) {
  return `#${slug}`
}

export function renderAttrs (slug){
  return {}
}

const commonDefaults = {
  class: 'header-anchor',
  symbol: '#',
  renderHref,
  renderAttrs
}

export function makePermalink(renderPermalinkImpl) {
  function renderPermalink (opts) {
    opts = Object.assign({}, renderPermalink.defaults, opts)

    return (slug, anchorOpts, state, idx) => {
      return renderPermalinkImpl(slug, opts, anchorOpts, state, idx)
    }
  }

  renderPermalink.defaults = Object.assign({}, commonDefaults)
  renderPermalink.renderPermalinkImpl = renderPermalinkImpl

  return renderPermalink
}

export function mergeDuplicateClassAttrs (attrs) {
  const classValues = [];
  const mergedAttrs = attrs.filter(([key, value]) => {
    if (key !== 'class') {
      return true;
    }
    classValues.push(value);
  });

  if (classValues.length > 0) {
    mergedAttrs.unshift(['class', classValues.join(' ')]);
  }

  return mergedAttrs;
}

// Default renderer(no aria), insert an anchor link inside a headings (H1,H2,H3...).
export const linkInsideHeader = makePermalink((slug, opts, anchorOpts, state, idx) => {
  const linkTokens = [
    Object.assign(new state.Token('link_open', 'a', 1), {
      attrs: mergeDuplicateClassAttrs([
        ...(opts.class ? [['class', opts.class]] : []),
        ['href', opts.renderHref(slug, state)],
        ...(opts.ariaHidden ? [['aria-hidden', 'true']] : []),
        ...Object.entries(opts.renderAttrs(slug, state))
      ])
    }),
    Object.assign(new state.Token('html_inline', '', 0), { content: opts.symbol, meta: permalinkSymbolMeta }),
    new state.Token('link_close', 'a', -1)
  ]

  if (opts.space) {
    const space = typeof opts.space === 'string' ? opts.space : ' '
    const type = typeof opts.space === 'string' ? 'html_inline' : 'text'
    state.tokens[idx + 1].children[position[opts.placement]](Object.assign(new state.Token(type, '', 0), { content: space }))
  }

  state.tokens[idx + 1].children[position[opts.placement]](...linkTokens)
})

Object.assign(linkInsideHeader.defaults, {
  space: true,
  placement: 'after',
  ariaHidden: false
})

// Make it inaccessible to screen readers, abandon aria user.
export const ariaHidden = makePermalink(linkInsideHeader.renderPermalinkImpl)

ariaHidden.defaults = Object.assign({}, linkInsideHeader.defaults, {
  ariaHidden: true
})
