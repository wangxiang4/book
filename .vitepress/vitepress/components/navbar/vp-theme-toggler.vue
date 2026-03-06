<script setup lang="ts">
  import CommonThemeToggler from '../common/vp-theme-toggler.vue'
</script>

<template>
  <div class="theme-toggler-content">
    <CommonThemeToggler />
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as *;
.theme-toggler-content {
  @include with-bg;
  background-color: transparent;
  display: none;
  border-radius: 50%;
  height: 24px;
  padding: 0 12px;

  @include up-from('md') {
    display: flex;
    align-items: center;
  }
}
</style>
