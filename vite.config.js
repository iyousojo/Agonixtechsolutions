import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // AUTO base — works on Vercel AND GitHub Pages forever
  base: process.env.GITHUB_PAGES === 'true' 
    ? '/Agonixtechsolutions/'   // ← change only this part if your repo name ever changes
    : '/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})