import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
  },
})