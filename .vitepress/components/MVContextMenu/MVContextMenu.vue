<template>
  <div
    class="mv-context-menu-wrapper"
    :style="{ left: x + 'px', top: y + 'px' }"
  >
    <MVContextMenuItem v-for="item in actions" :data="item"></MVContextMenuItem>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  x: number;
  y: number;
  actions: MVContextMenuItem[];
}>();
</script>

<style lang="scss" scoped>
.mv-context-menu-wrapper {
  position: fixed;
  z-index: 10000;
  padding: 10px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: #0003 0 0 5px;
}
</style>
