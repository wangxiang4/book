<script setup lang="ts">
  import { useToggle } from '@vueuse/core'
  import { useSidebar } from '~/composables/sidebar'
  import { onMounted, watch } from 'vue'
  import { initImageZoom } from '~/utils'
  import { useRoute } from 'vitepress'
  import { initToggleTheme } from '~/composables/dark'

  const [isSidebarOpen, toggleSidebar] = useToggle(false)
  const { hasSidebar } = useSidebar()
  const route = useRoute()

  watch(
    () => route.path,
    () => initImageZoom()
  )
  onMounted(() => {
    initToggleTheme()
    initImageZoom()
  })
</script>

<template>
  <div class="App">
    <VpOverlay
      :show="isSidebarOpen"
      @click="toggleSidebar(false)"
    />
    <VpNav />
    <VpSubnav
      v-if="hasSidebar"
      @open-menu="toggleSidebar(true)"
    />
    <VpSidebar
      :open="isSidebarOpen"
      @close="toggleSidebar(false)"
    />
    <VpContent />
    <VpTocSidebar />
  </div>
</template>
