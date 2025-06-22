import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import viteConfig from './vite.config.js';

export default defineConfig({
  integrations: [react()],
  vite: () => viteConfig
});
