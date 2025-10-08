<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import nprogress from 'nprogress'
import { useData, useRoute } from 'vitepress'
import { useSidebar } from '../composables/sidebar'
import VPHeroContent from './vp-hero-content.vue'
import VPDocContent from './vp-doc-content.vue'
import VPNotFound from './vp-not-found.vue'

const { frontmatter } = useData()
const route = useRoute()
const isNotFound = computed(() => route.component === VPNotFound)
const isHeroPost = computed(() => frontmatter.value.page === true)
const { hasSidebar } = useSidebar()

const props = defineProps<{ isSidebarOpen: boolean }>()

const shouldUpdateProgress = ref(true)

watch(
  () => props.isSidebarOpen,
  (val) => nextTick(() => shouldUpdateProgress.value = !val)
)

watch(
  () => route.path,
  () => {
    if (shouldUpdateProgress) nprogress.done()
  }, { flush: 'post' }
)
</script>

<template>
  <main :class="{ 'page-content': true, 'has-sidebar': hasSidebar }">
    <VPNotFound v-if="isNotFound" />
    <VPHeroContent v-else-if="isHeroPost" />
    <VPDocContent v-else/>
  </main>
</template>
