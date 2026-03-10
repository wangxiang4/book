<script setup lang="ts">
  import { isClient } from '@vueuse/core'
  import { useSidebar } from '~/composables/sidebar'
  import { useFullScreen } from '~/composables/fullscreen'
  import { useToggleWidgets } from '~/composables/toggle-widgets'
  import { deviceBreakpoints } from '~/constant'

  const { hasSidebar } = useSidebar()
  const { toggleFullScreen, isFullScreen } = useFullScreen()
  const close = () => toggleFullScreen(false)
  const isDesktop = deviceBreakpoints.greater('md')

  useToggleWidgets(isFullScreen, () => isClient && isDesktop.value && close())
</script>

<template>
  <header :class="{ navbar: true, 'has-sidebar': hasSidebar }">
    <VpNavbar :full-screen="isFullScreen" @toggle="toggleFullScreen" />
    <VpNavFull :full-screen="isFullScreen" @close="close" />
  </header>
</template>
