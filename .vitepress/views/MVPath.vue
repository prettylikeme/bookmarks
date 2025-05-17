<template>
  <div class="display-flex">
    <VPHomeContent>
      <VPTree :tree="dirTree" />
      <MVBookmarkPath :data="pathMap" />
    </VPHomeContent>
  </div>
</template>

<script lang="ts" setup>
import { VPHomeContent } from 'vitepress/theme';
import VPTree from '@/components/MVTree.vue';
import { dirTree, pathMap } from '@/utils/init';
</script>

<style lang="scss" module></style>
