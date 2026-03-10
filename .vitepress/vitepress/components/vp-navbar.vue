<script setup lang="ts">
  import VpNavbarMenu from './navbar/vp-menu.vue'
  import VpNavbarThemeToggler from './navbar/vp-theme-toggler.vue'

  defineProps<{
    fullScreen: boolean
  }>()

  defineEmits(['toggle'])
</script>

<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <div class="content">
        <VpNavbarMenu class="menu" />
        <VpHamburger :active="fullScreen" @click="$emit('toggle')" />
      </div>
      <div class="content">
        <VpMenuExtension class="menu-extension" />
        <VpNavbarThemeToggler class="theme-toggler" />
        <VpSocialLinks class="social-links" />
      </div>
    </div>
  </div>
</template>
