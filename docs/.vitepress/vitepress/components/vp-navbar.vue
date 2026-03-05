<script setup lang="ts">
import { useData } from 'vitepress'

import VPNavbarMenu from './navbar/vp-menu.vue'
import VPNavbarThemeToggler from './navbar/vp-theme-toggler.vue'
import VPNavbarSocialLinks from './navbar/vp-social-links.vue'
import VPNavbarHamburger from './navbar/vp-hamburger.vue'
import vpNavMenuExtension from './navbar/vp-menu-extension.vue'

const { theme } = useData()

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
        <vpNavMenuExtension class="menu-extension" />
        <VPNavbarThemeToggler class="theme-toggler" />
        <VPNavbarSocialLinks class="social-links" />
        <VPNavbarHamburger
            :active="fullScreen"
            class="hamburger"
            @click="$emit('toggle')"
        />
      </div>
    </div>
  </div>
</template>
