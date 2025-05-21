import { createVNode, render } from 'vue';
import MVContextMenu from './MVContextMenu.vue';

let contextMenuEl: HTMLDivElement | null = null;

function showContextMenu(event: MouseEvent) {
  if (contextMenuEl) {
    hideContextMenu();
  }

  contextMenuEl = document.createElement('div');

  const vNode = createVNode(MVContextMenu, { x: event.x, y: event.y });
  vNode.appContext = getCurrentInstance()?.appContext || null;

  render(vNode, contextMenuEl);

  document.body.appendChild(contextMenuEl);
}

function hideContextMenu() {
  contextMenuEl?.remove();
  contextMenuEl = null;
}

export { showContextMenu, hideContextMenu };
