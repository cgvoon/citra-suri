import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { qrcode } from 'vite-plugin-qrcode'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), qrcode()],
})
