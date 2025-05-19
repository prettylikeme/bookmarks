import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '520 导航',
  description: '520 导航工具',
  outDir: '.vitepress/dist/docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文件夹', link: '/path' },
      { text: '分类', link: '/category' },
      { text: '标签', link: '/tag' },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
  vite: {
    configFile: './.vitepress/vite.config.mts',
  },
});
