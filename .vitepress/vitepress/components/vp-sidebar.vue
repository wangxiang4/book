<script lang="ts" setup>
  import { useSidebar } from '~/composables/sidebar'

  defineProps<{ open: boolean }>()
  defineEmits(['close'])

  const { sidebars, hasSidebar } = useSidebar()
</script>

<template>
  <div v-if="hasSidebar" :class="{ sidebar: true, open }">
    <ElScrollbar class="scrollbar">
      <div class="sidebar-groups">
        <section v-for="(item, key) of sidebars"
                 :key="key"
                 class="sidebar-group"
        >
          <p class="sidebar-group__title">
            {{ item.text }}
          </p>
          <VpSidebarLink
            v-for="(child, childKey) in item.children"
            :key="childKey"
            :item="child"
            @close="$emit('close')"
          />
        </section>
      </div>
    </ElScrollbar>
  </div>
</template>
