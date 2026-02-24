<template>
  <!-- 分类列表 -->
  <div class="m-nav-links">
    <div
      v-for="item in categoryList"
      :key="item"
      @click="activeCategory = item"
    >
      {{ item }}
    </div>
  </div>
  <div class="m-nav-links">
    <!-- 书签 -->
    <MVBookmark v-for="item in bookmarks" :key="item.url" :data="item" />
  </div>
</template>

<script setup lang="ts">
import { tagMap } from '@/scripts/init-data';

const categoryList = [...tagMap.keys()];
const activeCategory = shallowRef(categoryList[0]);

const bookmarks = computed(() => {
  return tagMap.get(activeCategory.value) as Bookmark[];
});
</script>

<style lang="scss" scoped>
.m-nav-links {
  --m-nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--m-nav-gap);
  grid-column-gap: var(--m-nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--m-nav-gap);
}

@each $media,
  $size
    in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px)
{
  @media (min-width: $media) {
    .m-nav-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (min-width: 960px) {
  .m-nav-links {
    --m-nav-gap: 20px;
  }
}
</style>
