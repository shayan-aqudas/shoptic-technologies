// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://shayan-aqudas.github.io',
  base: '/shoptic-technologies',
  vite: {
    plugins: [tailwindcss()]
  }
});
