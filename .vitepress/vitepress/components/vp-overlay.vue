<script setup lang="ts">
  import { useLockScreen } from '~/composables/lock-scrollbar';

  defineProps<{
    show: boolean
  }>()
  const { lock, cleanup } = useLockScreen()
</script>

<template>
  <Transition name="el-fade-in" @enter="lock" @after-leave="cleanup">
    <div v-if="show" class="overlay"/>
  </Transition>
</template>
