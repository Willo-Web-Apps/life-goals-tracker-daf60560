import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://life-goals-tracker.onrender.com',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
