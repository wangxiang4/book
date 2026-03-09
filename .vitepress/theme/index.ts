import ElementPlus from 'element-plus'

import VPApp, { NotFound } from '../vitepress'
import { define } from '../utils/types'
import 'uno.css'
import './style.css'
import type { Theme } from 'vitepress'
import { isClient } from '@vueuse/core'


export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: async ({ app, router }) => {
    app.use(ElementPlus as any)
    if (!isClient) return
    const nprogress = await import('nprogress')
    router.onBeforeRouteChange = nprogress.start
    router.onAfterRouteChanged = nprogress.done
  },
})
