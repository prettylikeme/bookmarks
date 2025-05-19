<template>
  <div class="display-flex">
    <VPHomeContent>
      <VPTree :tree="dirTree" />
      <MVBookmarkPath :data="dataMap" @go-dir="setDataMap($event)" />
    </VPHomeContent>
  </div>
</template>

<script lang="ts" setup>
import { VPHomeContent } from 'vitepress/theme';
import VPTree from '@/components/MVTree.vue';
import { dirTree, pathMap } from '@/utils/init';

const dataMap = shallowRef(pathMap);

const setDataMap = (data: BookmarkPath) => {
  dataMap.value = data;
};
</script>

<style lang="scss" module></style>
