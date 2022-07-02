import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@asset': resolve(__dirname, 'src/assets'),
      '@component': resolve(__dirname, 'src/components'),
      '@store': resolve(__dirname, 'src/stores')
    }
  },
  define: {
    'process.env': {}
  }
})
