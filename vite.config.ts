import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Exclude node_modules from transformation
      exclude: /node_modules/,
    })
  ],
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
  
  // Build optimizations
  build: {
    // Enable source maps for production debugging
    sourcemap: true,
    
    // Target modern browsers
    target: 'es2020',
    
    // Use default minification
    minify: 'esbuild',
    
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // Split chunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor';
          }
        }
      }
    }
  },
  
  // Preview server config
  preview: {
    port: 4173,
    strictPort: true,
  },
  
  // Dev server config
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    open: true,
  },
})