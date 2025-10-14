<script lang="ts" setup>
import {useRoute, useRouter} from 'vitepress';
import { isActive } from '../../utils'

import type { Link } from '../../types'

defineProps<{
  item: Link
}>()

const emitEvent = defineEmits(['close'])

const route = useRoute()

// todo tempe teat
const router = useRouter()
function handleLink(link: string) {
  router.go(link)
  emitEvent('close')
}
</script>

<template>
  <button
    :class="{
      link: true,
      active: isActive(route, item.link),
      'flex items-center': item.promotion,
    }"
    :data-path="item.link"
    @click="handleLink(item.link)"
  >
    <p class="link-text">{{ item.text }}</p>
    <VersionTag v-if="item.promotion" class="ml-2 whitespace-normal h-auto min-h-[20px] pb-0.4" :version="item.promotion" />
  </button>
</template>

<style scoped lang="scss">
button {
  all: unset;
  cursor: pointer;
  display: block;
  color: inherit;
  text-decoration: none;
  background: none;
  border: none;
  font: inherit;
  line-height: inherit;
  text-align: inherit;
}

button:focus {
  outline: none;
}

.link:not(.flex) {
  display: block;
}

.link {
  padding: 10px 16px;
  line-height: 1.5;
  font-size: 0.9rem;
  border-radius: 8px;

  .link-text {
    margin: 0;
  }
}

.link:hover .link-text {
  color: var(--brand-color);
  transition: color 0.25s;
}

.link.active {
  background-color: var(--link-active-bg-color);
  .link-text {
    font-weight: 600;
    color: var(--brand-color);
    transition: color 0.25s;
  }
}

.link-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-color-light);
  transition: color 0.5s;
}
</style>
