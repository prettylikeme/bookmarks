<script lang="ts" setup>
defineProps<{
  tree: Directory;
}>();
</script>

<template>
  <ul>
    <li>
      <div>{{ tree.name }}</div>
      <MVTree v-for="item in tree.children" :tree="item" />
    </li>
  </ul>
</template>

<style lang="scss" module></style>
