<script setup lang="ts">
  import { useToc } from '~/composables/use-toc'
  import { renderMarkup } from '~/utils'
  const headers = useToc()
</script>

<template>
  <div class="toc-sidebar">
    <el-anchor :offset="70">
      <el-anchor-link
        v-for="{ link, text, children } in headers"
        :key="link"
        :href="link"
        :title="text"
      >
        <div v-html="renderMarkup(text)" />
        <template v-if="children" #sub-link>
          <el-anchor-link
            v-for="{ link: childLink, text: childText } in children"
            :key="childLink"
            :href="childLink"
            :title="text"
          >
            <div v-html="renderMarkup(childText)" />
          </el-anchor-link>
        </template>
      </el-anchor-link>
    </el-anchor>
  </div>
</template>

<style lang="scss">
.el-anchor__item {
  .el-anchor__link > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
