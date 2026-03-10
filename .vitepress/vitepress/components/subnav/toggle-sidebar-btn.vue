<script lang="ts" setup>
  import dict from '../../../dictionary/component/sub-nav.json'
</script>

<template>
  <div class="sidebar-button flex items-center">
    <ElIcon :size="20" class="mr-2">
      <ToggleButton />
    </ElIcon>
    <span class="leading-6">{{ dict['text'] }}</span>
  </div>
</template>

<style>
.sidebar-button {
  cursor: pointer;
  color: var(--text-color);
}
</style>
