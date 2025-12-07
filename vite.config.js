import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    strictPort: false,
    allowedHosts: [
      'localhost',
      '.railway.app',
      '.up.railway.app'
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: false
  }
})

