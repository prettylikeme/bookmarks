<template>
  <div class="mv-context-menu-item">
    <slot>{{ title }}</slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  type: string;
}>();
</script>

<style lang="scss" scoped>
.mv-context-menu-item {
  min-width: 200px;
  line-height: 30px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    background-color: #f6f6f6;
  }
}
</style>
