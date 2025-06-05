import { createVNode, render } from 'vue';
import MVContextMenu from './MVContextMenu.vue';

let contextMenuEl: HTMLDivElement | null = null;

function showContextMenu(event: MouseEvent, menu: MVContextMenuItem[]) {
  if (contextMenuEl) {
    hideContextMenu();
  }

  contextMenuEl = document.createElement('div');

  const vNode = createVNode(MVContextMenu, {
    x: event.x,
    y: event.y,
    actions: menu,
  });
  vNode.appContext = getCurrentInstance()?.appContext || null;

  render(vNode, contextMenuEl);

  document.body.appendChild(contextMenuEl);
}

function hideContextMenu() {
  contextMenuEl?.remove();
  contextMenuEl = null;
}

export { showContextMenu, hideContextMenu };
