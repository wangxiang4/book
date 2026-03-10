<template>
  <img
    :src="src"
    :style="mergedImgStyle"
    alt="Toggle theme image"
  />
</template>

<script setup lang="ts">
  import { watch, computed, ref } from 'vue';
  import { isDark } from '~/composables/dark'

  interface Props {
    lightSrc: string
    darkSrc: string
    imgStyle?: Record<string, string | number>
  }
  const props = defineProps<Props>()
  const src = ref('')


  watch(() => isDark.value,
    (newVal) => {
      newVal ? src.value = props.darkSrc : src.value = props.lightSrc
    },{
      immediate: true,
      flush: 'post'
    })

  const defaultImgStyle = {
    width: '256px',
    height: 'auto'
  }

  const mergedImgStyle = computed(() => ({
    ...defaultImgStyle,
    ...(props.imgStyle ?? {})
  }))
</script>
