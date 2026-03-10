<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { isDark, toggleDark } from '~/composables/dark'
  import DarkIcon from '../icons/dark.vue'
  import LightIcon from '../icons/light.vue'
  import { useThemeTransition } from '~/composables/toggle-theme-transition'

  import type { SwitchInstance } from 'element-plus'

  const darkMode = ref(isDark.value)
  const switchRef = ref<SwitchInstance>()
  const { toggle } = useThemeTransition()

  watch(
    () => isDark.value,
    (newVal) => {
      darkMode.value = newVal
    }
  )

  watch(
    () => darkMode.value,
    (newVal) => {
      if (newVal !== isDark.value) {
        toggleDark()
      }
    }
  )

  const beforeChange = () => new Promise<boolean>((resolve) =>
    toggle({ element: switchRef.value?.$el }, resolve))
</script>

<template>
  <ClientOnly>
    <el-switch
      ref="switchRef"
      v-model="darkMode"
      v-bind="$attrs"
      :before-change="beforeChange"
      :active-action-icon="DarkIcon"
      :inactive-action-icon="LightIcon"
      @click.stop
    />
  </ClientOnly>
</template>

<style lang="scss" scoped>
:deep(.el-switch__core) {
  --el-switch-on-color: var(--bg-color-mute);
  --el-switch-off-color: var(--bg-color-mute);
  --el-switch-border-color: var(--border-color);

  .el-switch__action {
    width: 14px;
    height: 14px;
  }
}

:deep(.dark-icon) {
  border-radius: 50%;
  color: #cfd3dc;
  background-color: #141414;
}

:deep(.light-icon) {
  color: #606266;
}
</style>
