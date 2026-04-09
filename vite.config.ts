import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base:'/project-catapi/',
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        favorites: resolve(__dirname, 'favorites.html'),
      },
    },
  },
})