import type { UserConfig } from 'vitepress'
import { sidebars } from './config/sidebars'
import { nav } from './config/nav'
import { imagePlugin } from './plugins/image'
import { linkPlugin } from './plugins/link'
import tableWrapper from './plugins/table-wrapper'
import mathjax from './plugins/mathjax'
import { ariaHidden } from './plugins/permalink';
import createWrapperContainer from './plugins/wrapper'
import mdContainer from 'markdown-it-container'

export default {
  base: "/",
  title: 'philosophy',
  themeConfig: {
    sidebars,
    nav
  },
  markdown: {
    config: (md) => {
      md.use(tableWrapper)
      md.use(mathjax)
      md.use(mdContainer, 'wrap', createWrapperContainer(md))
      imagePlugin(md, {
        lazyLoading: true,
        asyncDecoding: true
      })
      linkPlugin(md, {
        target: '_blank',
        rel: 'noreferrer'
      })
    },
    anchor: {
      permalink: ariaHidden({
        symbol: `<span>🔗</span>`,
        placement: 'before',
      }),
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
} as UserConfig

const customElements = [
  'mjx-container',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
]
