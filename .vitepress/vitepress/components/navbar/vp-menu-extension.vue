<script setup lang="ts">
  import { isActiveLink } from '~/utils';
  import { useRoute, useRouter } from 'vitepress';
  import { useNav } from '~/composables/nav'
  import { Link } from '~/types';

  const route = useRoute()
  const navs = useNav()
  const router = useRouter()
  const expandMenus: Link[] = navs.value?.slice(3)
</script>

<template>
  <div class="menu-extension-container">
    <ClientOnly>
      <ElDropdown popper-class="menu-extension-popup">
        <ElIcon :size="24">
          <i-ri-menu-line />
        </ElIcon>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem
              v-for="(item, key) in expandMenus"
              :key="key"
              :class="{
                'menu-item': true,
                active: isActiveLink(route, item.activeMatch)
              }"
              @click="router.go(item.link)"
            >
              {{ item.text }}
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixins' as *;
.menu-extension-container {
  display: none;
  height: 24px;
  padding: 0 12px;
  cursor: pointer;

  @include up-from('md') {
    display: block;
  }
}
</style>

<style lang="scss">
.el-dropdown__popper.menu-extension-popup {
  --el-bg-color-overlay: var(--bg-color);
  --el-popper-border-radius: 8px;
  --el-border-color-light: transparent;

  padding: 7px 0;
  min-width: 192px;
  font-size: 14px;
  font-weight: 500;

  .menu-item:hover {
    color: var(--brand-color);
    transition: color 0.25s;
    background-color: transparent;
  }

  .menu-item {
    line-height: 28px;
    border-radius: 8px;
  }

  .menu-item.active {
    background-color: var(--bg-color-link-active);
    --el-text-color-regular: var(--brand-color);
  }
}
</style>
