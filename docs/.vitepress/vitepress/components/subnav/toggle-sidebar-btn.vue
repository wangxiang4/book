<script lang="ts" setup>
import { computed } from 'vue'
import subNavLocale from '../../../i18n/component/sub-nav.json'
import ToggleButton from '../icons/toggle-button.vue'
import { useData } from 'vitepress'
const { lang } = useData(), locale = computed(() => subNavLocale[lang.value])
</script>

<template>
  <div class="sidebar-button flex items-center">
    <ElIcon :size="20" class="mr-2">
      <ToggleButton />
    </ElIcon>
    <span class="leading-6">{{ locale['text'] }}</span>
  </div>
</template>

<style>
.sidebar-button {
  cursor: pointer;
  color: var(--text-color);
}

.sidebar-button .icon {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
}
</style>
