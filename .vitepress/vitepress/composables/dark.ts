import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  storageKey: 'el-theme-appearance',
})

export const toggleDark = useToggle(isDark)

export function initToggleTheme() {
  const htmlEl = document.documentElement
  isDark.value ? htmlEl.classList.add('dark') : htmlEl.classList.remove('dark')
}
