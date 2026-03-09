<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vitepress';
import { isActive } from '../../utils'

import type { Link } from '../../types'

const props = defineProps<{
  item: Link
}>()
const sidebarItem = ref<HTMLElement>()

const emitEvent = defineEmits(['close'])
const router = useRouter()
const route = useRoute()

const activeLink = computed<boolean>(() =>
  isActive(route, props.item.link)
)


watch([activeLink, sidebarItem], ([active, el]) => {
  if (active && el) {
    el.scrollIntoView?.({ block: 'nearest' })
  }
})
</script>

<template>
  <button
    ref="sidebarItem"
    :class="{
      link: true,
      active: activeLink,
    }"
    :data-path="item.link"
    @click="()=>{
      router.go(item.link)
      emitEvent('close')
    }"
  >
    <p class="link-text">{{ item.text }}</p>
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
  background-color: var(--bg-color-link-active);

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
}
</style>
