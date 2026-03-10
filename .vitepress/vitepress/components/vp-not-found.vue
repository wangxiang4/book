<script setup lang="ts">
  import dict from "../../dictionary/pages/not-found.json"
  import { isClient } from '@vueuse/core'
  import { homePage } from '~/constant'

  const goHome = () => {
    if (!isClient) return
    window.location.href = homePage()
  }
</script>

<template>
  <ElResult icon="error"
            :title="dict.title"
            :sub-title="dict.desc"
  >
    <template #extra>
      <ElButton @click="goHome">{{ dict['button-title'] }}</ElButton>
    </template>
  </ElResult>
</template>

<style lang="scss" scoped>
.el-result {
  height: 50vh;
}
</style>
