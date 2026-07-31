import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Hash routing / relative paths para compatibilidade total com GitHub Pages & hosting estático
  server: {
    port: 3000,
    host: true
  }
});
