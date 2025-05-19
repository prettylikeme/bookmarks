<template>
  <!-- 文件夹 -->
  <div class="path-list">
    <div v-for="item in path" @click="emit('go-dir', item.path)" class="path-item unselectable">{{ item.name }}</div>
  </div>
  <div class="m-nav-links">
    <div v-for="item in dirs" :key="item" @click="goDir(item)" class="folder unselectable">{{ item }}</div>
    <!-- 书签 -->
    <MVBookmark v-for="item in bookmarks" :key="item.url" :data="item" />
  </div>
</template>

<script setup lang="ts">
const { data } = defineProps<{
  data: BookmarkPath;
}>();

const emit = defineEmits<{
  (e: 'go-dir', dir: BookmarkPath): void;
}>();

const dirs = computed(() => [...data.keys()].filter((v) => v !== '.' && v !== '..'));

const bookmarks = computed(() => (data.get('.') as BookmarkFolder).bookmarks);

const path = computed(() => {
  const path = [];
  let dataPath: BookmarkPath | undefined = data;
  do {
    path.unshift({ name: (dataPath.get('.') as BookmarkFolder).name, path: dataPath });
    dataPath = dataPath.get('..') as BookmarkPath | undefined;
  } while (dataPath);
  return path;
});

const goDir = (dir: string) => {
  const nextDir = data.get(dir) as BookmarkPath | undefined;
  if (nextDir) {
    emit('go-dir', nextDir);
  }
};
</script>

<style lang="scss" scoped>
.unselectable {
  user-select: none;
}
.path-list {
  display: flex;
}
.path-item {
  position: relative;
  padding: 0 10px;
  border: 1px solid #ccc;
  line-height: 2;
  border-radius: 0.5em;
  cursor: pointer;
  & + & {
    margin-left: 20px;
  }
  &:not(:first-child)::before {
    content: '/';
    position: absolute;
    left: -15px;
    pointer-events: none;
    margin-right: 10px;
    transform: translate(50%);
  }
}

.folder {
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  cursor: pointer;
  display: flex;
  line-height: 40px;
  padding: 10px;
}

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

@each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
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
