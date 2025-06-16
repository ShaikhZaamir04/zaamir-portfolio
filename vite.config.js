import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020', // Serve modern JS
    minify: 'esbuild', // Fast minification
    chunkSizeWarningLimit: 500, // Reduce chunk warning spam
    assetsInlineLimit: 8192, // Inline small assets (8KB)
    cssCodeSplit: true, // Split CSS for faster first paint
  },
  server: {
    open: true, // Auto-open browser during local dev
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: allows clean imports like "@/components/..."
    },
  },
});
