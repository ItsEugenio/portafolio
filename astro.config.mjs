import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  server: {
    host: true,
    port: Number(process.env.PORT) || 4321
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      port: Number(process.env.PORT) || 4321,
      allowedHosts: ['.railway.app', 'www.itseugenio.dev', 'itseugenio.dev']
    },
    preview: {
      host: true,
      port: Number(process.env.PORT) || 4321,
      allowedHosts: ['.railway.app', 'www.itseugenio.dev', 'itseugenio.dev']
    }
  }
});
