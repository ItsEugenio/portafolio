import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    preview: {
      host: true,
      port: Number(process.env.PORT) || 4321,
      allowedHosts: ['.railway.app']
    }
  }
});
