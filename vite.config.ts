import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  // 👇 Required for GitHub Pages
  base: '/FarmAid/',

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@components/ui', replacement: path.resolve(__dirname, 'src/components/ui') },
      { find: '@lib', replacement: path.resolve(__dirname, 'src/lib') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') }
    ]
  },

  build: {
    target: 'esnext',
    outDir: 'dist',
  },

  server: {
    port: 3000,
    open: true,
  },
});
