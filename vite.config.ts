import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const base = '/';
    return {
      base,
      server: {
        port: 3000,
        host: '0.0.0.0',
        watch: {
          ignored: ['**/public/**', '**/dist/**'],
        },
      },
      plugins: [react()],
      define: {},
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
