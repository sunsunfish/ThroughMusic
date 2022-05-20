import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './manifest.json';
import { loadEnv } from 'vite';
const env = loadEnv('development', process.cwd());
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: env.VITE_API_BASE_URL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
  },
  plugins: [
    react(),
    VitePWA({
      manifest,
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      // switch to "true" to enable sw on development
      devOptions: {
        enabled: false,
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
