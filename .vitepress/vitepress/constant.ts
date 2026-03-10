import { useBreakpoints } from '@vueuse/core';
import sidebar from '../dictionary/pages/sidebar.json'
import { ensureStartingSlash } from '~/utils'

export const breakpoints = {
  sm: 480,
  md: 768,
  lg: 960,
  xlg: 1280,
  xxl: 1440,
  max: 1680
}

export const deviceBreakpoints = useBreakpoints(breakpoints)

export const homePage = (): string => ensureStartingSlash(sidebar[0].link)
