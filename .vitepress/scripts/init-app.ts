import { getEl } from '@/utils/element';
import { type Theme } from 'vitepress';

let enhanceApp: Theme['enhanceApp'];

if (typeof window === 'undefined') {
  enhanceApp = () => {};
} else {
  enhanceApp = function ({ app, router, siteData }) {
    if (!document) return;
    const rootEl = getEl<HTMLDivElement>('#app');

    rootEl?.addEventListener('mousedown', hideContextMenu, { capture: true });
    rootEl?.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
      showContextMenu(e);
    });
  };
}

export { enhanceApp };
