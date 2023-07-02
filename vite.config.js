import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import pages from 'vite-plugin-pages';
import inspector from 'vite-plugin-vue-inspector';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    inspector({
      toggleComboKey: false,
      toggleButtonVisibility: 'always',
    }),
    pages({
      dirs: [
        {
          dir: resolve(__dirname, './src/pages'),
          baseRoute: '',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
