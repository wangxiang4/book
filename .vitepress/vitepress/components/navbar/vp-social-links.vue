<script setup lang="ts">
  import { useSocialLinks } from '~/composables/social-links'
  const links = useSocialLinks()
</script>

<template>
  <div class="social-links">
    <VpSocialLink v-for="link in links" :key="link.text" v-bind="link" />
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as *;
.social-links {
  height: 24px;
  padding-left: 12px;
}
</style>
