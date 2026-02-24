<template>
  <div class="display-flex">
    <VPHomeContent>
      <ClientOnly>
        <MVBookmarkCategory />
      </ClientOnly>
    </VPHomeContent>
  </div>
</template>

<script lang="ts" setup>
import { VPHomeContent } from 'vitepress/theme';
</script>

<style lang="scss" scoped></style>
