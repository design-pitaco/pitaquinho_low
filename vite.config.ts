import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pitaquinho/',
  plugins: [react()],
  server: {
    proxy: {
      '/sportsdb': {
        target: 'https://www.thesportsdb.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sportsdb/, ''),
      },
    },
  },
})
