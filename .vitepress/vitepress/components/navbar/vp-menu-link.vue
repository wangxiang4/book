<script lang="ts" setup>
import { useRoute } from 'vitepress'
import VPLink from '../common/vp-link.vue'
import { isActiveLink } from '../../utils'

import type { Link } from '../../types'
defineProps<{
  item: Link
}>()

const route = useRoute()
</script>

<template>
  <VPLink
    :class="{
      'is-menu-link': true,
      active: isActiveLink(
        route,
        item.activeMatch
      ),
    }"
    :href="item.link"
  >
    {{ item.text }}
  </VPLink>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as *;
.is-menu-link {
  display: block;
  padding: 0 12px;
  line-height: calc(var(--header-height) - 3px);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom-color: var(--brand-color);
  }

  &:hover {
    color: var(--brand-color);
  }

  @include down-to('p-825') {
    padding: 0 10px;
  }
}
</style>
