<script setup lang="ts">
defineProps<{
  href?: string
}>()
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    class="link-item"
    :class="{ link: href }"
    :href="href"
  >
    <slot />
  </component>
</template>

<style scoped>
.link-item {
  display: flex;
  align-items: center;
}
</style>
