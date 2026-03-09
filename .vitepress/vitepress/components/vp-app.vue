<script setup lang="ts">
  import { useToggle } from '@vueuse/core'
  import { useSidebar } from '../composables/sidebar'
  import { useToggleWidgets } from '../composables/toggle-widgets'
  import { breakpoints } from '../constant'
  import VPNav from './vp-nav.vue'
  import VPSubNav from './vp-subnav.vue'
  import VPSidebar from './vp-sidebar.vue'
  import VPContent from './vp-content.vue'
  import VPOverlay from './vp-overlay.vue'
  import { onMounted, watch } from 'vue'
  import { initImageZoom } from '~/utils'
  import { useRoute } from 'vitepress'
  import VPTocSidebar from './vp-toc-sidebar.vue';

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
    <VPOverlay :show="isSidebarOpen" @click="toggleSidebar(false)" />
    <VPNav />
    <VPSubNav v-if="hasSidebar" @open-menu="toggleSidebar(true)" />
    <VPSidebar :open="isSidebarOpen" @close="toggleSidebar(false)">
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </VPSidebar>
    <VPContent/>
    <VPTocSidebar />
  </div>
</template>
