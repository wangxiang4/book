<script setup lang="ts">
import { withBase } from 'vitepress'
import { usePageNav } from '../../composables/page-nav'
import { deviceBreakpoints } from '~/constant'

const { hasLinks, prev, next } = usePageNav()
const isDesktop = deviceBreakpoints.greater('lg')
</script>

<template>
  <div v-if="hasLinks" class="next-and-prev-link">
    <div class="container">
      <div class="prev">
        <a v-if="prev" class="link" :href="withBase(prev.link)">
          <i-msl-arrow-back-2-outline-rounded class="nav-icon" />
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
      <div class="next">
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
          <i-msl-play-arrow-outline-rounded class="nav-icon"/>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.next-and-prev-link {
  padding: 1rem 0;
}

.container {
  display: flex;
  justify-content: space-between;
}

.prev,
.next {
  display: flex;
  flex-shrink: 0;
  width: 50%;
}

.prev {
  justify-content: flex-start;
}

.next {
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
    width: 28px;
    height: 28px;
    color: var(--text-color-light);
    transform: translateY(1px);
  }
}
</style>
