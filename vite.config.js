import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gamehub-patel6nr/',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
})
