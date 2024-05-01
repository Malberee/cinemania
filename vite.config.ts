import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: '/cinemania/',
  resolve: {
    alias: {
      components: '/src/components',
      pages: '/src/pages',
      services: '/src/services',
      store: '/src/store',
      hooks: '/src/hooks',
      icons: '/src/icons',
      theme: '/src/theme',
    },
  },
})
