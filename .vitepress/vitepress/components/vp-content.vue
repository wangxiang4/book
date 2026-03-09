<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { useSidebar } from '../composables/sidebar'
import VPDocContent from './vp-doc-content.vue'
import VPNotFound from './vp-not-found.vue'

const route = useRoute()
const isNotFound = computed(() => route.component === VPNotFound)
const { hasSidebar } = useSidebar()
</script>

<template>
  <main :class="{ 'page-content': true, 'has-sidebar': hasSidebar }">
    <VPNotFound v-if="isNotFound" />
    <VPDocContent v-else/>
  </main>
</template>
