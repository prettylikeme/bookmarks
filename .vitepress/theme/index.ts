// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import { useData, type Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import MVCategory from '@/views/MVCategory.vue';
import MVPath from '@/views/MVPath.vue';
import MVTag from '@/views/MVTag.vue';
import './style.css';
import '@/utils/init';

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { frontmatter } = useData();

    if (frontmatter.value.customLayout === 'path') {
      return h(DefaultTheme.Layout, null, {
        'page-top': () => h(MVPath),
      });
    }

    if (frontmatter.value.customLayout === 'category') {
      return h(DefaultTheme.Layout, null, {
        'page-top': () => h(MVCategory),
      });
    }

    if (frontmatter.value.customLayout === 'tag') {
      return h(DefaultTheme.Layout, null, {
        'page-top': () => h(MVTag),
      });
    }

    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
