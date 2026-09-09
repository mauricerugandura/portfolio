import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative asset paths work locally and from the /portfolio/ GitHub Pages URL.
  base: './',
  plugins: [react(), tailwindcss()]
})
