<script setup lang="ts">
  import { useToggle } from '@vueuse/core'
  import { useSidebar } from '~/composables/sidebar'
  import { useToggleWidgets } from '~/composables/toggle-widgets'
  import { breakpoints } from '~/constant'
  import { onMounted, watch } from 'vue'
  import { initImageZoom } from '~/utils'
  import { useRoute } from 'vitepress'

  const [isSidebarOpen, toggleSidebar] = useToggle(false)
  const { hasSidebar } = useSidebar()
  const route = useRoute()

  useToggleWidgets(isSidebarOpen, () => {
    if (window.outerWidth >= breakpoints.lg) {
      toggleSidebar(false)
    }
  })
  watch(
    () => route.path,
    () => initImageZoom()
  )
  onMounted(() => initImageZoom())
</script>

<template>
  <div class="App">
    <VpOverlay :show="isSidebarOpen" @click="toggleSidebar(false)" />
    <VpNav />
    <VpSubnav v-if="hasSidebar" @open-menu="toggleSidebar(true)" />
    <VpSidebar :open="isSidebarOpen" @close="toggleSidebar(false)">
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </VpSidebar>
    <VpContent />
    <VpTocSidebar />
  </div>
</template>
