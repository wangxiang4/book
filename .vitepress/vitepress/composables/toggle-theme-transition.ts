import { nextTick } from 'vue'
import { isDark } from './dark'

export const useThemeTransition = () => {

  const toggle = (p: {element?: HTMLElement; x?: number; y?: number },
                  resolve?: (ctl: boolean) => void) => {

    const isAppearanceTransition =
      // @ts-expect-error
      document.startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isAppearanceTransition) {
      resolve?.(!isDark.value)
      return
    }

    let x: number, y: number = 0

    if (p.x && p.y) {
      x=p.x; y=p.y
    } else if (p.element) {
      const rect = p.element.getBoundingClientRect()
      x = rect.left + rect.width / 2
      y = rect.top + rect.height / 2
    } else {
      resolve?.(!isDark.value)
      return
    }

    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )

    const ratioX = (100 * x) / innerWidth
    const ratioY = (100 * y) / innerHeight
    const referR = Math.hypot(innerWidth, innerHeight) / Math.SQRT2
    const ratioR = (100 * endRadius) / referR

    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(async () => {
      resolve(!isDark.value)
      await nextTick()
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0% at ${ratioX}% ${ratioY}%)`,
        `circle(${ratioR}% at ${ratioX}% ${ratioY}%)`,
      ]
      document.documentElement.animate(
        {
          clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-in',
          fill: 'both',
          pseudoElement: isDark.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        }
      )
    })
  }

  return {
    toggle,
  }
}
