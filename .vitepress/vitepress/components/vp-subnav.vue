<script setup lang="ts">
  import { useSidebar } from '../composables/sidebar'
  import { useBackTop } from '../composables/back-top'
  import ToggleSidebarBtn from './subnav/toggle-sidebar-btn.vue'
  import dict from "../../dictionary/component/sub-nav.json"
  defineEmits(['open-menu'])

  const { hasSidebar } = useSidebar()
  const { shouldShow, scrollToTop } = useBackTop()
</script>

<template>
  <div class="sub-nav py-3">
    <ToggleSidebarBtn
      v-if="hasSidebar"
      @click="$emit('open-menu')"
    />
    <Transition name="shifting">
      <ElLink
        v-show="shouldShow"
        :underline="false"
        size="small"
        @click.prevent.stop="scrollToTop"
      >
        {{ dict['back-top'] }}
      </ElLink>
    </Transition>
  </div>
</template>
