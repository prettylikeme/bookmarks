import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { DefaultTheme, UserConfig } from 'vitepress';

export default {
  plugins: [
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
      ],
      imports: ['vue'],
      dirsScanOptions: {
        types: true,
      },
      dirs: ['./.vitepress/components/**', './.vitepress/views/**', '.vitepress/theme/**'],
      dts: './auto-imports.d.ts',
    }),
    Components({
      dirs: ['.vitepress/components/**'],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('.vitepress'),
    },
  },
} as UserConfig<DefaultTheme.Config>['vite'];
