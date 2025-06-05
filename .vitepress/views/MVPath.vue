<template>
  <div class="display-flex">
    <VPHomeContent>
      <MVBookmarkPath :data="dataMap" @go-dir="setDataMap($event)" />
    </VPHomeContent>
  </div>
</template>

<script lang="ts" setup>
import { VPHomeContent } from 'vitepress/theme';
import { pathMap } from '@/scripts/init-data';

const dataMap = shallowRef(pathMap);

const setDataMap = (data: BookmarkPath) => {
  dataMap.value = data;
};
</script>

<style lang="scss" scoped></style>
