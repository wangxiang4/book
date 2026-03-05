import type { Route } from 'vitepress'
import { renderTeX } from './tex2svg'
import mediumZoom from 'medium-zoom';

const hashRE = /#.*$/, extRE = /(index)?\.(md|html)$/;

export function normalize(path) {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '');
}

export function isActive(route, path) {
  if (path === undefined) {
    return false;
  }
  const routePath = normalize(`/${route.data.relativePath}`);
  const pagePath = normalize(path);
  return routePath === pagePath;
}

export function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}

export function removeExtention(path) {
  return path.replace(/(index)?(\.(md|html))?$/, '') || '/';
}

export const isArray = Array.isArray

export const throttleAndDebounce = (fn: () => any, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>
  let called = false
  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    if (!called) {
      fn()
      called = true
      setTimeout(() => {
        called = false
      }, delay)
    } else {
      timeout = setTimeout(fn, delay)
    }
  }
}

// When match === true, meaning `path` is a string for build regex
export const isActiveLink = (
  route: Route,
  pathPattern: string,
  match?: boolean
) => {
  if (!match) return isActive(route, pathPattern)
  const regex = new RegExp(pathPattern)

  return regex.test(normalize(`/${route.data.relativePath}`))
}

/**
 * Render content by replacing formulas, icons, or custom markers
 * @param content
 * @returns
 */
export function renderMarkup(content: string): string {
  let renderedContent = content.trim()
  const mathInlineRegex = /(?<!\\|\$)\$(?!\$)((?:[^$]|\\\$)*)(?<!\\)\$(?!\$)/g

  // Rendering Mathematical Formulas
  renderedContent = renderedContent.replace(mathInlineRegex, (match, formula: string) =>
    renderTeX(formula.trim()))

  return renderedContent
}

// Initialization clicks the image zoom
export function initImageZoom () {
  setTimeout(() => {
    const zoomImageList= document.querySelectorAll('.doc-content img:not(a img)')
    if (zoomImageList.length > 0) {
       mediumZoom(zoomImageList, { background: 'var(--bg-color)' })
    }
  }, 100)
}
