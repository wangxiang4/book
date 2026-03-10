import { define } from '../utils/types'
import type { Theme } from 'vitepress'
import ElementPlus from 'element-plus'
import VpApp from '../vitepress'
import 'uno.css'
import './style.css'
import { isClient } from '@vueuse/core'
import { base } from '../utils'

export default define<Theme>({
  Layout: VpApp,
  enhanceApp: async ({ app, router }) => {
    app.use(ElementPlus as any)
    if (!isClient) return
    const nprogress = await import('nprogress')
    router.onBeforeRouteChange = (to) =>
      to !== base && nprogress.start() as any
    router.onAfterRouteChange = (to) =>
      to !== base &&  nprogress.done() as any
  },
})
