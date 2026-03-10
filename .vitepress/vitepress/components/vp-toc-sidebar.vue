<script setup lang="ts">
  import { useToc } from '~/composables/use-toc'
  import { renderMarkup } from '~/utils'
  import {useSidebar} from '~/composables/sidebar';

  const headers = useToc()
  const { hasSidebar } = useSidebar()
</script>

<template>
  <div v-if="hasSidebar" class="toc-sidebar">
    <ElAnchor :offset="70" :bound="120">
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
