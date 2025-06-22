// vite.config.js
export default {
    preview: {
      host: true,
      port: process.env.PORT || 4321,
      allowedHosts: ['.railway.app'] // ← permite todos los subdominios de Railway
    }
  }
  