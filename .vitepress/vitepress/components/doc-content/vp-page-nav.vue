<script setup lang="ts">
  import { withBase } from 'vitepress'
  import { usePageNav } from '~/composables/page-nav'
  import { deviceBreakpoints } from '~/constant'

  const { hasLinks, prev, next } = usePageNav()
  const isDesktop = deviceBreakpoints.greater('lg')
</script>

<template>
  <div v-if="hasLinks" class="pagination">
    <div class="btn-prev">
      <a v-if="prev" class="link" :href="withBase(prev.link)">
        <i-msl-arrow-back-2-outline-rounded />
        <ClientOnly>
          <ElTooltip v-if="isDesktop"
                     :content="prev.text"
                     placement="top"
                     effect="light"
                     :show-after="600">
            <span class="text">{{ prev.text }}</span>
          </ElTooltip>
          <span v-else class="text">{{ prev.text }}</span>
        </ClientOnly>
      </a>
    </div>
    <div class="btn-next">
      <a v-if="next" class="link" :href="withBase(next.link)">
        <ClientOnly>
          <ElTooltip v-if="isDesktop"
                     :content="next.text"
                     placement="top"
                     effect="light"
                     :show-after="600">
            <span class="text">{{ next.text }}</span>
          </ElTooltip>
          <span v-else class="text">{{ next.text }}</span>
        </ClientOnly>
        <i-msl-play-arrow-outline-rounded />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;

  .btn-prev,
  .btn-next {
    display: flex;
    flex-shrink: 0;
    width: 50%;
  }

  .btn-prev {
    justify-content: flex-start;
  }

  .btn-next {
    justify-content: flex-end;
  }

  .link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: 24px;
    font-size: 14px;
    font-weight: 500;

    .text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    svg {
      flex-shrink: 0;
      font-size: 28px;
      color: var(--text-color-light);
      transform: translateY(1px);
    }
  }
}
</style>
