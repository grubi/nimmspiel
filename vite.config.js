import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  base: '/nimmspiel/',  // WICHTIG: Name des GitHub-Repos
  plugins: [svelte()],
})
