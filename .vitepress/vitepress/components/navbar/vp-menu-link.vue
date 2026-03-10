<script lang="ts" setup>
  import { useRoute, useRouter } from 'vitepress'
  import { isActiveLink } from '~/utils'

  import type { Link } from '~/types'
  defineProps<{
    item: Link
  }>()

  const route = useRoute(), router = useRouter()
</script>

<template>
  <div
    :class="{
      'is-menu-link': true,
      active: isActiveLink(
        route,
        item.activeMatch
      ),
    }"
    @click="router.go(item.link)"
  >
    {{ item.text }}
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as *;
.is-menu-link {
  display: block;
  padding: 0 18px;
  line-height: calc(var(--header-height) - 3px);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &.active {
    border-bottom-color: var(--brand-color);
  }

  &:hover {
    color: var(--brand-color);
  }
}
</style>
