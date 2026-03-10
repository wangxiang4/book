<script setup lang="ts">
  import CommonThemeToggler from '../common/vp-theme-toggler.vue'
  import { toggleDark } from '~/composables/dark'
  import { useThemeTransition } from '~/composables/toggle-theme-transition'

  const { toggle } = useThemeTransition()

  function toggleTheme(event: MouseEvent) {
    toggle({ x: event.x, y: event.y }, toggleDark)
  }
</script>

<template>
  <div
    class="full-screen-theme-toggler"
    @click="toggleTheme"
  >
    <span>Theme</span>
    <CommonThemeToggler />
  </div>
</template>

<style lang="scss" scoped>
.full-screen-theme-toggler {
  display: flex;
  padding: 12px 14px;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color-soft);
}
</style>
