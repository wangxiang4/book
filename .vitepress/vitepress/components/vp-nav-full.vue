<script setup lang="ts">
  import VpFullScreenMenu from './full-screen/vp-menu.vue'
  import VpFullScreenThemeToggler from './full-screen/vp-theme-toggler.vue'
  import { useLockScreen } from '~/composables/lock-scrollbar'

  defineProps<{
    fullScreen: boolean
  }>()

  const { lock, cleanup } = useLockScreen()
</script>

<template>
  <Transition name="el-zoom-in-top" @enter="lock" @after-leave="cleanup">
    <div v-if="fullScreen" class="full-screen">
      <VpFullScreenThemeToggler />
      <VpFullScreenMenu @close="$emit('close')" />
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.full-screen {
  position: fixed;
  top: calc(var(--header-height) * 2);
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 32px;
  background-color: var(--bg-color);
  overflow-y: auto;
}
</style>
