<script setup lang="ts">
  import VPNavbarMenu from './navbar/vp-menu.vue'
  import VPNavbarThemeToggler from './navbar/vp-theme-toggler.vue'
  import VPNavbarSocialLinks from './navbar/vp-social-links.vue'
  import VPNavbarHamburger from './navbar/vp-hamburger.vue'
  import vpNavMenuExtension from './navbar/vp-menu-extension.vue'

  defineProps<{
    fullScreen: boolean
  }>()

  defineEmits(['toggle'])
</script>

<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <div class="content">
        <VPNavbarMenu class="menu" />
        <VPNavbarHamburger :active="fullScreen" @click="$emit('toggle')" />
      </div>
      <div class="content">
        <vpNavMenuExtension class="menu-extension" />
        <VPNavbarThemeToggler class="theme-toggler" />
        <VPNavbarSocialLinks class="social-links" />
      </div>
    </div>
  </div>
</template>
