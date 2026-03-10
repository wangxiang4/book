<script setup lang="ts">
  import { useData } from 'vitepress';
  import { useSidebar } from '~/composables/sidebar'

  const { page } = useData()
  const { hasSidebar } = useSidebar()
</script>

<template>
  <main :class="{ 'page-content': true, 'has-sidebar': hasSidebar }">
    <VpNotFound v-if="page.isNotFound" />
    <VpDocContent v-else/>
  </main>
</template>
