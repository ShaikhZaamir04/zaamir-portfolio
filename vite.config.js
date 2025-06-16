import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    compression(), // Enable gzip compression
    visualizer({ open: false }) // Set to true if you want to open stats report after build
  ],
  resolve: {
    alias: {
      '@': '/src', // Cleaner import paths: import x from '@/components/X'
    },
  },
  build: {
    target: 'es2020', // Better tree-shaking and smaller bundle
    minify: 'esbuild', // Fastest and most effective for modern projects
    cssCodeSplit: true,
    assetsInlineLimit: 8192,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Separate large libs
        },
      },
    },
  },
  server: {
    open: true, // Opens browser on localhost during dev
  },
});
