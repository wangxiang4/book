<script lang="ts" setup>
  import type { Link } from '~/types'
  import { computed, ref, watch } from 'vue'
  import { useRoute, useRouter } from 'vitepress';
  import { isActive } from '~/utils'

  const props = defineProps<{
    item: Link
  }>()
  defineEmits(['close'])

  const sidebarItem = ref<HTMLElement>()
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
    @click="()=>{
      router.go(item.link)
      $emit('close')
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
  box-sizing: border-box;
  width: 100%;
}

.link {
  padding: 10px 16px;
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
