import { define } from '../utils/types'
import type { Theme } from 'vitepress'
import ElementPlus from 'element-plus'
import VpApp from '../vitepress'
import 'uno.css'
import './style.css'
import { isClient } from '@vueuse/core'

export default define<Theme>({
  Layout: VpApp,
  enhanceApp: async ({ app, router }) => {
    app.use(ElementPlus as any)
    if (!isClient) return
    const nprogress = await import('nprogress')
    router.onBeforeRouteChange = nprogress.start as any
    router.onAfterRouteChanged = nprogress.done as any
  },
})
