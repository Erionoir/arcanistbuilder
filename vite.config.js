import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  root: '.',
  publicDir: 'assets',
  server: {
    port: 3000,
    host: true,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      input: {
        main: resolve(fileURLToPath(new URL('.', import.meta.url)), 'index.html')
      },
      output: {
        manualChunks: {
          vendor: ['three', 'gsap'],
          animations: ['framer-motion', 'lenis']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  css: {
    postcss: './postcss.config.js'
  },
  resolve: {
    alias: {
      '@': resolve(fileURLToPath(new URL('.', import.meta.url)), 'src'),
      '@assets': resolve(fileURLToPath(new URL('.', import.meta.url)), 'assets'),
      '@css': resolve(fileURLToPath(new URL('.', import.meta.url)), 'css'),
      '@js': resolve(fileURLToPath(new URL('.', import.meta.url)), 'js')
    }
  },
  optimizeDeps: {
    include: ['three', 'gsap', 'framer-motion', 'lenis']
  }
});