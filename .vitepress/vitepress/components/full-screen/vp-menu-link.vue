<script lang="ts" setup>
  import type { Link } from '~/types'
  import { isActiveLink } from '~/utils';
  import { useRoute, useRouter } from 'vitepress';

  defineProps<{
    item: Link
  }>()

  const route = useRoute()
  const router = useRouter()
</script>

<template>
  <div
    :class="{
      'full-screen-menu__item': true,
      active: isActiveLink(
        route,
        item.activeMatch
      )
    }"
    @click="router.go(item.link)"
  >
    <p class="title">{{ item.text }}</p>
  </div>
</template>

<style scoped lang="scss">
@use '../../styles/mixins' as *;

.full-screen-menu__item {
  @include with-border;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  padding: 12px 0;
  color: var(--text-color);

  .title {
    padding-left: 14px;
  }

  &.active {
    color: var(--brand-color);
    border-bottom: 1.5px solid var(--brand-color);
  }

  &:hover {
    color: var(--brand-color);
    border-bottom: 1.5px solid var(--brand-color);
  }
}
</style>
