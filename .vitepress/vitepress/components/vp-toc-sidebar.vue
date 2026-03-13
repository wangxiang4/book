<script setup lang="ts">
  import { useToc } from '~/composables/use-toc'
  import { renderMarkup } from '~/utils';
  import { useSidebar } from '~/composables/sidebar';
  import { watch, nextTick } from 'vue';
  import { headerLevel } from '../../plugins/headers'
  import { renderHref } from '../../plugins/permalink'
  import { useRoute } from 'vitepress'

  const headers = useToc()
  const { hasSidebar } = useSidebar()
  const route = useRoute()

  function findPreviousHeader (element: HTMLElement) {
    const targetTop = element.getBoundingClientRect().top + window.scrollY
    const selector = headerLevel.map(l => `h${l}`).join(',')
    const headings = [...document.querySelectorAll(selector)]

    const previousHeaders = headings.filter(h => {
      const hTop = h.getBoundingClientRect().top + window.scrollY
      return hTop < targetTop
    })

    return previousHeaders.length > 0 ? previousHeaders.at(-1) : null
  }

  function autoActiveAnchorLink (element: HTMLElement) {
    const level = Number(element.tagName.slice(1))
    if (!headerLevel.includes(level)) {
      const slug = renderHref(findPreviousHeader(element)?.id)
      const links = document.querySelectorAll<HTMLAnchorElement>('.toc-sidebar .el-anchor__link')
      const marker = document.querySelector('.toc-sidebar .el-anchor__marker') as HTMLElement
      const link = Array.from(links).find(l => l.hash === slug) as HTMLAnchorElement
      link.classList.add('is-active')
      marker.setAttribute('style', `top: ${link.offsetTop + 8}px; opacity: 1;`)
    }
  }

  function scrollToAnchor(offset = 60) {
    const hash = window.location.hash.replace('#', '')
    const target = document.getElementById(hash)
    if (!target) return
    setTimeout(()=> {
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top })
    },50)
    autoActiveAnchorLink(target)
    const activeLink = document.querySelector('.toc-sidebar .el-anchor__link.is-active')
    activeLink && activeLink.scrollIntoView({ block: 'nearest' })
  }

  watch(() => route.path, () => nextTick(() => scrollToAnchor()), { immediate: true })
</script>

<template>
  <div v-if="hasSidebar" class="toc-sidebar">
    <ElAnchor :offset="60" :bound="16">
      <ElAnchorLink
        v-for="{ link, text, children } in headers"
        :key="link"
        :href="link"
        :title="text"
      >
        <div v-html="renderMarkup(text)" />
        <template v-if="children" #sub-link>
          <ElAnchorLink
            v-for="{ link: childLink, text: childText } in children"
            :key="childLink"
            :href="childLink"
            :title="text"
          >
            <div v-html="renderMarkup(childText)" />
          </ElAnchorLink>
        </template>
      </ElAnchorLink>
    </ElAnchor>
  </div>
</template>

<style lang="scss">
.el-anchor__item {
  .el-anchor__link > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--text-color-light);
  }
}
</style>
