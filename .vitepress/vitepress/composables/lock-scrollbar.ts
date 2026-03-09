import { onUnmounted } from 'vue'
import { isClient } from '@vueuse/core'

export const removeClass = (el: Element, cls: string) => {
  if (!el || !cls.trim()) return
  el.classList.remove(...classNameToArray(cls))
}

export const classNameToArray = (cls = '') =>
  cls.split(' ').filter((item) => !!item.trim())

export const addClass = (el: Element, cls: string) => {
  if (!el || !cls.trim()) return
  el.classList.add(...classNameToArray(cls))
}

export const useLockScreen = () => {
  onUnmounted(() => {
    cleanup()
  })

  const cleanup = () => {
    if (!isClient) return
    removeClass(document.body, 'el-popup-parent--hidden')
  }

  const lock = () => {
    if (!isClient) return
    addClass(document.body, 'el-popup-parent--hidden')
  }

  return {
    lock,
    cleanup,
  }
}
