<template>
  <div
    v-if="data.type === 'action'"
    class="mv-context-menu-item"
    @click.stop="onAction(data)"
  >
    <slot>{{ data.title }}</slot>
  </div>
  <div
    v-else-if="data.type === 'divider'"
    class="mv-context-menu-divider"
  ></div>
</template>

<script setup lang="ts">
defineProps<{
  data: MVContextMenuItem;
}>();

const emit = defineEmits<{
  (e: 'action', event: MvContextMenuAction): void;
}>();

const onAction = (data: MVContextMenuItem) => {
  emit('action', { event: data.type });
  hideContextMenu();
};
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
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
  }
}
.mv-context-menu-divider {
  margin: 5px 0;
  height: 1px;
  background-color: #f6f6f6;
  width: 100%;
}
</style>
