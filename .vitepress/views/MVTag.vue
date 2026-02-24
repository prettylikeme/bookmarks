<template>
  <div class="display-flex">
    <VPHomeContent>
      <ClientOnly>
        <MVBookmarkTag />
      </ClientOnly>
    </VPHomeContent>
  </div>
</template>

<script lang="ts" setup>
import { VPHomeContent } from 'vitepress/theme';
</script>

<style lang="scss" scoped></style>
