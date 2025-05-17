<template>
  <div class="display-flex">
    <VPHomeContent>
      <MVBookmarkCategoryOrTag :data="tagMap" />
    </VPHomeContent>
  </div>
</template>

<script lang="ts" setup>
import { VPHomeContent } from 'vitepress/theme';
import { tagMap } from '@/utils/init';
</script>

<style lang="scss" module></style>
