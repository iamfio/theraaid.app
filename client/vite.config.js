import * as url from 'url'
import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  plugins: [react()]
})
