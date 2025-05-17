<template>
  <div class="display-flex">
    <VPHomeContent>
      <MVBookmarkCategoryOrTag :data="categoryMap" />
    </VPHomeContent>
  </div>
</template>

<script lang="ts" setup>
import { VPHomeContent } from 'vitepress/theme';
import { categoryMap } from '@/utils/init';
</script>

<style lang="scss" module></style>
