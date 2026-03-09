<script setup lang="ts">
  import dict from "../../dictionary/pages/not-found.json"
  import { isClient } from '@vueuse/core'

  const goHome = () => {
    if (!isClient) return
    window.location.href = `/`
  }
</script>

<template>
  <ElResult icon="error" :title="dict.title" :sub-title="dict.desc">
    <template #extra>
      <ElButton @click="goHome">{{ dict['button-title'] }}</ElButton>
    </template>
  </ElResult>
</template>
